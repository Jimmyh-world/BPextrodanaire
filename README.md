# Stockholm Movie Database (Vite)

## Project Overview

This is a modern React application bootstrapped with Vite, designed to search and display movie information using the OMDb API. The application demonstrates best practices in React development with a focus on maintainability, scalability, and performance using Vite's lightning-fast development experience.

## Features

- **Movie Search** - Search for movies by title using the OMDb API
- **Responsive UI** - Modern, mobile-friendly interface that adapts to different screen sizes
- **Fast Development** - Lightning-fast HMR (Hot Module Replacement) using Vite
- **API Integration** - Clean service layer for external API communication

## Technologies Used

- **React** (v19.0.0) - A JavaScript library for building user interfaces
- **React DOM** (v19.0.0) - React package for DOM rendering
- **Vite** (v6.2.0) - Next-generation frontend tooling for faster development and build times
- **ESLint** (v9.21.0) - For code linting and static analysis
- **@vitejs/plugin-react** - Vite plugin for React with Fast Refresh support
- **OMDb API** - Movie database API for fetching movie data

## Security Note - IMPORTANT

⚠️ **TEMPORARY DEVELOPMENT PRACTICE - NOT FOR PRODUCTION** ⚠️

For collaboration purposes, this repository **temporarily** includes the `.env` file with API keys. This is **NOT** a recommended security practice and is only being done to facilitate easy setup for team members during development.

### Best Practices (to be implemented before production):

1. **Remove API keys from version control**:

   - Uncomment the `.env` line in `.gitignore`
   - Generate new API keys that haven't been exposed
   - Use environment variables on deployment platforms

2. **For production deployment**:

   - Use Vercel's environment variables feature
   - Set up secrets in CI/CD pipelines
   - Consider using serverless functions as a proxy for API requests

3. **During development after this phase**:
   - Each developer should maintain their own local `.env` file
   - Share a template `.env.example` file without actual keys
   - Consider using a secrets management solution

**Action required before production**: This approach MUST be reverted before deployment to production by updating the `.gitignore` file and rotating any exposed API keys.

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
stockholm-movie-db/
├── node_modules/      # Dependencies
├── public/            # Static files
├── src/               # Source code
│   ├── assets/        # Static assets like images
│   ├── components/    # Reusable UI components
│   │   └── MovieSearch.jsx  # Movie search component
│   ├── services/      # API services and data fetching
│   │   └── movieService.js  # OMDb API integration
│   ├── App.css        # App component styles
│   ├── App.jsx        # Main App component
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── .env               # Environment variables (temporarily committed)
├── .env.example       # Template for environment variables
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

## Future Enhancements

- **Movie Details** - Add detailed movie information pages
- **Favorites** - Allow users to save their favorite movies
- **Advanced Search** - Implement filtering by year, genre, and other criteria
- **User Authentication** - Add user accounts and personalized experiences
- **Serverless Functions** - Move API calls to serverless functions for better security

## Development Guidelines

- Follow consistent coding standards
- Write tests for new features
- Keep components small and focused
- Use functional components with hooks
- Document complex logic and component props

## License

MIT
