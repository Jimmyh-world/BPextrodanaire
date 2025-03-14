# Dystopian Visions

![Dystopian Visions Banner](https://via.placeholder.com/1200x300/1a202c/81e6d9?text=Dystopian+Visions)

A modern React application that showcases dystopian science fiction films. Built with Vite and the OMDb API, featuring a curated collection of dystopian sci-fi movies and powerful search capabilities.

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)
[![OMDb API](https://img.shields.io/badge/OMDb_API-v1-f5c518)](http://www.omdbapi.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Requirements](#-requirements)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [API Integration](#-api-integration)
- [Component Documentation](#-component-documentation)
- [Development Workflow](#-development-workflow)
- [Deployment](#-deployment)
- [Security Notes](#-security-notes)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [License](#-license)

## ✨ Features

- **Curated Film Collection**: Handpicked dystopian sci-fi movies displayed in a responsive grid layout
- **Advanced Search**: Search for movies by title with interactive suggestions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Modern UI**: Dark cyberpunk-inspired interface with neon accents and subtle animations
- **Optimized Performance**: Fast load times and responsive interactions
- **API Integration**: Clean separation of concerns for data fetching and display
- **Accessible**: Built with accessibility in mind, including keyboard navigation

## 🔍 Demo

Visit the live demo at: [https://dystopian-visions.vercel.app](https://dystopian-visions.vercel.app) (placeholder URL)

![Application Screenshot](https://via.placeholder.com/800x450/1a202c/81e6d9?text=Dystopian+Visions+Screenshot)

## 📋 Requirements

- Node.js 14.0.0 or later
- npm 6.0.0 or later
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Jimmyh-world/BPextrodanaire.git
cd BPextrodanaire
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Replace `your_api_key_here` with your actual OMDb API key
   - If you don't have an API key, get one from [OMDb API](http://www.omdbapi.com/apikey.aspx)

```bash
# .env file content
VITE_OMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Starts the development server                |
| `npm run build`   | Builds the app for production                |
| `npm run preview` | Locally previews the production build        |
| `npm run lint`    | Runs ESLint to check for code quality issues |

## 📁 Project Structure

```
dystopian-visions/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images, fonts, and other static assets
│   │   ├── FeaturedMovies.jsx     # Featured dystopian sci-fi films grid
│   │   ├── FeaturedMovies.css     # Styles for featured films component
│   │   ├── MovieSearch.jsx        # Search functionality component
│   │   └── MovieSearch.css        # Styles for search component
│   ├── services/        # API and service integrations
│   │   └── movieService.js        # OMDb API integration
│   ├── App.jsx          # Main application component
│   ├── App.css          # Main application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables (not committed in production)
├── .env.example         # Example environment variables template
├── .gitignore           # Git ignore configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```

## 🏗️ Architecture

### Component Architecture

The application follows a component-based architecture with:

- **App**: Main component that orchestrates the application flow and maintains global state
- **FeaturedMovies**: Displays curated dystopian sci-fi films
- **MovieSearch**: Handles search functionality and displays search results

### State Management

- React's built-in useState and useEffect hooks for local component state
- Props for passing data between parent and child components
- No global state management library is used as the application is relatively simple

### Data Flow

1. **API Fetching**: The `movieService.js` handles all API requests to OMDb API
2. **Component Integration**: Components use the service to fetch data
3. **State and UI Updates**: Component state is updated with API responses and UI renders accordingly

## 🔌 API Integration

### OMDb API

The application uses the [OMDb API](http://www.omdbapi.com/) to fetch movie data:

- **movieService.js**: Contains all the API integration logic
- **Environment Variables**: API key is stored in `.env` file and accessed via `import.meta.env.VITE_OMDB_API_KEY`

#### Available Service Methods

| Method                          | Description                    | Parameters                  |
| ------------------------------- | ------------------------------ | --------------------------- |
| `searchMovies(query, page = 1)` | Search for movies by title     | query: string, page: number |
| `getMovieDetails(imdbID)`       | Get detailed movie information | imdbID: string              |

Example usage:

```javascript
import { searchMovies, getMovieDetails } from '../services/movieService';

// Search for movies
const searchResults = await searchMovies('blade runner');

// Get movie details
const movieDetails = await getMovieDetails('tt0083658');
```

## 📚 Component Documentation

### `<FeaturedMovies />`

Displays a curated collection of dystopian sci-fi films in a grid layout.

**Props**: None

**State**:

- `featuredMovies`: Array of movie objects fetched from OMDb API
- `loading`: Boolean indicating if movies are being fetched
- `error`: Error message if fetching fails

**Example**:

```jsx
<FeaturedMovies />
```

### `<MovieSearch />`

Provides search functionality to find movies by title.

**Props**: None

**State**:

- `query`: String containing the current search query
- `movies`: Array of movie objects from search results
- `loading`: Boolean indicating if search is in progress
- `error`: Error message if search fails

**Example**:

```jsx
<MovieSearch />
```

## 🧑‍💻 Development Workflow

### Coding Standards

- Use functional components with hooks
- Follow consistent naming conventions
  - PascalCase for component names
  - camelCase for variables and functions
  - kebab-case for CSS classes
- Write descriptive JSDoc comments for functions and components
- Use named exports for better code navigation and refactoring
- Keep components focused on a single responsibility

### Git Workflow

1. Create a new branch for each feature or bug fix
2. Follow the commit message convention: `type(scope): message`
   - Types: feat, fix, docs, style, refactor, test, chore
   - Example: `feat(search): add film suggestion tags`
3. Open a pull request with a clear description
4. Request code review before merging

## 🚢 Deployment

### Building for Production

To build the application for production:

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

### Deployment Platforms

The application can be deployed to various platforms:

- **Vercel**: Recommended for easy deployment with environment variable support
- **Netlify**: Another great option for static site hosting
- **GitHub Pages**: Good for demo purposes

## 🔒 Security Notes

⚠️ **TEMPORARY DEVELOPMENT PRACTICE - NOT FOR PRODUCTION** ⚠️

For collaboration purposes during development, this repository **temporarily** includes the `.env` file with API keys. This is **NOT** a recommended security practice and is only being done to facilitate easy setup for team members during development.

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

## 🔮 Future Enhancements

- **Movie Details Page**: Expandable view with full movie information
- **User Authentication**: Allow users to create accounts and save favorites
- **Advanced Filtering**: Filter by year, rating, and other criteria
- **Social Sharing**: Share favorite dystopian films with friends
- **User Reviews**: Allow users to review and rate films
- **Recommendation Engine**: Suggest similar films based on viewing history
- **Offline Support**: Add Progressive Web App (PWA) capabilities
- **Serverless Backend**: Move API calls to serverless functions for better security

## 👥 Contributing

We welcome contributions to improve Dystopian Visions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

For more details, see our [Contributing Guidelines](CONTRIBUTING.md).

## 📜 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the behavior we expect from contributors.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [James](https://github.com/Jimmyh-world)
