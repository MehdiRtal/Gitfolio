# Gitfolio
**Gitfolio** is an easy to use portfolio builder where you can create a portfolio page automatically by just providing your GitHub username. It is built using Nuxt.js and Vuetify. But it's not necessary to have knowledge on these to get you started. You can make your own copy with zero coding experience.

# Features
✓ Easy to Setup  
✓ SEO  
✓ Avatar and Bio Section  
✓ Social Links Section  
✓ Skills Section  
✓ Experience Section  
✓ Education Section  
✓ Projects Section  
✓ Blog Posts Section  

# Installation
- **Fork repo:** Click [here](https://github.com/MehdiRtal/Gtfolio/fork) to fork the repo so you have your own project to customize. A "fork" is a copy of a repository.
- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO>` (e.g. `portfolio`) in GitHub.
- **Enable workflows:** Go to your repo's **Actions** page and enable workflows.

  ![Workflows](https://arifszn.github.io/assets/img/hosted/gitprofile/workflows.png)

- **First Commit:** Now commit to your **main** branch with your changes. The CI/CD pipeline will publish your page at the `gh-pages` branch automatically.

Your portfolio website will be live by now. Any time you commit a change to the **main** branch, the website will be automatically updated. You can also add custom domain by following [this guide](https://github.com/arifszn/gitprofile/discussions/126).

# Customization
All the magic happens in the file `gitfolio.config.json`. Open it and modify it according to your preference.

```json
// gitfolio.config.json
{
  "github": {
    "username": "", // Your GitHub org/user name. (Required)
    "limit": "", // How many projects to display.
    "exclude": {
      "forks": false, // Forked projects will not be displayed if set to true.
      "projects": [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
    }
  },
  "social": {
    "linkedin": "",
    "twitter": "",
    "facebook": "",
    "dribbble": "",
    "behance": "",
    "medium": "",
    "dev": "",
    "website": "",
    "phone": "",
    "email": ""
  },
  "skills": [],
  "experiences": [
    {
      "company": "",
      "position": "",
      "from": "",
      "to": ""
    },
    {
      "company": "",
      "position": "",
      "from": "",
      "to": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "from": "",
      "to": ""
    },
    {
      "institution": "",
      "degree": "",
      "from": "",
      "to": ""
    }
  ]
}
```

# Credits
@[arifszn](https://github.com/arifszn) - For the inspiration and README copy (small part(maybe))
