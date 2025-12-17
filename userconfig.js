// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Asuncion",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  disabled: [],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://app.raindrop.io/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "mail",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "icloud",
              url: "https://www.icloud.com/",
              icon: "brand-apple",
              icon_color: palette.blue,
            },
            {
              name: "protonmail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "atom",
              icon_color: palette.purple,
            },
            {
              name: "outlook",
              url: "https://outlook.live.com/mail/0",
              icon: "mail",
              icon_color: palette.blue,
            },
            {
              name: "yahoo",
              url: "https://mail.yahoo.com/n/inbox/priority?.src=ym&reason=myc",
              icon: "mail",
              icon_color: palette.purple,
            },
          ],
        },
        {
          name: "ai",
          links: [
            {
              name: "chatGPT",
              url: "https://chat.openai.com",
              icon: "brand-openai",
              icon_color: palette.white,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/app",
              icon: "brand-google",
              icon_color: palette.peach,
            },
            {
              name: "claude",
              url: "https://claude.ai/new",
              icon: "ai",
              icon_color: palette.orange,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.white,
            },
            {
              name: "netflix",
              url: "https://www.netflix.com/browse",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "news",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "newspapers",
          links: [
            {
              name: "abc",
              url: "https://www.abc.com.py",
              icon: "news",
              icon_color: palette.yellow,
            },
            {
              name: "marca",
              url: "https://www.marca.com",
              icon: "ball-football",
              icon_color: palette.red,
            },
            {
              name: "uh",
              url: "https://www.ultimahora.com",
              icon: "news",
              icon_color: palette.white,
            },
          ],
        },
        {
          name: "feeds",
          links: [
            {
              name: "inoreader",
              url: "https://www.inoreader.com/dashboard",
              icon: "rss",
              icon_color: palette.blueS,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "local guides",
          links: [
            {
              name: "asunciON!",
              url: "https://asuncion.live/",
              icon: "calendar-event",
              icon_color: palette.red,
            },
            {
              name: "visit paraguay",
              url: "https://visitparaguay.travel/",
              icon: "map",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "socials",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "x",
              url: "https://x.com/home",
              icon: "brand-x",
              icon_color: palette.white,
            },
          ],
        },
        {
          name: "chat",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.blue,
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "other",
          links: [
            {
              name: "ente",
              url: "https://web.ente.io/gallery",
              icon: "photo-up",
              icon_color: palette.green,
            },
            {
              name: "flickr",
              url: "https://www.flickr.com",
              icon: "brand-flickr",
              icon_color: palette.pink,
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com",
              icon: "brand-linkedin",
              icon_color: palette.blue,
            },
            {
              name: "bluesky",
              url: "https://bsky.app",
              icon: "brand-bluesky",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
