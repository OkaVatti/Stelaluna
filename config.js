// ┌─┐┌┬┐┌─┐┌  ┌─┐┌  ┬ ┬┌┐┌┌─┐
// └─┐ │ ├┤ │  ├─┤│  │ ││││├─┤
// └─┘ ┴ └─┘└─┘┴ ┴└─┘└─┘┘└┘┴ ┴
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘




const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Jane",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: "morning",
  greetingAfternoon: "afternoon",
  greetingEvening: "good evening",
  greetingNight: "good night",

  // Layout
  bentoLayout: "lists", // 'luna', 'lists', 'buttons'

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",




  // ┌─┐┌─┐┌─┐┌┬┐┬┌─┐┐ ┐
  // └─┐├─┘│ │ │ │├┤ └─┤
  // └─┘┴  └─┘ ┴ ┴└  └─┘

  // Refer to documentation

  // API Shit
  SpotifyClientID: "change-me", // replace this with your Application Client ID
  SpotifyClientSecret: "change-me", // Replace with your Application Client Secret
  SpotifyRedirectURI: "http://127.0.0.1:8000/", // Replace with your redirect URI. I like to set mine to localhost:8000




  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.proton.me/",
    },
    {
      id: "3",
      name: "Todoist",
      icon: "trello",
      link: "https://todoist.com",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.proton.me/",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "YouTube",
      icon: "youtube",
      link: "https://www.youtube.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "Hacker News",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],



  
  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "playlist 1",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "playlist 2",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "playlist 3",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          name: "playlist 4",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "mail",
          link: "https://mail.proton.me",
        },
        {
          name: "calendar",
          link: "https://calendar.proton.me",
        },
        {
          name: "pinterest",
          link: "https://www.pinterest.com",
        },
        {
          name: "indeed",
          link: "https://indeed.com/",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "reuters",
          link: "https://www.reuters.com/technology/cybersecurity/",
        },
        {
          name: "brutalist",
          link: "https://brutalist.report/",
        },
        {
          name: "hacker news",
          link: "https://news.ycombinator.com/",
        },
        {
          name: "wired",
          link: "https://www.wired.com/category/security/",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "github",
          link: "https://github.com/",
        },
        {
          name: "repos",
          link: "https://github.com/okavatti",
        },
        {
          name: "nuxt 3",
          link: "https://nuxt.com/docs/api",
        },
        {
          name: "hypercore",
          link: "https://docs.holepunch.to",
        },
      ],
    },
  ],
};
