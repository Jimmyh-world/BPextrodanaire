# Contributing to Dystopian Visions

Thank you for considering contributing to Dystopian Visions! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Development Environment](#development-environment)
  - [Project Setup](#project-setup)
- [Development Process](#development-process)
  - [Branching Strategy](#branching-strategy)
  - [Commit Guidelines](#commit-guidelines)
  - [Pull Requests](#pull-requests)
  - [Code Review](#code-review)
- [Coding Standards](#coding-standards)
  - [JavaScript/React Guidelines](#javascriptreact-guidelines)
  - [CSS Guidelines](#css-guidelines)
  - [Documentation](#documentation)
- [Testing](#testing)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [Development Workflow](#development-workflow)
- [Communication](#communication)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Development Environment

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A modern code editor (VS Code recommended)
- Git

### Project Setup

1. Fork the repository
2. Clone your fork:
   ```
   git clone https://github.com/YOUR-USERNAME/BPextrodanaire.git
   ```
3. Add the upstream repository:
   ```
   git remote add upstream https://github.com/Jimmyh-world/BPextrodanaire.git
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Create a `.env` file based on `.env.example` and add your OMDb API key
6. Start the development server:
   ```
   npm run dev
   ```

## Development Process

### Branching Strategy

- `master` - Production-ready code
- `develop` - Integration branch for features and fixes
- `feature/feature-name` - Feature branches
- `fix/bug-name` - Bug fix branches
- `docs/description` - Documentation updates

Always create new branches from `develop` unless you're fixing a critical production bug.

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description
```

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation-only changes
- `style`: Changes that don't affect the code's meaning (formatting, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or correcting tests
- `chore`: Changes to the build process, tools, etc.

Examples:

- `feat(search): add film suggestion tags`
- `fix(featured): correct loading spinner animation`
- `docs(readme): update project structure documentation`

### Pull Requests

1. Update your feature branch with the latest changes from develop:
   ```
   git checkout develop
   git pull upstream develop
   git checkout feature/your-feature
   git rebase develop
   ```
2. Push your branch to your fork:
   ```
   git push origin feature/your-feature
   ```
3. Create a pull request from your branch to the upstream `develop` branch
4. Include a clear title and description following commit message guidelines
5. Link any related issues using keywords like "Fixes #123" or "Relates to #456"

### Code Review

All contributions require review before merging:

- Automated checks must pass (linting, type checking, tests)
- At least one approval from a maintainer is required
- Address all review comments
- Maintainers may request changes before merging

## Coding Standards

### JavaScript/React Guidelines

- Use functional components with hooks
- Follow ES6+ conventions
- Use TypeScript types/interfaces for component props
- Avoid large components (consider splitting when > 300 lines)
- Use destructuring for props and state
- Keep side effects in useEffect hooks
- Use named exports for components
- Use async/await for asynchronous operations

```javascript
// Preferred
export const MovieCard = ({ title, year, poster }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Component logic

  return <div className='movie-card'>{/* JSX content */}</div>;
};

// Avoid
export default function (props) {
  // ...
}
```

### CSS Guidelines

- Use BEM (Block, Element, Modifier) naming convention
- Use CSS variables for themes and repeated values
- Organize CSS with component-specific files
- Mobile-first responsive design
- Keep selectors simple and avoid deep nesting

```css
/* Preferred */
.movie-card {
  /* Base styles */
}

.movie-card__title {
  /* Element styles */
}

.movie-card--featured {
  /* Modifier styles */
}

/* Avoid */
.content .section .movie-area .card h3 {
  /* Deeply nested selectors */
}
```

### Documentation

- Add JSDoc comments to all components and functions
- Document component props with TypeScript interfaces/types
- Keep README.md and other documentation up-to-date
- Comment complex logic or non-obvious code

```javascript
/**
 * Displays a movie card with basic information
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Movie title
 * @param {string} props.year - Release year
 * @param {string} props.poster - URL to movie poster image
 * @param {Function} props.onClick - Handler for click events
 * @returns {JSX.Element} Movie card component
 */
export const MovieCard = ({ title, year, poster, onClick }) => {
  // Component logic
};
```

## Testing

- Write tests for new features
- Ensure existing tests pass before submitting a PR
- Consider both unit and integration tests
- Test edge cases and error conditions

## Reporting Bugs

When reporting bugs, please include:

1. A clear, descriptive title
2. Steps to reproduce the issue
3. Expected behavior
4. Actual behavior
5. Screenshots if applicable
6. Your environment (browser, OS, etc.)

Use the GitHub issue tracker with the "bug" label.

## Feature Requests

Feature requests are welcome! Please provide:

1. A clear, descriptive title
2. Detailed description of the proposed feature
3. Use cases and benefits
4. Mockups or examples if applicable

Use the GitHub issue tracker with the "enhancement" label.

## Development Workflow

1. Pick or create an issue to work on
2. Create a branch following the naming convention
3. Develop and test your changes
4. Update documentation as needed
5. Submit a pull request
6. Address review feedback
7. Celebrate your contribution!

## Communication

- Use GitHub issues for bug reports and feature requests
- Use pull request comments for code-related discussions
- For longer discussions, use GitHub Discussions

Thank you for contributing to Dystopian Visions! Your efforts help make this project better for everyone.
