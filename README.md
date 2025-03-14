# Stockholm React Application (Vite)

## Project Overview

This is a modern React application bootstrapped with Vite, designed with a focus on maintainability, scalability, and best practices. The application serves as a foundation for building robust web applications using the React framework with Vite's lightning-fast development experience.

## Technologies Used

- **React** (v19.0.0) - A JavaScript library for building user interfaces
- **React DOM** (v19.0.0) - React package for DOM rendering
- **Vite** (v6.2.0) - Next-generation frontend tooling for faster development and build times
- **ESLint** (v9.21.0) - For code linting and static analysis
- **@vitejs/plugin-react** - Vite plugin for React with Fast Refresh support

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Jimmyh-world/BPextrodanaire.git
   cd BPextrodanaire
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- **`npm run dev`** - Runs the app in development mode at [http://localhost:5173](http://localhost:5173)
- **`npm run build`** - Builds the app for production to the `dist` folder
- **`npm run lint`** - Runs the ESLint linter to check for code quality issues
- **`npm run preview`** - Locally previews the production build

## Project Structure

```
vite-stockholm/
├── node_modules/      # Dependencies
├── public/            # Static files
├── src/               # Source code
│   ├── assets/        # Static assets like images
│   ├── App.css        # App component styles
│   ├── App.jsx        # Main App component
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── .gitignore         # Git ignore file
├── eslint.config.js   # ESLint configuration
├── index.html         # HTML entry point
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Locked dependencies
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## Advantages of Vite Over Create React App

- **Faster Development Server** - Vite uses native ES modules for instant server start
- **Hot Module Replacement (HMR)** - Lightning-fast updates without full page reloads
- **Optimized Build** - Uses Rollup for highly optimized production builds
- **Less Configuration** - Modern defaults that require minimal configuration
- **TypeScript Support** - Built-in TypeScript support without additional configuration

## Development Guidelines

- Follow consistent coding standards
- Write tests for new features
- Keep components small and focused
- Use functional components with hooks
- Document complex logic and component props

## License

MIT
