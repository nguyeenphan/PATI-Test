# Sculptique™ - Lymphatic Drainage Landing Page

## Introduction

This is a clone landing page for the Sculptique™ Lymphatic Drainage Capsules product, featuring a modern, responsive sales page with interactive components like a video carousel, FAQ accordion, and product gallery.

## Tech Stack

- **HTML5** - Markup structure
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Logic and interactivity
- **jQuery & Slick Carousel** - Video reviews carousel
- **http-server** - Development server

## Project structure
clone-sculptique/
├── index.html              # Main HTML file
├── style.css               # Custom CSS styles
├── gallery.css             # Product gallery CSS
├── script.js               # JavaScript logic
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   └── input.css           # Tailwind input file
├── dist/
│   └── output.css          # Compiled Tailwind CSS
└── README.md               # This file

## How to run

```bash
# Install dependencies
npm install

# Start development server (port 8080)
npm run start
```

The server will run at: `http://localhost:8080`

## Other scripts

```bash
npm run dev      # Tailwind watch mode only
npm run build    # Build (minify) Tailwind CSS
npm run web      # Run only the HTTP server
```
