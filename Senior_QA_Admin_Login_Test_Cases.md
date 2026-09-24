# Prince Bazar Admin Login Test Cases

**URL:** https://ba.princebazarbd.com/admin/login  
**Scope:** Admin authentication and the first protected page after login  
**Prepared by:** QA  
**Date:** 2026-09-22

## Observed Login Controls

- Email Address
- Password
- Show/hide password control
- Remember password checkbox
- Sign in button
- Supporting text: "Enter your email & password to login"

## Test Data

Use the credentials supplied by the system owner only in the approved test environment:

- Valid email: `mailadmin@gmail.com`
- Valid password: **Do not store or repeat in test artifacts**
- Invalid email: an authorized non-existing test email
- Invalid password: an authorized incorrect test password

## Preconditions

- The tester has explicit authorization to test this admin environment.
- Test data is approved and the account is not a production-only account.
- The application is reachable over HTTPS.
- Browser developer tools and network capture are available for security checks.
- A clean browser profile is available for cookie and Remember-password testing.

## Functional Test Cases

| ID | Scenario | Steps | Expected Result | Priority |
|---|---|---|---|---|
| ADM-LOGIN-001 | Page loads | Open the URL in a supported browser. | Login page loads over HTTPS without broken layout or console-blocking error. | High |
| ADM-LOGIN-002 | Valid admin login | Enter the approved valid email and password; select Sign in. | User is authenticated and redirected to the authorized admin landing page. | Critical |
| ADM-LOGIN-003 | Empty submission | Leave both fields empty; select Sign in. | Required-field messages appear; no request is submitted or authenticated session created. | High |
| ADM-LOGIN-004 | Empty email | Enter a valid password only; select Sign in. | Email validation appears and login is blocked. | High |
| ADM-LOGIN-005 | Empty password | Enter a valid email only; select Sign in. | Password validation appears and login is blocked. | High |
| ADM-LOGIN-006 | Invalid email format | Enter values such as `admin` or `admin@`; submit. | Clear email-format validation appears and login is blocked. | Medium |
| ADM-LOGIN-007 | Unknown email | Enter an authorized non-existing email and any password. | Generic authentication error appears without revealing whether the email exists. | High |
| ADM-LOGIN-008 | Wrong password | Enter the approved valid email and an invalid password. | Generic authentication error appears; no protected content is shown. | Critical |
| ADM-LOGIN-009 | Case handling | Test email case according to the documented account policy. | Behavior matches the documented policy; password remains case-sensitive. | Medium |
| ADM-LOGIN-010 | Leading/trailing spaces | Enter email with accidental surrounding spaces. | Input is safely normalized or a clear validation message appears; no incorrect account match occurs. | Medium |
| ADM-LOGIN-011 | Password masking | Type a password. | Characters are masked by default. | High |
| ADM-LOGIN-012 | Show/hide password | Enter a password; activate and deactivate Show. | Password becomes readable only while enabled and returns to masked state when disabled. | Medium |
| ADM-LOGIN-013 | Remember password unchecked | Log in with Remember password unchecked; close and reopen the browser. | Session persistence follows the documented policy; credentials are not stored insecurely. | High |
| ADM-LOGIN-014 | Remember password checked | Log in with Remember password checked; close and reopen the browser. | Only the documented session persistence occurs; no plaintext password is stored. | High |
| ADM-LOGIN-015 | Enter-key submission | Complete valid fields and press Enter. | Form submits once, with the same result as selecting Sign in. | Medium |
| ADM-LOGIN-016 | Repeated click | Double-click Sign in or click repeatedly during loading. | Only one login request is processed; button shows a loading/disabled state. | Medium |
| ADM-LOGIN-017 | Refresh after login | Log in and refresh the landing page. | Valid session remains according to policy and the page does not duplicate an action. | High |
| ADM-LOGIN-018 | Logout | Log in, select logout, then use browser Back. | Protected content is not accessible after logout; user is returned to login or a public page. | Critical |
| ADM-LOGIN-019 | Direct protected URL | Without logging in, open a known admin route directly. | User is redirected to login; protected data is not returned. | Critical |
| ADM-LOGIN-020 | Session timeout | Log in, remain idle for the configured timeout, then access a protected page. | Session expires according to policy and the user must authenticate again. | High |

## Security Test Cases

| ID | Scenario | Steps | Expected Result | Priority |
|---|---|---|---|---|
| ADM-SEC-001 | HTTPS enforcement | Open the HTTP version if available. | HTTP redirects to HTTPS; credentials are never submitted over HTTP. | Critical |
| ADM-SEC-002 | Password in network traffic | Submit a login while inspecting the request. | Password is transmitted only over HTTPS and is not exposed in URL, query string, or client logs. | Critical |
| ADM-SEC-003 | Password in browser storage | Inspect cookies, local storage, and session storage after login. | Plaintext password is not stored. Cookies use appropriate Secure, HttpOnly, and SameSite attributes where applicable. | Critical |
| ADM-SEC-004 | SQL injection strings | Test approved non-destructive strings such as `' OR '1'='1` in fields. | Request is rejected or treated as normal text; no authentication bypass or server error occurs. | Critical |
| ADM-SEC-005 | XSS payload handling | Use a harmless encoded test payload in the email field. | Input is safely encoded; no script executes and no unsafe error rendering occurs. | High |
| ADM-SEC-006 | CSRF protection | Inspect the login request and test a replay without the required anti-CSRF context where applicable. | Server rejects unauthorized or invalid requests. | High |
| ADM-SEC-007 | Rate limiting | Make repeated failed attempts using approved test data and within the agreed test limit. | Rate limiting, progressive delay, CAPTCHA, or temporary lockout follows the security policy. | Critical |
| ADM-SEC-008 | Account lockout | Trigger the documented failed-attempt threshold. | Account protection activates without permanently locking the account unexpectedly; recovery follows policy. | Critical |
| ADM-SEC-009 | Error disclosure | Compare unknown-email and wrong-password responses. | Messages do not reveal valid usernames, roles, database details, stack traces, or internal paths. | High |
| ADM-SEC-010 | Session fixation | Capture the session identifier before login and compare it after login. | Session identifier is regenerated after successful authentication. | High |
| ADM-SEC-011 | Cache protection | Log in, log out, and inspect browser Back/cache behavior. | Protected pages are not available from browser cache after logout. | High |
| ADM-SEC-012 | Open redirect | Check any return URL or redirect parameter with an external destination. | Redirect is restricted to approved internal destinations. | High |

## Accessibility and Usability Test Cases

| ID | Scenario | Steps | Expected Result | Priority |
|---|---|---|---|---|
| ADM-A11Y-001 | Keyboard navigation | Use Tab and Shift+Tab through the page. | Focus order is logical and all controls are reachable. | High |
| ADM-A11Y-002 | Visible focus | Navigate using the keyboard. | Focus indicator is clearly visible on every interactive control. | High |
| ADM-A11Y-003 | Labels and semantics | Inspect fields with an accessibility tree or screen reader. | Email, password, Remember password, Show password, and Sign in have meaningful accessible names. | High |
| ADM-A11Y-004 | Error association | Trigger validation errors. | Errors are visible, specific, associated with the relevant field, and announced to assistive technology. | High |
| ADM-A11Y-005 | Responsive layout | Test desktop, tablet, and mobile viewport sizes. | Form remains usable without clipping, overlap, or horizontal scrolling. | High |
| ADM-A11Y-006 | Contrast and text size | Check text, controls, errors, and focus states. | Contrast and readable sizing meet the project accessibility standard. | Medium |
| ADM-A11Y-007 | Password visibility control | Use Show password with keyboard and assistive technology. | Control has a meaningful label and announces its current state. | Medium |

## Compatibility and Reliability

| ID | Scenario | Steps | Expected Result | Priority |
|---|---|---|---|---|
| ADM-COMP-001 | Browser compatibility | Test current Chrome, Edge, Firefox, and Safari where supported. | Login behavior and layout are consistent. | High |
| ADM-COMP-002 | Network interruption | Submit during a controlled connection interruption. | A clear retry message appears; the form does not silently fail or duplicate requests. | High |
| ADM-COMP-003 | Slow response | Simulate a slow network. | Loading state is visible, controls are protected from duplicate submission, and timeout behavior is clear. | Medium |
| ADM-COMP-004 | Server error | Test against an approved staging error response. | User sees a safe, user-friendly message; no stack trace or sensitive details are exposed. | High |
| ADM-COMP-005 | Concurrent sessions | Sign in from two approved browser sessions. | Behavior follows the documented concurrent-session policy. | Medium |

## Post-Login Authorization Checks

After successful login, verify that the account receives only its assigned permissions:

- Admin dashboard opens successfully.
- Unauthorized admin routes are blocked.
- Menu items match the assigned role.
- Direct URL access cannot bypass authorization.
- API responses do not expose data outside the role.
- Logout invalidates the session and relevant tokens.

## Exit Criteria

Testing can be closed when:

- Critical and High authentication defects are fixed and retested.
- Valid login, invalid login, logout, timeout, and direct-route protection pass.
- No plaintext credentials appear in URLs, browser storage, logs, or error messages.
- Approved browsers and responsive layouts pass.
- Role-based access has been verified.
- Evidence is attached for failed cases, including timestamp, browser, environment, steps, expected result, actual result, and sanitized screenshots/logs.

## Security Note

The supplied admin credentials should be rotated after testing if they are real. Do not commit them to source control, test reports, screenshots, or chat transcripts. Use environment variables or a secrets manager for automated execution.
