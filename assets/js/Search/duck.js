async function fetchResults(query) {
  const url = `http://localhost:3000/search?q=${encodeURIComponent(query)}`;
  const resultsContainer = document.getElementById('results');
  const loadingIndicator = document.getElementById('loading');
  
  // Show loading indicator
  loadingIndicator.style.display = 'block';
  resultsContainer.innerHTML = '';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const html = await response.text();
    displayResults(html);
  } catch (error) {
    console.error('Error fetching search results:', error);
    resultsContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
  } finally {
    // Hide loading indicator
    loadingIndicator.style.display = 'none';
  }
}

function cleanURL(url) {
  if (url.startsWith('http://duckduckgo.com/l/?uddg=')) {
    url = decodeURIComponent(url.replace('http://duckduckgo.com/l/?uddg=', ''));
  }
  return url.split('&rut=')[0];
}

function displayResults(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const results = doc.querySelectorAll('.result');
  const resultsContainer = document.getElementById('results');

  let resultHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found. Please try a different query.</p>';
    return;
  }

  results.forEach((result) => {
    const title = result.querySelector('.result__title').innerText;
    let link = result.querySelector('.result__url').href;
    const snippet = result.querySelector('.result__snippet').innerText;

    link = cleanURL(link);

    resultHTML += `
      <div class="result-item">
        <a href="${link}" target="_blank">${title}</a>
        <p>${snippet}</p>
      </div>
    `;
  });

  resultsContainer.innerHTML = resultHTML;
}

// Get the query from the URL or localStorage
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('q') || localStorage.getItem('searchQuery');

if (query) {
  // Set the page title and heading to the search query
  document.title = `Results for "${query}"`;
  document.getElementById('searchTitle').textContent = `Results for "${query}"`;

  fetchResults(query);
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value;
  if (query) {
    // Save the query to localStorage
    localStorage.setItem('searchQuery', query);
    // Redirect to the results page
    window.location.href = `/pages/q/?q=${encodeURIComponent(query)}`;
  }
});