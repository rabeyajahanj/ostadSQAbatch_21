# Bug Report Summary

## 1. Incorrect mandatory field on Checkout page
- **Bug ID:** BUG-001
- **Title:** Checkout field appears mandatory but requirement is unclear
- **Severity:** Medium
- **Priority:** High
- **Module:** Checkout / Form Validation
- **Environment:** Production / Staging
- **Summary:** A field on the checkout page appears to be required, but it is not clear whether it is actually intended to be mandatory. The user may be blocked without a proper validation message.
- **Steps to Reproduce:**
  1. Open the checkout page.
  2. Review the form fields.
  3. Observe the field marked as required or visually mandatory.
  4. Try submitting without entering the required value.
- **Expected Result:** The field should either be clearly optional or mandatory with a proper validation message and business justification.
- **Actual Result:** The mandatory nature of the field is unclear, and there is no clear validation explanation when the field is left empty.
- **Impact:** User confusion, unsuccessful checkout, possible abandoned carts.
- **Suggested Fix:** Confirm business requirement. If mandatory, add proper validation message and required indicator. If optional, remove the required behavior and update UI.

---

## 2. bKash payment slogan shown despite payment method not implemented
- **Bug ID:** BUG-002
- **Title:** Unimplemented bKash payment method advertized on product details page
- **Severity:** Medium
- **Priority:** Medium
- **Module:** Product Details / Payment Promotion
- **Environment:** Production / Staging
- **Summary:** The product details page displays bKash promotional text even though the payment method is not implemented.
- **Steps to Reproduce:**
  1. Open a product details page.
  2. Inspect the payment-related promotional section.
  3. Observe the bKash slogan.
- **Expected Result:** Either the bKash payment method should be implemented, or the promotional text should be removed.
- **Actual Result:** The slogan is visible even though the payment option is not available.
- **Impact:** Misleading user experience, false expectation, trust issue.
- **Suggested Fix:** Remove the promotional wording or implement the full bKash payment flow and test it end-to-end.

---

## 3. Price missing on Wishlist page
- **Bug ID:** BUG-003
- **Title:** Product price is not displayed on Wishlist page
- **Severity:** High
- **Priority:** High
- **Module:** Wishlist / Product Listing
- **Environment:** Production / Staging
- **Summary:** The Wishlist page does not display the product price, which affects purchasing decisions and creates confusion.
- **Steps to Reproduce:**
  1. Add a product to Wishlist.
  2. Open the Wishlist page.
  3. Observe the product item card.
- **Expected Result:** Each product on the Wishlist should show the price correctly.
- **Actual Result:** The price field is missing.
- **Impact:** Users cannot compare prices, may abandon purchase, reduces conversion and trust.
- **Suggested Fix:** Ensure the wishlist item fetch includes the product price field and render it correctly in the UI.

---

## 4. Incorrect product pricing displayed
- **Bug ID:** BUG-004
- **Title:** Product price displayed incorrectly
- **Severity:** Critical
- **Priority:** Critical
- **Module:** Product Listing / Product Details / Pricing Logic
- **Environment:** Production / Staging
- **Summary:** Product prices displayed in the application do not match the correct pricing logic.
- **Steps to Reproduce:**
  1. Open product listing or product details page.
  2. Observe the displayed price.
  3. Compare with expected price or backend price source.
- **Expected Result:** Product price should match the actual business price, including discount, campaign, and branch-specific pricing rules if applicable.
- **Actual Result:** Price is incorrect or inconsistent with expected business logic.
- **Impact:** Financial loss, customer distrust, order mismatch, business risk.
- **Suggested Fix:** Review pricing logic across frontend and backend, verify source of truth, and validate all discount/branch/context rules before release.

---

## 5. Delivery charge inconsistency on checkout and cart
- **Bug ID:** BUG-005
- **Title:** Delivery charge is inconsistent between cart and checkout; delivery area restriction is limited to Mirpur
- **Severity:** Critical
- **Priority:** Critical
- **Module:** Cart / Checkout / Delivery Logic
- **Environment:** Production / Staging
- **Summary:** The checkout page shows delivery charge as BDT 60 while the cart shows Free Delivery. Additionally, only Mirpur addresses are currently accepted, which suggests incorrect delivery-area restrictions.
- **Steps to Reproduce:**
  1. Add a product to cart.
  2. Observe the cart summary and delivery message.
  3. Proceed to checkout.
  4. Review the delivery charge.
  5. Select different delivery addresses.
- **Expected Result:** Delivery charge should be calculated consistently across cart and checkout, and valid delivery areas should be based on approved business rules.
- **Actual Result:** The charge is inconsistent, and only Mirpur addresses are accepted.
- **Impact:** Revenue loss, user confusion, blocked orders, incorrect shipping logic, poor customer trust.
- **Suggested Fix:** Confirm actual delivery policy and pricing rules. Standardize the logic across cart, checkout, and backend. Validate all supported delivery zones and message content.

---

## 6. Unable to place an order with unclear error message
- **Bug ID:** BUG-006
- **Title:** Order placement fails with unclear error message
- **Severity:** Critical
- **Priority:** Critical
- **Module:** Checkout / Order Placement
- **Environment:** Production / Staging
- **Summary:** Users cannot complete an order. The failure message does not explain what is wrong or how to resolve it.
- **Steps to Reproduce:**
  1. Add products to cart.
  2. Continue to checkout.
  3. Fill in shipping and payment details.
  4. Submit the order.
  5. Observe the error message.
- **Expected Result:** The system should show a clear, actionable, user-friendly error message explaining why the order cannot be placed and what the user should do next.
- **Actual Result:** The error is unclear and does not provide enough detail to resolve the issue.
- **Impact:** Users cannot complete purchase, cart abandonment, business revenue loss.
- **Suggested Fix:** Improve validation and error handling at the frontend and backend. Show actionable messages such as "Delivery is unavailable in your area" or "Payment failed; please retry with a valid card." Add logging for support debugging.

---

## 7. Wishlist removal and reload inconsistency
- **Bug ID:** BUG-007
- **Title:** Wishlist item remains visible after removal and branch-specific item disappears after reload
- **Severity:** High
- **Priority:** High
- **Module:** Wishlist / Session State / Branch Logic
- **Environment:** Production / Staging
- **Summary:** Removing an item from the Wishlist does not update the recent list immediately, and branch-specific items disappear after a page reload.
- **Steps to Reproduce:**
  1. Add item to Wishlist.
  2. Remove the item.
  3. Check the recent list or Wishlist state.
  4. Reload the page.
  5. Add an item for a specific branch and reload again.
- **Expected Result:** Removed items should disappear immediately and persist correctly according to branch-specific logic after reload.
- **Actual Result:** Removed item remains visible until reload; branch-specific item disappears after reload, suggesting incorrect state handling.
- **Impact:** Inconsistent user experience, damaged trust, inaccurate wishlist data, confusion during product selection.
- **Suggested Fix:** Review wishlist state update flow, local storage/session handling, and branch-specific object mapping. Ensure the UI refreshes immediately after deletion and persists state correctly after reload.

---

## 8. Frontend session does not time out
- **Bug ID:** BUG-008
- **Title:** Session expiry behavior is not implemented or not working as expected
- **Severity:** High
- **Priority:** High
- **Module:** Authentication / Session Management
- **Environment:** Production / Staging
- **Summary:** The frontend session remains active longer than expected and does not time out according to business rules.
- **Steps to Reproduce:**
  1. Log in to the application.
  2. Remain inactive for the expected timeout period.
  3. Try to continue using the session.
- **Expected Result:** The session should time out after the configured inactivity period and require re-login.
- **Actual Result:** Session remains active and does not expire as expected.
- **Impact:** Security risk, unauthorized session persistence, inconsistent user experience, compliance issues.
- **Suggested Fix:** Confirm expected session-expiry policy with business and security requirements. Implement timeout logic in the frontend and coordinate with backend/session token expiry rules.

---

## 9. Banner redirect URL is incorrect
- **Bug ID:** BUG-009
- **Title:** Banner navigates to incorrect URL
- **Severity:** Medium
- **Priority:** Medium
- **Module:** Homepage / Banner / Navigation
- **Environment:** Production / Staging
- **Summary:** The banner links to an incorrect URL: https://princebazarbd.com/categories/sub/mens-item-mirpur14
- **Steps to Reproduce:**
  1. Open the homepage.
  2. Click the banner.
  3. Observe the destination URL.
- **Expected Result:** The banner should redirect to the correct, intended category or landing page.
- **Actual Result:** The banner redirects to a wrong or unintended URL.
- **Impact:** Broken navigation, user confusion, loss of campaign effectiveness, poor conversion.
- **Suggested Fix:** Validate the target URL in CMS/content settings and update the banner link to the correct category or page.

---

# Suggested Bug Priority Summary

| Priority | Count | Bugs |
|---|---:|---|
| Critical | 4 | BUG-004, BUG-005, BUG-006, BUG-010 (if identified by team) |
| High | 3 | BUG-003, BUG-007, BUG-008 |
| Medium | 2 | BUG-001, BUG-002, BUG-009 |

> Note: Severity and priority should be confirmed by the product owner and engineering lead based on release risk and business impact.

---

# Recommended Next Actions
1. Confirm release-blocking issues with manager and product owner.
2. Fix pricing, stock, delivery, and checkout logic first.
3. Validate delivery area and tax logic against approved rules.
4. Improve error messaging for checkout and order failure.
5. Re-test wishlist, session expiry, and banner navigation after fixes.
6. Create a re-test checklist for all resolved bugs.
