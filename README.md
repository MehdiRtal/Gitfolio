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
    "username": "MehdiRtal", // Your GitHub org/user name. (Required)
    "limit": "12", // How many projects to display.
    "exclude": {
      "forks": false, // Forked projects will not be displayed if set to true.
      "projects": ["MehdiRtal"] // These projects will not be displayed. example: ['my-project1', 'my-project2']
    }
  },
  "social": {
    "linkedin": "Mehdi-Rtal",
    "twitter": "@MehdiRtal",
    "facebook": "",
    "dribbble": "",
    "behance": "",
    "medium": "",
    "dev": "@MehdiRtal",
    "website": "",
    "phone": "+212 6916-17956",
    "email": "contact@mehdirtal.com"
  },
  "skills": [
    "C",
    "Python",
    "Django",
    "Flask",
    "Qt",
    "JavaScript",
    "jQuery",
    "HTML",
    "Bootstrap",
    "CSS",
    "SASS",
    "SQLite",
    "MySQL",
    "Git",
    "Docker"
  ],
  "experiences": [
    {
      "company": "Monstarlab Bangladesh",
      "position": "Backend Engineer II",
      "from": "September 2021",
      "to": "Present"
    },
    {
      "company": "My Offer 360 Degree",
      "position": "Web Application Developer",
      "from": "July 2019",
      "to": "August 2021"
    },
    {
      "company": "My Offer 360 Degree",
      "position": "Web Application Developer",
      "from": "July 2019",
      "to": "August 2021"
    }
  ],
  "education": [
    {
      "institution": "American International University-Bangladesh",
      "degree": "Bachelor of Science",
      "from": "2015",
      "to": "2019"
    },
    {
      "institution": "Cantonment College, Jessore",
      "degree": "Higher Secondary Certificate (HSC)",
      "from": "2012",
      "to": "2014"
    },
    {
      "institution": "Chowgacha Shahadat Pilot High School",
      "degree": "Secondary School Certificate (SSC)",
      "from": "2007",
      "to": "2012"
    }
  ]
}
```
