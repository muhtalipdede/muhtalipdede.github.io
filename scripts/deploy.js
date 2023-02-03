import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/muhtalipdede/muhtalipdede.github.io.git", // Update to point to your repository
    user: {
      name: "Muhtalip Dede", // update to use your name
      email: "muhtalipdede@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
