<div align="center">

# 🌐 TechFlow Solutions Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Responsive](https://img.shields.io/badge/Responsive-4CAF50?style=for-the-badge&logo=materialdesign&logoColor=white)]()

> A modern, responsive website for TechFlow Solutions - showcasing professional IT services with mobile-first design

</div>

---
<div align="center">

## 👤 Student Information

| **Name** | **Student ID** | **Course** | **Institution** |
|----------|----------------|------------|----------------|
| Lubo Mbuyu | ST10467547 | WED5020 | Varcity College Westville |

</div>

## 📖 Project Overview

**TechFlow Solutions** is a fictional IT services company specializing in:

- 💻 **Custom Software Development**
- 📱 **Mobile Applications**
- 🛠️ **IT Consulting**
- 🌐 **Web Development**
- ☁️ **Cloud Solutions**
- 🔒 **Cybersecurity**

This project demonstrates front-end development skills, showcasing a **responsive**, **professional**, and **accessible** website with an emphasis on **mobile-first design**.

## 🎯 Website Goals & Objectives

### Goals
- Design and develop a fully functional, responsive, and user-friendly website
- Showcase services and portfolio items effectively
- Encourage user engagement and enquiries

### Objectives
- ✅ Develop a clean, modern, intuitive interface
- ✅ Ensure responsiveness across desktop, tablet, and mobile
- ✅ Present services, portfolio, and background information clearly
- ✅ Implement interactive enquiry and contact forms for lead generation
- ✅ Apply semantic HTML, modular CSS, and vanilla JavaScript using best practices

## ✨ Key Features & Functionality

### 📄 Pages
- **🏠 Homepage**: Hero banner, services overview with carousel, CTAs
- **🛠️ Services**: Detailed descriptions + pricing
- **💼 Portfolio**: Case studies and project showcases
- **ℹ️ About**: Company profile + team info
- **📞 Contact**: Form, location map, and business details
- **❓ Enquiry**: Dedicated enquiry form with validation

### 🔧 Technical Features
- 📱 **Mobile-first responsive design**
- 🍔 **Dynamic navigation** (hamburger menu on mobile)
- 🎠 **Homepage service carousel**
- 🗺️ **Google Maps integration** (Contact page)
- ✅ **Client-side form validation**
- 🖼️ **Lazy loading for images**
- 🔍 **SEO-friendly structure**
- ♿ **WCAG-compliant accessibility** (ARIA labels, keyboard navigation)

## 📸 Website Screenshots

For detailed screenshots of the website showcasing its design and responsiveness, please refer to the [website-screenshots.md](website-screenshots.md) file.

## 🗓️ Timeline & Milestones

| Milestone | Status | Description |
|-----------|--------|-------------|
| **Part 1** | ✅ **Complete** | Structure & Foundation<br>Wireframes, sitemap, semantic HTML, modular CSS, initial JS |
| **Part 2** | ✅ **Complete** | Visual Design & Responsiveness<br>CSS variables, mobile-first layouts, navigation, animations, accessibility |
| **Part 3** | 🔜 **Upcoming** | Backend Integration & Deployment<br>Backend logic for forms, database for content, live deployment |

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Styling** | CSS Grid, Flexbox, CSS Variables |
| **Design** | Responsive & Mobile-First |
| **Performance** | Lazy loading, Optimized assets |
| **Accessibility** | Semantic HTML, ARIA, Keyboard navigation |

## ⚡ JavaScript Files & Functionality

This project uses vanilla JavaScript for dynamic functionality. Below is a detailed breakdown of each JS file, its purpose, usage, and references:

### Core JavaScript Files

| File | Purpose | Usage | References |
|------|---------|-------|------------|
| **`js/head.js`** | Dynamically generates essential `<head>` elements (charset, viewport, title, description, stylesheet) for DRY principles | Included in all HTML files as the first script | MDN: DOM manipulation, insertAdjacentHTML, DOMContentLoaded |
| **`js/navigation.js`** | Highlights active navigation link based on current page URL | Included in all pages with navigation (index.html, about.html, services.html, contact.html, enquiry.html, portfolio.html) | MDN: querySelector, classList, window.location |
| **`js/address.js`** | Dynamically inserts contact information (phone/email) into header address element | Included in all pages with header navigation | MDN: querySelector, innerHTML, Template literals |
| **`js/footer.js`** | Generates consistent footer content with social media links and company info | Included in all pages | MDN: querySelector, innerHTML, Font Awesome icons |
| **`js/top.js`** | Creates and manages a fixed-position "scroll to top" button with smooth scrolling | Included in pages with scrollable content | MDN: createElement, appendChild, window.scrollTo, CSS fixed positioning |
| **`js/carousel.js`** | Implements responsive service carousel with navigation, indicators, keyboard/touch support | Initializes on homepage (index.html) for services section | MDN: Classes, Touch events, CSS transforms, W3Schools carousel tutorial |
| **`js/google-form.js`** | Handles enquiry form submission to Google Forms API with validation and feedback | Included in enquiry.html | MDN: URLSearchParams, FormData, Fetch API, Google Forms API |
| **`js/maps.js`** | Embeds Google Maps iframes for displaying office locations | Included in contact.html | MDN: querySelector, innerHTML, Google Maps Embed API |
| **`js/service-enquiry.js`** | Enables service item clicks to navigate to enquiry form with pre-selected service | Included in services.html and enquiry.html | MDN: querySelectorAll, addEventListener, encodeURIComponent, Fetch API |

### JavaScript References & Sources

- **Mozilla Developer Network (MDN)**: Primary reference for JavaScript APIs and DOM manipulation
  - DOM events: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
  - Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  - FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData
  - URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

- **Google APIs**:
  - Google Forms API: https://developers.google.com/forms/api
  - Google Maps Embed API: https://developers.google.com/maps/documentation/embed

- **Font Awesome**: Icon library used in footer and navigation
  - https://fontawesome.com/icons

- **W3Schools**: General web development tutorials
  - Carousel implementation: https://www.w3schools.com/howto/howto_js_slideshow.asp
  - Form validation: https://www.w3schools.com/js/js_validation.asp

### Notes on JavaScript Implementation

- All scripts use modern ES6+ features with DOMContentLoaded for safe initialization
- Error handling and accessibility features (ARIA labels) are implemented where applicable
- Google Forms integration uses 'no-cors' mode for cross-origin requests
- Touch and keyboard navigation support for better accessibility
- Responsive behavior with window resize listeners
## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2980b9`
- **Accent Orange**: `#e67e22`
- **Neutral Greys**: Various shades for text and backgrounds

### Typography
- **Headings**: Montserrat
- **Body Text**: Roboto

### Layout Principles
- **Grid + Flexbox** for responsive layouts
- **Component-based** design system
- **Consistent spacing** using CSS variables

## 📁 Project Structure

```
TechFlow-Solutions/
├── 📄 HTML Files
│   ├── index.html          # Homepage
│   ├── about.html          # About page
│   ├── services.html       # Services page
│   ├── portfolio.html      # Portfolio page
│   ├── contact.html        # Contact page
│   ├── enquiry.html        # Enquiry form
│   └── file-organization-plan.html
│
├── 🎨 CSS
│   ├── styles.css          # Global styles
│   ├── index.css           # Homepage specific
│   ├── services.css        # Services page
│   ├── contact.css         # Contact page
│   ├── portfolio.css       # Portfolio page
│   ├── about.css           # About page
│   └── enquiry.css         # Enquiry form styles
│
├── ⚡ JavaScript
│   ├── navigation.js       # Main navigation
│   ├── address.js          # Address handling
│   ├── footer.js           # Footer functionality
│   ├── head.js             # Header scripts
│   ├── top.js              # Back-to-top button
│   ├── maps.js             # Google Maps integration
│   ├── carousel.js         # Service carousel
│   └── service-enquiry.js  # Enquiry form handling
│
├── 🖼️ Images
│   ├── logo.jpeg
│   ├── service-icons/      # Service icons
│   ├── screenshots/        # Website screenshots
│   ├── wireframes/         # Design wireframes
│   └── favicon/            # Site favicon
│
└── 📄 Documentation
    ├── README.md           # This file
    └── TODO.md             # Development tasks
```

🗺️ Sitemap
flowchart TD
    A[TechFlow Solutions Website] --> B[index.html]
    A --> C[about.html]
    A --> D[services.html]
    A --> E[portfolio.html]
    A --> F[contact.html]
    A --> G[enquiry.html]

## 🔄 Changelog

### v2.0.0 – Part 2 (Visuals & Responsive Design) ✅
- 🎨 CSS variables system (colors, typography, spacing, shadows)
- 📱 Advanced mobile-first responsive layouts
- 🍔 Mobile sidebar navigation (hamburger + overlay)
- ✨ Visual enhancements: hover, focus, animations, transitions
- ♿ Accessibility improvements (ARIA, WCAG AA)
- 🚀 Performance optimizations (lazy loading, responsive images)
- 🌐 Cross-browser compatibility testing
- 📚 Documentation updates

### v1.0.0 – Part 1 (Structure & Foundation) ✅
- 🏗️ Initial project setup & file structure
- 📄 Semantic HTML pages created
- 🎨 Modular CSS for layouts and page-specific styling
- ⚡ Basic JS for navigation, carousel, back-to-top button
- 🖼️ Assets (logo, service icons, wireframes, sitemap) added
- 📚 Documentation (README.md, TODO.md)

## 📚 References & Resources

### Reference List
- Google Fonts. (n.d.) *Google Fonts*. Available at: https://fonts.google.com/ (Accessed: 2023).
- Mozilla Developer Network (MDN). (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2023).
- Unsplash. (n.d.) *Unsplash: Beautiful Free Images & Pictures*. Available at: https://unsplash.com/ (Accessed: 2023).
- W3Schools. (n.d.) *CSS Flexbox*. Available at: https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 2023).
- Freepik. (n.d.) *Freepik - Free Vectors, Stock Photos & PSD Downloads*. Available at: https://freepik.com/ (Accessed: 2023).

### Content Sourcing
- **Public Domain / Creative Commons**: Images, icons, and fonts.
- **Original Content**: Company overview, services, and portfolio text.

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Local web server (optional, for full functionality)

### Running the Website
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For full functionality (forms, maps), serve via local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server
   ```

---

## 📝 License

This project is created for educational purposes as part of the WED5020 course at Varcity College Westville.

---

<div align="center">

**Made with ❤️ by Lubo Mbuyu**

*Student ID: ST10467547 | Course: WED5020*

</div>
