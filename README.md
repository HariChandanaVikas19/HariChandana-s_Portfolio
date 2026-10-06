# Hari Chandana — Portfolio Website

A responsive personal portfolio website showcasing my skills, work experience, and projects as a **Frontend Developer & MERN Stack Developer**. Built with plain HTML, CSS, and JavaScript, with no frameworks or build tools required.

## Features

- Animated typing effect in the hero section
- Dark mode toggle, with the theme saved in `localStorage`
- Sticky navbar with scroll progress bar and active-link highlighting
- Scroll-reveal animations on sections, skills, and project cards
- Animated skill progress bars
- Horizontal scrolling tech-stack icon strip
- Work experience section
- Project cards with 3D tilt effect and "Know More" detail dialogs (Live Demo and GitHub links)
- Deep links to projects (e.g. `index.html#project-edtech` opens that project directly)
- Downloadable resume
- Cursor glow effect, page loader, and back-to-top button
- Fully responsive for desktop, tablet, and mobile

## Tech Stack

| Category | Technologies |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (animations, flexbox, grid, media queries) |
| Scripting | Vanilla JavaScript (ES6+), IntersectionObserver API |
| Icons and fonts | Font Awesome 5, Google Fonts (Poppins) |

## Project Structure

```
MyPortfolioFinal/
├── index.html        # Page markup
├── style.css         # Styles, animations, dark mode
├── script.js         # Typing effect, dark mode, scroll effects, dialogs
├── ASSETS/           # Profile photo, logo, project screenshots, resume PDF
└── ICONS/            # Tech-stack icons
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Open the project folder:
   ```bash
   cd MyPortfolioFinal
   ```
3. Open `index.html` in your browser. You can also use the **Live Server** extension in VS Code for auto-reload while editing.

No installation or build step is needed.

## Customization

- **Typing text:** edit the `aboutMeTexts` array in `script.js`.
- **Skills:** update the list and the `data-progress` values in `index.html`.
- **Projects:** add a card in `#projects-grid` and a matching `<dialog id="project-...">`. The button's `data-project` value must match the dialog id.
- **Live Demo button:** set the `href` on a project's Live Demo link. It stays hidden while the `href` is empty.
- **Resume:** replace `ASSETS/Hari_Chandana_Resume.pdf` with your latest file, keeping the same name.

## Featured Projects

| Project | Description | Links |
| --- | --- | --- |
| **EdTech Web Application** | Full-stack learning platform with JWT authentication, role-based access, and course management | [GitHub](https://github.com/HariChandanaVikas19/EdTech_Application) |
| **Expense Splitter App** | React.js app to split shared expenses and calculate minimum settlements | [Live Demo](https://expense-splitter-application.netlify.app/) · [GitHub](https://github.com/HariChandanaVikas19/Expense-Splitter-React) |

## Contact

- **Email:** kedariharichandana@gmail.com
- **LinkedIn:** [Hari Chandana Kedari](https://www.linkedin.com/in/hari-chandana-kedari-b1638a268/)
- **Location:** Hyderabad, Telangana, India

---

© 2026 Hari Chandana
