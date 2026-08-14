# Contributing to Expert-O

Thank you for considering contributing to Expert-O! We welcome contributions from everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Code Style](#code-style)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## How to Contribute

We accept contributions through GitHub Pull Requests. Here are some ways you can contribute:

- 🐛 **Report bugs** - Found a bug? Please [open an issue](https://github.com/ayushrai-hub/Expert-O/issues/new) with details
- ✨ **Suggest features** - Have an idea for a new feature? [Open an issue](https://github.com/ayushrai-hub/Expert-O/issues/new) to discuss it
- 📝 **Improve documentation** - Help us make our docs better
- 💻 **Write code** - Fix bugs, implement features, or improve existing code

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Expert-O.git
   cd Expert-O
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## Code Style

We use ESLint and Prettier to maintain consistent code style across the project.

### Linting and Formatting

```bash
# Check for linting issues
npm run lint

# Auto-fix linting issues
npm run lint -- --fix

# Format code
npm run format
```

### TypeScript

We use TypeScript with strict mode enabled. Please ensure your code passes TypeScript compilation:

```bash
npm run type-check
```

### Commit Convention

We follow conventional commits. Please use the following format:

```
<type>: <description>

feat: add new dashboard component
fix: resolve login form validation
docs: update API documentation
style: format component styles
refactor: optimize performance
test: add unit tests
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Testing

We use Jest with React Testing Library for testing. Please ensure your changes include appropriate tests.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Update snapshots
npm run test:update
```

### Test Structure

- Unit tests: `src/**/*.test.tsx`
- Integration tests: `src/**/*.integration.test.tsx`
- Test utilities: `src/__tests__/utils/`

### Writing Tests

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('should render login form', () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'test@example.com'
    });
  });
});
```

## Submitting Changes

### Before Submitting

1. **Run the test suite**
   ```bash
   npm test
   ```

2. **Check code style**
   ```bash
   npm run lint
   npm run type-check
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

### Creating a Pull Request

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, descriptive commit messages
   - Include tests for new functionality
   - Update documentation if needed

3. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the [Expert-O repository](https://github.com/ayushrai-hub/Expert-O)
   - Click "New Pull Request"
   - Fill out the PR template
   - Reference any related issues

### Pull Request Guidelines

- **Title**: Use conventional commit format
- **Description**: Explain what your PR does and why
- **Screenshots**: Include screenshots for UI changes
- **Tests**: Ensure all tests pass
- **Breaking Changes**: Clearly mark if your PR contains breaking changes

## Reporting Bugs

When reporting bugs, please include:

1. **Environment details** (OS, browser, Node.js version)
2. **Steps to reproduce** the issue
3. **Expected behavior** vs **actual behavior**
4. **Error messages** (if any)
5. **Screenshots** (if applicable)

Use the [issue template](https://github.com/ayushrai-hub/Expert-O/issues/new) for bug reports.

## Development Workflow

1. **Check existing issues** - Make sure someone else isn't already working on the same thing
2. **Discuss complex changes** - For major features, open an issue first to discuss the approach
3. **Write tests** - Test-driven development is encouraged
4. **Code review** - All changes require review before merging
5. **CI/CD** - Ensure your changes pass all CI checks

## Getting Help

- **Documentation**: Check our [docs](../docs/README.md) first
- **Issues**: Search existing [issues](https://github.com/ayushrai-hub/Expert-O/issues)
- **Discussions**: Join our [discussions](https://github.com/ayushrai-hub/Expert-O/discussions)

## Questions?

If you have questions about contributing, please:

- Check the [FAQ](../docs/README.md) in our documentation
- Search existing [issues](https://github.com/ayushrai-hub/Expert-O/issues)
- [Open a new issue](https://github.com/ayushrai-hub/Expert-O/issues/new) for questions not covered elsewhere

Thank you for contributing to Expert-O! 🚀