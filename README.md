# Redirect Bridge

<p align="center">
  <img src="./assets/logo.png" alt="Redirect Bridge logo" width="140">
</p>

Simple open-source redirect links for callbacks, localhost flows, demos, and quick tests.

Demo: [redirect-df7.pages.dev](https://redirect-df7.pages.dev/)

## How It Works

Put the target URL after the Redirect Bridge domain.

```text
https://redirect-df7.pages.dev/https://example.com/callback
```

If no target is provided, the landing page is shown. If a target is provided, the page redirects immediately with `window.location.replace`.

## Examples

```text
https://redirect-df7.pages.dev/https://example.com/callback
https://redirect-df7.pages.dev/http://localhost:3000/callback
https://redirect-df7.pages.dev/https%3A%2F%2Fexample.com%2Fcallback
```

Only `http://` and `https://` targets are allowed.

## Local Development

No dependencies are required. Serve this folder with any static server.

## Deploy

This project is deployed to Cloudflare Pages with GitHub Actions.

Required GitHub repository secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

Pages project name:

```text
redirect
```

## License

MIT License. See [LICENSE](./LICENSE).
