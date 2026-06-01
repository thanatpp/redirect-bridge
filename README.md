# Redirect Bridge

An open-source URL redirect service.

Redirect Bridge lets visitors place a full `http://` or `https://` URL after the service domain and redirect instantly. The hosted website is operated as the public service, while the source code stays open for transparency, review, and community contributions.

Demo: [redirect.thanatsukantatoon.workers.dev](https://redirect.thanatsukantatoon.workers.dev/)

## Features

- Static HTML, CSS, and JavaScript
- Designed to be hosted as the official Redirect Bridge website
- Dynamic bridge URL generator using the current domain
- Copy-to-clipboard helper for generated redirect URLs
- Immediate browser redirect with `window.location.replace`
- Home page remains available when no redirect target is provided
- Supports direct and URL-encoded redirect targets
- Allows only `http://` and `https://` targets
- MIT licensed and easy to fork

## How It Works

Append the destination URL after the Redirect Bridge domain.

```text
https://redirect.thanatsukantatoon.workers.dev/https://example.com/callback
```

The static fallback route sends all paths to `index.html`. The JavaScript reads the current path, validates the target protocol, and redirects immediately.

## Examples

```text
https://redirect.thanatsukantatoon.workers.dev/https://example.com/callback
https://redirect.thanatsukantatoon.workers.dev/http://localhost:3000/callback
https://redirect.thanatsukantatoon.workers.dev/https%3A%2F%2Fexample.com%2Fcallback
```

Invalid targets such as `javascript:alert(1)` are rejected.

## Maintainer Deployment

This section is for project maintainers. End users do not need to deploy their own copy to use the public Redirect Bridge service.

Use **Cloudflare Pages**, not Workers.

Cloudflare Pages settings:

```text
Build command: leave empty
Build output directory: .
Deploy command: leave empty
```

Do not set a deploy command such as:

```bash
npm run deploy:pages
npx wrangler deploy
npx wrangler pages deploy . --project-name redirect
```

When this repository is connected to Cloudflare Pages, Cloudflare deploys the static output automatically. Running Wrangler inside the Pages build can fail with API token permission errors.

Suggested Cloudflare Pages project name:

```text
redirect
```

Only use Wrangler from your own machine if you are doing a manual deploy:

```bash
npx wrangler pages deploy . --project-name redirect
```

The `_redirects` file contains the fallback rule:

```text
/* /index.html 200
```

## Local Development

No dependencies are required. Open `index.html` directly or serve the folder with any static file server.

## SEO

The landing page includes a title, description, canonical link, Open Graph tags, Twitter card tags, robots metadata, WebApplication structured data, and SoftwareSourceCode structured data.

Before publishing, update the domain-specific metadata if you know the production URL.

## Assets

Generated and project-local assets:

```text
assets/hero-redirect-flow.png
assets/social-preview.png
assets/favicon.svg
```

## Security Notes

This project intentionally restricts redirects to `http://` and `https://` URLs. It does not allow `javascript:`, `data:`, or other protocols.

This is still an open redirect utility by design. Use it only on a domain where that behavior is expected.

## License

MIT License. See [LICENSE](./LICENSE).
