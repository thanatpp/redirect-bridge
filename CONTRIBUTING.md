# Contributing

Thanks for helping improve Redirect Bridge.

## Development Principles

- Keep the project static and dependency-free.
- Keep redirect behavior easy to audit.
- Preserve support for Cloudflare Pages.
- Write documentation in clear English.
- Avoid adding tracking, analytics, or external scripts by default.

## Suggested Workflow

1. Fork the project.
2. Create a focused branch.
3. Make a small, reviewable change.
4. Test the home page, valid redirects, encoded redirects, and invalid protocols.
5. Open a pull request with a short explanation.

## Manual Test Cases

```text
/
/https://example.com/callback
/http://localhost:3000/callback
/https%3A%2F%2Fexample.com%2Fcallback
/javascript:alert(1)
```
