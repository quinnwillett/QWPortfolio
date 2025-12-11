# QWPortfolio – Personal Portfolio Website  
Final Project for CS463 / Winter 2025  
Author: Quinn Willett

## Live Website

Deployed using GitHub Pages:  
https://quinnwillett.github.io/QWPortfolio

---

## Repository

Source code:  
https://github.com/quinnwillett/QWPortfolio

---

## What’s Included

### Pages
- **index.html** – Home page with hero section and timer  
- **about.html** – Hobbies, photos, and my favorite media with tabs  
- **previousworks.html** – Background, previous roles, and skills  
- **projects.html** – Two project write-ups with links  
- **contact.html** – Contact form + sliding sidebar

### Technologies Used
- **HTML**: multi-page structure and tags  
- **CSS**: custom theme, gradients, grid/flexbox layouts, responsive rules  
- **JavaScript**: timers, event listeners, tab switching, sidebar toggle  
- **Web3Forms**: used for the contact form since we aren’t using a backend  
- **GitHub Pages**: deployment  
- **Git**: commit history and version tracking  

---

## Running the Site Locally

Two easy options:

### 1. Open the HTML directly
Download or clone the repo:
```
git clone https://github.com/quinnwillett/QWPortfolio
```
Then open **index.html** in your browser.

### 2. Use a local server (recommended)
If you use VS Code:
- Open the folder  
- Right-click `index.html`  
- Select **Open with Live Server**

---

## Important Features I Implemented

### Alive Counter  
A JavaScript function continuously calculates the time since my birthdate and updates every second. This wasn’t part of any assignment, we didn’t learn timers in class, so I wrote the timing logic manually.

### Tabbed Media Section  
The About page has four tabs (Movies, Games, TV, Albums). Clicking each tab shows a different grid of images. This works by toggling classes and updating which panel is visible.

### Sliding Socials Sidebar  
On the Contact page, there’s a small vertical bar on the left side of the screen labeled “Socials.” Clicking it smoothly expands the sidebar using CSS transitions, and JavaScript just adds/removes a CSS class.

### Fully Styled Contact Form  
I used Web3Forms so that submissions work without creating a backend. The form layout is built with CSS grid so the fields line up cleanly regardless of screen size.

---

## Outside Resources Used

I mainly relied on documentation rather than tutorials, however a couple exceptions were used:

- **MDN Web Docs** – looked up small things like `classList.toggle()` syntax and the Date object  
  https://developer.mozilla.org  

- **Web3Forms Docs** – only for the contact form setup  
  https://web3forms.com  

- **How to Create Tabs with Vanilla JavaScript - webcrunch**
  https://www.youtube.com/watch?v=rSEgjpMZXIc

-**How To Hover With JavaScript**
  https://www.youtube.com/watch?v=1xEfqgElMsY
---

## Project Structure

```
QWPortfolio/
│
├── index.html
├── about.html
├── previousworks.html
├── projects.html
├── contact.html
│
├── styles.css
├── script.js
│
├── hobbies/
├── movies/
├── games/
├── tv/
├── albums/
│
└── README.md
│
└── DevJournal.pdf

```

## How This Meets the Requirements

- Multi-page layout with a working navbar  
- About, Previous Work, and Projects sections  
- Fully custom CSS  
- JavaScript file with interactive features  
- Deployment through GitHub Pages  
- Outside sources clearly documented  
