# 🧭 Windsurf Coding Standards & Best Practices

## 🎯 Objective
To maintain a consistent, clean, and optimized codebase across all Windsurf modules by following proven software engineering principles and industry best practices.

---

## ✅ Coding Standards Checklist

- [ ] Follow clean code principles
- [ ] Use meaningful, descriptive naming
- [ ] Avoid code repetition (DRY principle)
- [ ] Write modular, testable code
- [ ] Write meaningful comments and documentation
- [ ] Follow structured folder and file organization
- [ ] Use efficient, optimized algorithms
- [ ] Remove unused imports and code
- [ ] Follow proper formatting and indentation
- [ ] Maintain high test coverage and quality
- [ ] Apply appropriate design patterns when needed
- [ ] Automate checks with linting, formatting, and CI tools

---

## 🧱 1. General Principles

### Clean Code Practices
- Keep your code simple, focused, and readable.
- Each function should do one thing and do it well.
- Minimize the number of parameters passed to functions.

### DRY Principle (Don't Repeat Yourself)
- Identify and extract repeated logic into reusable utilities or modules.
- Avoid boilerplate duplication across services.

### Modular and Testable Code
- Write small, decoupled modules.
- Use dependency injection where appropriate to increase testability.
- Avoid using global variables.

---

## 📁 2. Project Structure

```
/src
  /modules          # Core business logic, domain-driven modules
  /utils            # Reusable helper functions and constants
  /services         # API/service interaction logic
  /config           # Environment configs and constants
  /tests            # Unit and integration tests
```

- Place each logical unit in its appropriate directory.
- Keep files short and focused.

---

## 🏷️ 3. Naming Conventions

| Element      | Convention      | Example              |
|--------------|------------------|----------------------|
| Class        | PascalCase       | `WindSpeedCalculator` |
| Variable     | camelCase        | `windDirection`      |
| Constant     | UPPER_SNAKE_CASE | `DEFAULT_TIMEOUT`    |
| File/Module  | kebab-case       | `wind-utils.js`      |

- Avoid abbreviations and ambiguous names.
- Name functions with verbs, classes with nouns.

---

## 💄 4. Syntax & Style

### Indentation & Bracing
- Use 2 or 4 spaces consistently. No tabs.
- Always use curly braces `{}` for conditionals and loops.

### Import Standards
- Group imports: standard libs → third-party → internal.
- Remove unused imports with tooling.

### Linting & Formatting Tools
- Use `ESLint` for JavaScript/TypeScript
- Use `Black` or `flake8` for Python
- Use `Prettier` for consistent formatting

---

## ⚙️ 5. Code Optimization

- Prefer **O(n)** algorithms over **O(n²)** where possible.
- Avoid deeply nested loops and recursion where a loop can be used.
- Cache results for expensive computations (memoization).
- Use lazy loading and pagination for large data processing.

### Efficient Code Example
```python
# BAD
for i in range(len(arr)):
    if arr[i] == target:
        return i

# GOOD
try:
    return arr.index(target)
except ValueError:
    return -1
```

---

## 🗒️ 6. Documentation & Comments

### Good Commenting Practices
- Comment why something is done, not what.
- Keep comments up-to-date with code changes.

### Function Docstring Format
```python
def calculate_wind_speed(data):
    """
    Calculates wind speed using sensor data.

    Args:
        data (dict): Contains 'pressure' and 'temperature' keys.

    Returns:
        float: Wind speed in knots.
    """
```

### File Headers (Optional)
```python
# wind_speed.py
# Description: Contains logic for computing wind speed from raw sensor data.
# Author: Ayush Rai
# Created: 2025-08-07
```

---

## 🔁 7. Refactoring Guidelines

- Extract logic from long functions into smaller sub-functions.
- Convert magic numbers into constants.
- Delete commented-out or unreachable code.
- Use meaningful abstractions and patterns (e.g., services, helpers).

---

## 🧪 8. Testing Guidelines

- Use `pytest`, `unittest`, `jest`, or similar frameworks.
- Maintain at least 80% code coverage.
- Follow **Arrange-Act-Assert** structure in tests.

### Test Directory Example
```
/tests
  test_wind_speed.py
  test_api_service.py
```

### Test Example
```python
def test_calculate_wind_speed():
    data = {"pressure": 1012, "temperature": 27}
    result = calculate_wind_speed(data)
    assert round(result, 2) == 14.67
```

---

## 🔁 9. Design Patterns

Use appropriate design patterns to reduce complexity and increase reuse.

| Pattern     | Use Case                             |
|-------------|--------------------------------------|
| Singleton   | Shared configuration object          |
| Factory     | Object creation with custom logic    |
| Observer    | Event-driven systems                 |
| Strategy    | Switchable algorithms or behaviors   |
| Adapter     | Interface compatibility              |

---

## 🛠️ 10. Tooling & Automation

- **Pre-Commit Hooks**: Lint, test, format on commit.
- **CI/CD Pipelines**: Run tests and linters automatically.
- **Git Hooks**: Prevent unformatted or broken code from being committed.

### Recommended Tools
- `pre-commit`
- `eslint`, `prettier`
- `black`, `flake8`
- `jest`, `pytest`
- `GitHub Actions`, `GitLab CI`, `CircleCI`

---

## 🔍 11. Code Review Checklist

Before creating a pull request:

- [ ] Code is clean and well-structured
- [ ] No console logs, commented code, or unused vars
- [ ] Comments and docstrings are added
- [ ] Edge cases are handled
- [ ] Tests are added and passing
- [ ] Code follows naming and import conventions
- [ ] No hardcoded secrets or magic numbers

---

## 🧠 Final Thought

> "Code is read more often than it is written. Optimize for readability, clarity, and simplicity first."