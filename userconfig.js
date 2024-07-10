let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Asuncion",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dai ly",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "newspapers",
          links: [
            {
              name: "abc",
              url: "https://www.abc.com.py",
              icon: "news",
              icon_color: "#f9e2af",
            },
            {
              name: "marca",
              url: "https://www.marca.com",
              icon: "ball-football",
              icon_color: "#f38ba8",
            },
            {
              name: "ultima hora",
              url: "https://www.ultimahora.com",
              icon: "news",
              icon_color: "#cdd6f4",
            },
          ],
        },
        {
          name: "mail",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "outlook",
              url: "https://outlook.live.com/mail/0",
              icon: "brand-onedrive",
              icon_color: "#89b4fa",
            },
            {
              name: "skiff",
              url: "https://app.skiff.com/mail/inbox",
              icon: "mail",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io/",
              icon: "droplet",
              icon_color: "#74c7ec",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "dev",
          links: [
            {
              name: "chatgpt",
              url: "https://chat.openai.com",
              icon: "brand-openai",
              icon_color: "#94e2d5",
            },
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#b4befe",
            },
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/",
              icon: "brain",
              icon_color: "#b4befe",
            },
          ],
        },
        {
          name: "study",
          links: [
            {
              name: "hackthebox",
              url: "https://account.hackthebox.com/login",
              icon: "box",
              icon_color: "#a6e3a1",
            },
            {
              name: "kaggle",
              url: "https://www.kaggle.com/",
              icon: "brain",
              icon_color: "#f9e2af",
            },
            {
              name: "skills4all",
              url: "https://skillsforall.com/",
              icon: "access-point",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "easywp",
              url: "https://dashboard.easywp.com/login",
              icon: "brand-wordpress",
              icon_color: "#b4befe",
            },
            {
              name: "me",
              url: "https://rodrigomurayama.com/",
              icon: "user",
              icon_color: "#cba6f7",
            },
            {
              name: "namecheap",
              url: "https://www.namecheap.com/",
              icon: "accessible",
              icon_color: "#fab387",
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "bluesky",
              url: "https://bsky.app",
              icon: "butterfly",
              icon_color: "#89b4fa",
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: "#89b4fa",
            },
            {
              name: "insta",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: "#fab387",
            },
            {
              name: "mastodon",
              url: "https://terere.social/explore",
              icon: "brand-mastodon",
              icon_color: "#94e2d5",
            },
            {
              name: "x",
              url: "https://x.com/home",
              icon: "brand-x",
              icon_color: "#f5c2e7",
            },
          ],
        },
        {
          name: "random",
          links: [
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "kick",
              url: "https://kick.com/",
              icon: "brand-kick",
              icon_color: "#a6e3a1",
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: "#cba6f7",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
          ],
        },
      ],
    },
    {
      name: "resour",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "deviant art",
              url: "https://www.deviantart.com/",
              icon: "brand-deviantart",
              icon_color: "#a6e3a1",
            },
            {
              name: "pixiv",
              url: "https://pixiv.net/",
              icon: "brand-funanimation",
              icon_color: "#89b4fa",
            },
            {
              name: "wallhaven",
              url: "https://wallhaven.cc/",
              icon: "wall",
              icon_color: "#cdd6f4",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);