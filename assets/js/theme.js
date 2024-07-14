// i spent wat too much time converting my Vue + Nuxt 3 Implementation of this
//  into vanilla JS. It TECHNICALLY works... 
//  that is... as long as the DOM decides to do it's job.
//
// "Big Tech Hates Customization...
//  now i see why."
//

// Watch for the following content from the DOM
document.addEventListener("DOMContentLoaded", function () {
  // The Silly Icon in the top right corner
  const themeButton = document.getElementById("themeButton");
  
  // Took too long to get working properly.
  //  Popover Panels are my least favorite thing to work with
  const popoverPanel = document.getElementById("popoverPanel");

  // Self explanatory
  const colorList = document.getElementById("colorList");

  // define color schemes from root.css
  const colorSchemes = [
    "system",
    "light",
    "dark",
    "sepia",
    "sepia-dark",
    "gruvbox",
    "gruvbox-light",
    "nord",
    "nord-light",
    "rose-pine",
    "rose-pine-dawn",
    "tokyonight",
    "tokyonight-light",
    "srcery",
    "horizon",
  ];

  // Add event listeners to color scheme buttons
  colorSchemes.forEach((color) => {
    const listItem = document.createElement("li");
    const schemeButton = document.createElement("button");
    schemeButton.textContent = color;
    schemeButton.addEventListener("click", () => {
      applyColorScheme(color);
      popoverPanel.classList.toggle("hide");
    });
    listItem.appendChild(schemeButton);
    colorList.appendChild(listItem);
  });

  // Function to apply selected color scheme
  function applyColorScheme(color) {
    document.body.setAttribute("data-theme", color);
  }

  // Show/Hide the theme popover
  themeButton.addEventListener("click", () => {
    popoverPanel.classList.toggle("hide");
  });

  // Load saved theme from local storage
  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyColorScheme(savedTheme);
    } else {
      savedTheme("system"); // Default theme if none saved
    }
  }

  // Initialize with saved theme if available
  loadTheme();
});
