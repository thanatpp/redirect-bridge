# Security Policy

## Supported Versions

The latest version on the main branch is supported.

## Reporting A Vulnerability

Please open a private security advisory or contact the project maintainer directly if this project is hosted under your organization.

## Redirect Behavior

This project is an open redirect helper by design. It should only be deployed on a domain where redirecting to user-provided `http://` and `https://` URLs is expected.

The implementation rejects non-web protocols such as `javascript:` and `data:`.
