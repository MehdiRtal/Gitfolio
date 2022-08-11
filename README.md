# Gitfolio
**Gitfolio** is an easy to use portfolio builder where you can create a portfolio page automatically by just providing your GitHub username. It is built using Nuxt.js and Vuetify. But it's not necessary to have knowledge on these to get you started. You can make your own copy with zero coding experience.

# Features
- Easy to Setup
- SEO
- Avatar and Bio
- Social Links
- Skills
- Experience
- Education
- Project
- Blog Posts

# Installation
- **Fork repo:** Click [here](https://github.com/arifszn/gitprofile/fork) to fork the repo so you have your own project to customize. A "fork" is a copy of a repository.
- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO>` (e.g. `portfolio`) in GitHub.
- **Enable workflows:** Go to your repo's **Actions** page and enable workflows.

  ![Workflows](https://arifszn.github.io/assets/img/hosted/gitprofile/workflows.png)

- **Base Value:** Open `vite.config.js`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO>` (e.g. `https://<USERNAME>.github.io/portfolio`), then set `base` to `'/<REPO>/'` (e.g. `'/portfolio/'`).

  ```js
  // vite.config.js
  {
    base: '/',
    // ...
  }
  ```

- **First Commit:** Now commit to your **main** branch with your changes. The CI/CD pipeline will publish your page at the `gh-pages` branch automatically.
- **Change deploy branch:** Go to your repo's **Settings** ➜ **Pages** ➜ **Source** and change the branch to `gh-pages` and click **save**.

Your portfolio website will be live by now. Any time you commit a change to the **main** branch, the website will be automatically updated. You can also add custom domain by following [this guide](https://github.com/arifszn/gitprofile/discussions/126).

If you see only `README` at your website, be sure to change your GitHub Page's source to `gh-pages` branch (see [how to](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)). Also, if you face any issue rendering the website, double-check the `base` value in the `vite.config.js`.

As this is a vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services.
