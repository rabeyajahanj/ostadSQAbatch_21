# Bug Report — E-commerce Website

**Report date:** 27 August 2026  
**Reported by:** QA  
**Environment:** To be confirmed (URL, browser/device, build/version)  
**Status legend:** New = reported and awaiting triage

## Required bug fields

| Field | Description |
|---|---|
| Bug ID | Unique tracking identifier |
| Title | Short, clear description of the defect |
| Module | Affected feature/page |
| Severity | Impact: Critical, High, Medium, or Low |
| Priority | Recommended fix order: P0–P3 |
| Preconditions | Required account, product, cart, or admin access |
| Steps to reproduce | Minimal steps that demonstrate the issue |
| Expected result | Intended behaviour |
| Actual result | Observed behaviour |
| Evidence | Screenshot/link where supplied |
| Status | Current workflow state |

## Reported defects

| ID | Title | Module | Severity / Priority | Preconditions & steps | Expected result | Actual result | Evidence | Status |
|---|---|---|---|---|---|---|---|---|
| BR-001 | Banner does not navigate to its configured URL | Home / Banners | High / P1 | Click a home-page banner. | Opens that banner’s configured destination. | Banner routing is incorrect. | — | New |
| BR-002 | Product and image loading is slow | Storefront performance | High / P1 | Open product listing/home page on a normal connection. | Products and images load within acceptable performance targets. | Products and images take excessive time to load. | — | New |
| BR-003 | Every banner routes to Herbal page | Home / Banners | High / P1 | Click different home-page banners. | Each banner opens its own configured page. | All banners navigate to the Herbal page. | — | New |
| BR-004 | Login fails for valid and invalid credentials | Authentication | Critical / P0 | Submit login form with valid credentials; repeat with invalid credentials. | Valid credentials authenticate; invalid credentials show a clear validation error. | Login cannot be completed for either case. | — | New |
| BR-005 | Footer content is static | Footer / CMS | Medium / P2 | Update footer content in the configured management source; refresh storefront. | Footer content can be maintained dynamically. | Footer section is static. | — | New |
| BR-006 | Footer logo is not clickable | Footer | Low / P3 | Click the footer logo. | Logo links to the configured destination (normally home page). | Logo has no working link. | — | New |
| BR-007 | Multiple images are broken | Storefront media | High / P1 | Browse home, category, and product pages. | All published images render successfully. | Most images are broken. | — | New |
| BR-008 | Coupon feature does not work | Cart / Coupon | High / P1 | Add an eligible product; apply a valid coupon. | Coupon is validated and eligible discount is applied. | Coupon feature is not working. | — | New |
| BR-009 | First checkout redirect has incorrect login URL | Checkout / Authentication | High / P1 | Add item to cart; click **Proceed to Checkout** while logged out. | Redirects once to login with a correct return/checkout URL. | Login page opens, but URL does not update correctly on the first click. | — | New |
| BR-010 | Checkout redirect remains incorrect after login | Checkout / Authentication | High / P1 | Trigger BR-009; sign in successfully. | User returns to checkout. | Post-login checkout redirect URL is incorrect. | — | New |
| BR-011 | Product-page banner is missing | Product details | Medium / P2 | Open any product details page. | Configured product-page banner is visible. | Banner is missing. | — | New |
| BR-012 | Product review section is not implemented | Product details / Reviews | Medium / P2 | Open a product details page. | Review list and review submission experience are available as designed. | Product review section is absent. | — | New |
| BR-013 | 5% discount applies when “No Discount” is selected | Pricing / Discount | High / P1 | Select **No Discount** for a relevant item/order; inspect price. | No discount is applied. | A 5% discount is applied. | — | New |
| BR-014 | Login popup secondary authentication links do not work | Authentication | High / P1 | Open login popup; use Forgot Password, social sign-up, and phone verification. | Each option launches/completes its intended flow. | All listed options are non-functional. | — | New |
| BR-015 | Policy pages are static | CMS / Policy pages | Medium / P2 | Update a policy page through content management; visit page. | Policy content is dynamically manageable. | Policy pages are static. | — | New |
| BR-016 | Login verification is not implemented | Authentication | Critical / P0 | Attempt login where verification is required. | Required verification is enforced before login succeeds. | Login verification is not implemented. | — | New |
| BR-017 | Login accepts invalid data | Authentication / Validation | Critical / P0 | Submit malformed or invalid login input. | Invalid data is rejected with field-level validation. | Invalid data is accepted. | — | New |
| BR-018 | Missing banner title causes server error | Admin / Banner API | High / P1 | In admin, create/update a banner without a title. | Validation returns a user-friendly 4xx error and preserves form state. | Server returns HTTP 505 error. | — | New |
| BR-019 | Category banner field is missing in admin | Admin / Categories | Medium / P2 | Create or edit a category. | Banner field is available and documented. | Category banner field/section is missing. | — | New |
| BR-020 | Parent/child category relationship is unclear | Admin / Categories | Medium / P2 | Open category list. | List visibly identifies parent category and child hierarchy. | Parent and child categories are difficult to distinguish. | — | New |
| BR-021 | Category administration loads slowly | Admin / Categories | Medium / P2 | Open category list/create-edit screen. | Screen loads within acceptable performance target. | Page takes excessive time to load. | — | New |
| BR-022 | Category serial ordering is incorrect | Admin / Categories | Medium / P2 | Inspect recently created categories with serials 50–63. | Categories follow configured serial/order. | Recent serial values 50–63 are out of order. | — | New |
| BR-023 | Order “Add Payment” section cannot be scrolled | Admin / Orders | High / P1 | Open an order; open **Add Payment**; try to scroll its content. | Entire payment form is scrollable and accessible. | Section cannot be scrolled. | — | New |
| BR-024 | Order status cannot be changed | Admin / Orders | High / P1 | Open an existing order; select and save a different status. | Status changes and persists. | Order status cannot be changed. | — | New |
| BR-025 | Responsive layout has UI defect | Responsive UI | Medium / P2 | View affected screen at mobile width. | Layout remains aligned and usable. | Visible responsive-layout issue. | [Screenshot](https://prnt.sc/CQ9QV0pbULJo) | New |
| BR-026 | Cart icon overlaps text on mobile | Header / Responsive UI | Medium / P2 | View header on mobile width. | Cart icon and text have clear spacing. | Cart icon overlaps text. | — | New |
| BR-027 | Search and delivery sections do not align side-by-side on mobile | Header / Responsive UI | Low / P3 | View home/header on mobile width. | Search and delivery sections appear side by side where design permits. | Sections are not side by side. | — | New |
| BR-028 | Login-page logo is not visible | Login / Responsive UI | Medium / P2 | Open login page, especially on mobile. | Logo is visible. | Logo section is missing/not visible. | — | New |
| BR-029 | Out-of-stock label overlaps price | Product card / Responsive UI | Medium / P2 | View an out-of-stock product card. | Stock label and price remain separate and readable. | Out-of-stock section overlaps price. | [Screenshot](https://prnt.sc/2PlTcRYE0HW6) | New |
| BR-030 | Slider is cropped | Home / Slider | Medium / P2 | View home-page slider at affected viewport. | Full slide content is visible. | Slider is slightly cropped. | [Screenshot](https://prnt.sc/Ufbv4ZRwbpqu) | New |
| BR-031 | Product-detail content order/layout is incorrect | Product details / Responsive UI | Medium / P2 | Open product details page at affected viewport. | After price, show quantity and Add to Cart; then description; icons align immediately beside text. | Content order and icon/text alignment differ from expected. | [Screenshot](https://prnt.sc/y7lZEzwTVZkR) | New |
| BR-032 | Account and cart icons are duplicated | Header | Medium / P2 | View affected page/header. | One account icon and one cart icon appear. | Both icons appear twice. | [Screenshot](https://prnt.sc/xFcO-p8YScAY) | New |

## Triage notes

- Confirm the production/staging URL, browser versions, device/viewport sizes, account roles, and build number before execution.
- BR-004, BR-016, and BR-017 should be investigated first because they affect authentication and validation. BR-018 should also be checked promptly because a missing optional field must not produce a server error.
- Capture browser console/network logs and exact response codes for login, checkout, coupon, and admin issues during retest.

## Mobile responsive test execution - 28 August 2026

**Target:** https://princebazarbd.com/  
**Scope:** Authenticated storefront home page; visual mobile responsiveness only. Login was performed with the supplied test account. No product was added and no order was placed because the site identifies itself as a demo.  
**Browser/viewport:** Google Chrome (headless), exact 390 x 844 CSS px mobile emulation.  
**Result:** 1 defect confirmed. Login, the new-user offer dialog, announcement bar, hero carousel, and account menu were visible and usable at this viewport.

| ID | Title | Module | Severity / Priority | Preconditions & steps | Expected result | Actual result | Evidence | Status |
|---|---|---|---|---|---|---|---|---|
| MRESP-001 | Cart summary panel overlays home-page hero at 390 px | Header / Cart / Responsive UI | Medium / P2 | Sign in, dismiss the welcome-offer dialog, return to the top of the home page at 390 x 844 px, and do not open the cart. | Cart information remains in the header or is hidden until the user explicitly opens the cart. It must not cover page content. | A floating `0 Items` / price panel is displayed at the right edge and obscures part of the hero carousel. | [Authenticated 390 px screenshot](/C:/Users/Ela/.vscode-shared/mobile-authenticated-home-top-390.png) | New |

### Test note

Earlier findings based on an outer browser-window size were removed after re-testing with exact CSS viewport emulation. They were not reproducible at 390 x 844 px.

## Authenticated frontend retest - 1 September 2026

**Browser/viewport:** Google Chrome (headless), exact 390 x 844 CSS px mobile emulation.  
**Scope:** Home page, login dialog, signed-in account menu, and My Profile page. No product was added and no order or payment action was attempted.

| Check | Result | Notes |
|---|---|---|
| Mobile home-page load | Pass with observation | No page-level horizontal overflow was detected. The demo warning is still present; see MRESP-M008. |
| Login dialog and sign-in | Pass | The supplied test account signed in and the dialog closed. |
| Account menu and profile navigation | Pass | The signed-in menu opened and My Profile navigated to `/profile`. |
| Cart summary placement | Fail | The `0 Items` / price panel appeared at the right edge over page content without the cart being opened. MRESP-001 remains reproducible. |

## Additional manually reported mobile findings

**Source:** Manual review with supplied screenshots.  
**Status:** New; pending independent retest against the current build.

| ID | Title | Module | Severity / Priority | Expected result | Actual result | Evidence | Status |
|---|---|---|---|---|---|---|---|
| MRESP-M001 | First and second sliders are cropped | Home / Slider | Medium / P2 | Each slider fully displays its image, text, indicators, and controls within the mobile viewport. | The first and second sliders are cropped. | Not supplied | New |
| MRESP-M002 | Text is centre-aligned instead of left-aligned | Responsive UI / Content | Low / P3 | Text follows the approved left-aligned layout. | Text is centre-aligned. | [Screenshot](https://prnt.sc/mmFG0QiJjSpM) | New |
| MRESP-M003 | Shipping & Returns content does not match the required page details | Shipping & Returns | Medium / P2 | Content matches the approved Shipping & Returns details and is consistent with the related policy pages. | Displayed content differs from the required details. | Not supplied | New |
| MRESP-M004 | Displayed mobile number is incorrect | Contact information | High / P1 | The published mobile/contact number matches the approved company contact number. | An incorrect mobile number is shown. | [Screenshot](https://prnt.sc/_tGgmqs_8f2x) | New |
| MRESP-M005 | FAQ questions and answers do not match company policy | FAQ / Policy content | Medium / P2 | FAQ content matches the current company policy. | Questions and/or answers differ from company policy. | [Screenshot](https://prnt.sc/ASSohBTgW1bn) | New |
| MRESP-M006 | Div is misaligned in mobile view | Responsive UI / Layout | Medium / P2 | Content containers align consistently with the mobile layout. | A div/container is visibly misaligned. | [Screenshot](https://prnt.sc/cAYEFtIrCNnV) | New |
| MRESP-M007 | Content is not visible in mobile view | Responsive UI / Content visibility | High / P1 | Required page content is visible and reachable at the mobile viewport. | Content is not visible in mobile view. | [Screenshot](https://prnt.sc/vc7DsYfN41BC) | New |
| MRESP-M008 | Demo warning is displayed on the live website | Home / Announcement bar | Medium / P2 | Production users do not see demo-only warning text. | A demo warning is visible on the live storefront. | Not supplied | New |
| MRESP-M009 | Text alignment is incorrect in pop-up | Pop-up / Responsive UI | Low / P3 | Pop-up text follows the approved alignment and remains readable. | Text alignment is incorrect. | Not supplied | New |
| MRESP-M010 | Checkout Add to Cart text alignment is broken | Checkout / Add to Cart / Responsive UI | Medium / P2 | Add to Cart text and related checkout content align correctly without overlap or clipping. | Text alignment is broken in the Checkout > Add to Cart section. | [Screenshot](https://prnt.sc/87t78T1Yjlep) | New |
