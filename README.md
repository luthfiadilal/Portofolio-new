# Modern Portfolio Website

A high-performance, aesthetically pleasing portfolio website built with **Nuxt** and **Vue 3**. This project features modern design elements, smooth animations, and interactive components to showcase work and expertise professionally.

## ✨ Features

- **Modern Tech Stack**: Built with Nuxt 4 (Nightly/Edge), Vue 3, and Tailwind CSS.
- **Interactive UI**: Includes custom components like `Aurora` backgrounds and `HoverText` effects.
- **High Performance**: Optimized for speed and SEO.
- **Responsive Design**: Looks great on all devices.
- **Animations**: Powered by `motion-v` and `ogl` for WebGL effects.

## 🛠️ Tech Stack

- **Framework**: [Nuxt](https://nuxt.com/)
- **UI Library**: [Vue 3](https://vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (Inter, Outfit, Playfair Display, Anton)
- **Animations**: `motion-v`, `ogl`

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd porto
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Development Server

To start the development server on **http://localhost:4000**:

```bash
npm run dev
```

> **Note:** The server defaults to port **4000** as configured in `nuxt.config.ts`.

### Building for Production

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

- `app/`: Source directory containing pages, components, and assets.
  - `components/`: Reusable Vue components (e.g., `MsAurora.vue`, `HoverText.vue`).
  - `assets/`: Static assets like CSS and images.
- `nuxt.config.ts`: Main configuration file for Nuxt.
- `package.json`: Project dependencies and scripts.
