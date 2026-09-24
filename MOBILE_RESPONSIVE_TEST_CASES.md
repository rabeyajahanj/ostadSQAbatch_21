# Prince Bazar Mobile Responsive Test Cases

**Target:** https://princebazarbd.com/  
**Test type:** Manual responsive UI and public storefront regression  
**Core viewports:** 360 x 800, 390 x 844, 412 x 915, 768 x 1024 px  
**Browsers:** Current Chrome on Android, Safari on iOS where available  
**Test data:** One in-stock product, one out-of-stock product, valid test account, valid/invalid coupon supplied by the test environment

## Execution rules

- Clear cache or use a private session before each browser/device combination.
- Do not place live orders. Stop after reaching the final payment-review step.
- Record viewport, browser version, URL, screenshot, console errors, and network failures for every failed case.
- Treat horizontal scrolling as a pass only where it is intentional, discoverable, and all content remains touch-accessible.

| ID | Area | Test case and steps | Expected result | Priority |
|---|---|---|---|---|
| MR-TC-001 | Smoke | Load the home page at each core viewport. | Page renders without a persistent loading state, crash, blank region, or horizontal page overflow. | P0 |
| MR-TC-002 | Announcement | Inspect the demo/announcement bar at 360 px and 390 px. | Complete message is visible, readable, and does not clip or overlap. | P1 |
| MR-TC-003 | Header | Inspect menu, logo, search, location, login, and cart controls at each viewport. | Controls fit, have distinct touch targets, and neither overlap nor duplicate. | P0 |
| MR-TC-004 | Header | Open and close the mobile navigation menu; use browser back after opening a menu item. | Menu is usable, dismissible, focus/touch safe, and navigation state is correct. | P0 |
| MR-TC-005 | Search | Search a known product, a partial name, and an unknown value. | Input remains visible above the keyboard; results and empty state fit the viewport. | P0 |
| MR-TC-006 | Promo links | Swipe the promotional-link row left and right, then open every link. | Every link is reachable by touch, has an overflow affordance if needed, and opens the intended page. | P1 |
| MR-TC-007 | Hero carousel | Review every hero slide at 360 px and 390 px; rotate portrait to landscape. | Images, headings, CTA, dots, and arrows remain visible, usable, and within slide boundaries. | P0 |
| MR-TC-008 | Home sections | Scroll through category, flash sale, best-selling, recommendation, and brand sections. | Section headings, product grids, and View All links align and do not cause accidental horizontal scrolling. | P1 |
| MR-TC-009 | Product cards | Inspect normal, discounted, long-name, and out-of-stock product cards. | Image, name, price, discount, stock state, and add-to-cart control do not overlap or clip. | P0 |
| MR-TC-010 | Product listing | Open a category/listing page; use sort, filter, pagination/load more if present. | Controls are touch-accessible, overlay correctly, and product-grid reflow is consistent. | P1 |
| MR-TC-011 | Product details | Open a product with a long name and multiple images. | Gallery, price, variation, quantity, Add to Cart, delivery information, and description display in the intended order. | P0 |
| MR-TC-012 | Cart | Add one product, open the cart, change quantity, and remove it. | Cart totals, buttons, and empty state fit the screen; no fixed element obscures actions. | P0 |
| MR-TC-013 | Coupon | In cart, apply valid, invalid, and expired coupons using test data. | Input, validation message, discount, and totals remain visible and do not shift off-screen. | P1 |
| MR-TC-014 | Checkout | Proceed as a logged-out user, sign in, and return to checkout. | Redirect preserves checkout intent; address, delivery, payment, and final review are usable without overlap. | P0 |
| MR-TC-015 | Authentication | Open login, registration, and password-recovery views; trigger validation. | Logo, fields, labels, errors, and submit button remain visible above the keyboard and can be dismissed/navigated. | P0 |
| MR-TC-016 | Footer | Reach the footer at 360 px and activate every link, social icon, payment image, and logo. | Content stacks/readflows cleanly; tap targets work and no item is clipped. | P1 |
| MR-TC-017 | Orientation | Repeat MR-TC-003, MR-TC-007, and MR-TC-011 in landscape. | Layout reflows without content loss, obscured controls, or trapped scrolling. | P1 |
| MR-TC-018 | Zoom and text | Set browser text scaling/zoom to 200% (or OS large text) and inspect home, product, cart, and login. | Text remains readable; controls reflow and key actions remain available. | P1 |
| MR-TC-019 | Keyboard and focus | Connect a keyboard or use browser focus navigation through header, menu, forms, cart, and modal/dialog views. | Focus is visible, logical, and never hidden behind fixed UI. | P2 |
| MR-TC-020 | Recovery | Throttle to a slow mobile network, reload home and a product page, then restore network. | Loading placeholders reserve stable space, errors are understandable, retry/recovery works, and layout does not jump excessively. | P1 |
