# INSTALLING TAILWIND FOR VITE PROJECTS

---
[Official Documentation](https://tailwindcss.com/docs/installation/using-vite)
---

01
Install Tailwind CSS

Install tailwindcss and @tailwindcss/vite via npm.
Terminal

```bash
npm install tailwindcss @tailwindcss/vite
```

---

02
Configure the Vite plugin

Add the @tailwindcss/vite plugin to your Vite configuration.
vite.config.ts

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

---

03
Import Tailwind CSS

Add an @import to your CSS file that imports Tailwind CSS.
CSS

```css
@import "tailwindcss";
```

---

04
Start your build process

Run your build process with npm run dev or whatever command is configured in your package.json file.
Terminal

```bash
npm run dev
```

---

05
Start using Tailwind in your HTML

Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.
HTML

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```


---

-----------------------------------------------------------------------------

# GENERAL INSTALLATION AND OTHER NOTES -- USE ABOVE FOR VITE REACT PROJECTS

-----------------------------------------------------------------------------

### 1. Install TailwindCSS and its dependencies
Run the following command in your terminal:

```bash
# Local install
npm install -D tailwindcss postcss autoprefixer
```

```bash
# Global install
npm install -g tailwindcss postcss autoprefixer
```

### 2. Initialize TailwindCSS configuration
Generate the `tailwind.config.js` file by running:

```bash
npx tailwindcss init
# OR
npm init tailwindcss
```

In case of issue with initializing:
```bash
# Remove, clean, and reinstall
rm -rf node_modules package-lock.json .npmrc
npm install --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init  # Retry
```

```bash
# Run directly with local path
./node_modules/.bin/tailwindcss init
```

```bash
# Clear out npm cache and retry
npm cache clean --force
npm install --save-dev tailwindcss
```

This will create a `tailwind.config.js` file in your project root.


### 3. Configure TailwindCSS
Update the `tailwind.config.js` file to include your content paths. Modify it as follows:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Add TailwindCSS to your CSS
Create a CSS file (e.g., `src/index.css`) and include the TailwindCSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Import the CSS in your React entry file
Import the CSS file in your main React entry file (e.g., `src/main.jsx`):

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import TailwindCSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 6. Start the development server
Run the development server to verify TailwindCSS is working:

```bash
npm run dev
```

You can now use TailwindCSS classes in your React components.
