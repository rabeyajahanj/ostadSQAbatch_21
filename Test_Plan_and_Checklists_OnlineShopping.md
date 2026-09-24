# Test Plan and Checklists for Online Shopping Website

---

## Q1. TEST PLAN FOR AN ONLINE SHOPPING WEBSITE

### 1. Project Overview
- **Project Name:** Online Shopping Website
- **Project Type:** E-commerce Web Application
- **Scope:** Login, Registration, Product Browsing, Cart Management, Checkout, Payment, Order Confirmation
- **Testing Type:** Functional, Integration, System, UAT
- **Test Environment:** QA/Staging Environment

---

### 2. Testing Objectives
- Verify all features work as per requirements
- Ensure data accuracy and consistency
- Validate business logic (pricing, discounts, inventory)
- Ensure user experience is smooth and intuitive
- Identify and document defects for resolution
- Confirm system is ready for production release

---

### 3. Scope of Testing

#### In Scope:
- User authentication (Login, Registration, Password Reset)
- Product search, filter, and sorting
- Product details and reviews
- Shopping cart operations
- Checkout process
- Payment gateway integration
- Order confirmation and tracking
- Email notifications
- Responsive design (desktop, tablet, mobile)
- API validation for critical flows
- Database consistency

#### Out of Scope:
- Performance and load testing
- Security penetration testing
- Backend infrastructure
- Third-party payment provider testing
- Email server testing

---

### 4. Test Strategy

#### 4.1 Test Levels
- **Unit Testing:** Developer responsibility (not included in QA plan)
- **Integration Testing:** APIs, database, payment gateway
- **System Testing:** End-to-end user flows
- **User Acceptance Testing:** Business validation with stakeholders

#### 4.2 Test Types
- **Functional Testing:** Verify each feature works correctly
- **Regression Testing:** After bug fixes, verify existing features still work
- **Smoke Testing:** Quick check of critical paths before full testing
- **Exploratory Testing:** Ad-hoc testing to find unexpected issues
- **Boundary Testing:** Test edge cases and limits (max quantity, min price, etc.)
- **Negative Testing:** Invalid input, unauthorized access, missing data
- **Cross-browser Testing:** Chrome, Firefox, Edge, Safari
- **Mobile Testing:** iOS and Android devices/browsers

#### 4.3 Test Approach
- Risk-based testing: prioritize high-risk areas (payment, inventory, user data)
- Data-driven testing: use multiple user accounts and product scenarios
- Traceability: link tests to requirements via RTM

---

### 5. Test Schedule

| Phase | Activity | Duration | Start Date | End Date |
|---|---|---|---|---|
| Planning | Test plan creation, requirements review | 2 days | Day 1 | Day 2 |
| Design | Test case design, test data prep | 3 days | Day 3 | Day 5 |
| Execution | Test execution, defect reporting | 5 days | Day 6 | Day 10 |
| Regression | Bug verification and regression | 2 days | Day 11 | Day 12 |
| Closure | Test summary, lessons learned | 1 day | Day 13 | Day 13 |

---

### 6. Test Environment

#### 6.1 Hardware Requirements
- 2 laptops/desktops for testing
- 2 mobile devices (iOS, Android)
- Network connectivity

#### 6.2 Software Requirements
- Chrome, Firefox, Edge (latest versions)
- Postman (for API testing)
- Screenshot/video tool (for evidence)
- Test management tool (Jira, TestRail)
- MySQL or equivalent database
- Staging server with test data

#### 6.3 Test Data
- Valid user accounts (5-10)
- Invalid user credentials (5)
- Various product categories and prices
- Expired and valid coupon codes
- Multiple delivery addresses

---

### 7. Test Cases and Coverage

#### 7.1 Features to Test
1. User Registration and Login
2. Password Reset
3. Product Search and Navigation
4. Product Details
5. Shopping Cart
6. Checkout
7. Payment Processing
8. Order Confirmation
9. User Profile
10. Reviews and Ratings
11. Wishlist
12. Notifications
13. Mobile Responsiveness
14. Cross-browser Compatibility

#### 7.2 Estimated Test Cases
- **Login & Registration:** 25-30 test cases
- **Product Management:** 30-35 test cases
- **Cart & Checkout:** 40-50 test cases
- **Payment:** 20-25 test cases
- **Mobile & Cross-browser:** 15-20 test cases
- **Total:** ~150-160 test cases

---

### 8. Entry and Exit Criteria

#### 8.1 Entry Criteria (Testing can begin when:)
- Requirements are stable and approved
- Test environment is set up and accessible
- Test data is prepared
- Builds are stable (smoke test passed)
- Test plan is approved by stakeholders

#### 8.2 Exit Criteria (Testing is complete when:)
- All planned test cases are executed
- Minimum 90% test coverage achieved
- All critical defects are resolved
- No open high-severity defects
- Regression testing passed
- Test summary report is approved

---

### 9. Defect Management

#### 9.1 Severity Levels
- **Critical:** Payment failure, data loss, security issue, complete feature failure
- **High:** Major feature not working, workaround available, affects multiple users
- **Medium:** Minor feature issue, affects some users, workaround exists
- **Low:** Typo, UI misalignment, cosmetic issue, no workaround needed

#### 9.2 Defect Life Cycle
- New → Assigned → Open → Fixed → Retest → Closed (or Reopened)

#### 9.3 Defect Reporting Template
- Defect ID
- Title
- Environment (QA/Staging)
- Build Number
- Severity & Priority
- Steps to Reproduce
- Expected Result
- Actual Result
- Attachments (screenshots, logs)
- Assigned To
- Status

---

### 10. Risk Assessment

#### 10.1 High-Risk Areas
- Payment processing (financial impact)
- User authentication (security)
- Inventory/stock management (business impact)
- Data persistence (order accuracy)
- Third-party integrations (payment gateway, email)

#### 10.2 Mitigation
- Extra testing for payment flows
- Security review for login
- Stock validation tests
- Database consistency checks
- Integration testing with partners

---

### 11. Deliverables

1. Test Plan Document (this document)
2. Test Cases and Test Data
3. Requirement Traceability Matrix (RTM)
4. Test Execution Reports
5. Defect Reports
6. Test Summary Report
7. Release Sign-off Document

---

### 12. Resources

#### 12.1 Team
- Test Lead: 1 (oversees execution and reporting)
- QA Engineers: 2-3 (execute tests, report defects)
- API Tester: 1 (validate backend APIs)
- Test Automation Engineer: 1 (optional, for repetitive tests)

#### 12.2 Tools
- Jira: Defect tracking
- Postman: API testing
- Chrome DevTools: Debugging
- TestRail or similar: Test management

---

### 13. Approval and Sign-off

| Role | Name | Signature | Date |
|---|---|---|---|
| Test Lead | [Name] | [Signature] | [Date] |
| Project Manager | [Name] | [Signature] | [Date] |
| Product Owner | [Name] | [Signature] | [Date] |

---

---

## Q2. TEST CHECKLISTS (20+ VALIDATION POINTS PER FEATURE)

---

## CHECKLIST 1: LOGIN FEATURE

### Login Functional Testing

| # | Test Point | Test Case | Expected Result | Status |
|---|---|---|---|---|
| 1 | Valid login with email and password | User enters correct email and password | Login successful, redirects to dashboard | ☐ Pass ☐ Fail |
| 2 | Valid login with username and password | User enters correct username and password | Login successful, redirects to dashboard | ☐ Pass ☐ Fail |
| 3 | Invalid password | User enters correct email/username but wrong password | Error message: "Invalid credentials" | ☐ Pass ☐ Fail |
| 4 | Invalid email/username | User enters non-existent email/username | Error message: "User not found" | ☐ Pass ☐ Fail |
| 5 | Empty email field | User leaves email field blank and clicks login | Validation error: "Email is required" | ☐ Pass ☐ Fail |
| 6 | Empty password field | User leaves password field blank and clicks login | Validation error: "Password is required" | ☐ Pass ☐ Fail |
| 7 | Both fields empty | User leaves both fields blank and clicks login | Validation errors appear for both fields | ☐ Pass ☐ Fail |
| 8 | Invalid email format | User enters text without @ symbol | Validation error: "Invalid email format" | ☐ Pass ☐ Fail |
| 9 | Case sensitivity | User enters email/password with different case | Login success (if system is case-insensitive) or appropriate error | ☐ Pass ☐ Fail |
| 10 | Remember me checkbox | User checks "Remember me" and logs in | User is remembered on next visit to login page | ☐ Pass ☐ Fail |
| 11 | Forgot password link | User clicks "Forgot Password" link | Redirects to password reset page | ☐ Pass ☐ Fail |
| 12 | Sign up link | User clicks "Sign Up" link | Redirects to registration page | ☐ Pass ☐ Fail |
| 13 | Special characters in password | User enters password with special characters (@#$%) | Login successful if credentials are correct | ☐ Pass ☐ Fail |
| 14 | SQL injection attempt | User enters `' OR '1'='1` in email field | Input is sanitized, login fails safely | ☐ Pass ☐ Fail |
| 15 | Session creation | After successful login, check session ID is created | Session token is stored in cookies/localStorage | ☐ Pass ☐ Fail |
| 16 | Login redirect | User is on login page and logs in | Redirects to home page or previously visited page | ☐ Pass ☐ Fail |
| 17 | Multiple failed login attempts | User attempts login 5 times with wrong password | Account is locked or warning is shown | ☐ Pass ☐ Fail |
| 18 | Logout and re-login | User logs out and logs in again | Second login is successful | ☐ Pass ☐ Fail |
| 19 | Login with spaces in email | User enters email with leading/trailing spaces | Spaces are trimmed, login successful | ☐ Pass ☐ Fail |
| 20 | Password field masking | User enters password | Password is masked with dots/asterisks | ☐ Pass ☐ Fail |
| 21 | Browser back button after logout | User logs out, then clicks browser back button | User cannot access protected pages | ☐ Pass ☐ Fail |
| 22 | Concurrent login attempts | User attempts to login from 2 different browsers simultaneously | System handles gracefully (session management) | ☐ Pass ☐ Fail |
| 23 | Login page responsive design | User opens login page on mobile device | Page is mobile-friendly, all elements visible | ☐ Pass ☐ Fail |
| 24 | Login button disabled after click | User clicks login button | Button is disabled to prevent duplicate submissions | ☐ Pass ☐ Fail |
| 25 | Email/phone login option toggle | User can choose to login with email or phone | Both options work correctly | ☐ Pass ☐ Fail |

---

## CHECKLIST 2: REGISTRATION FEATURE

### Registration Functional Testing

| # | Test Point | Test Case | Expected Result | Status |
|---|---|---|---|---|
| 1 | Valid registration with all required fields | User fills all fields correctly and submits | Registration successful, account created | ☐ Pass ☐ Fail |
| 2 | Email already exists | User registers with an email that is already registered | Error: "Email already exists" | ☐ Pass ☐ Fail |
| 3 | Username already exists | User registers with an existing username | Error: "Username already exists" | ☐ Pass ☐ Fail |
| 4 | Empty first name | User leaves first name blank | Validation error: "First name is required" | ☐ Pass ☐ Fail |
| 5 | Empty email field | User leaves email blank | Validation error: "Email is required" | ☐ Pass ☐ Fail |
| 6 | Empty password field | User leaves password blank | Validation error: "Password is required" | ☐ Pass ☐ Fail |
| 7 | Password too short | User enters password less than 6 characters | Error: "Password must be at least 8 characters" | ☐ Pass ☐ Fail |
| 8 | Confirm password mismatch | User enters different passwords in password fields | Error: "Passwords do not match" | ☐ Pass ☐ Fail |
| 9 | Invalid email format | User enters email without @ symbol | Validation error: "Invalid email format" | ☐ Pass ☐ Fail |
| 10 | Weak password | User enters password like "123456" | Error: "Password must contain uppercase, lowercase, numbers, and special characters" | ☐ Pass ☐ Fail |
| 11 | Phone number validation | User enters invalid phone number (letters, symbols) | Validation error: "Invalid phone number" | ☐ Pass ☐ Fail |
| 12 | Age validation | User enters age below minimum requirement (e.g., 16) | Error: "You must be at least 18 years old" | ☐ Pass ☐ Fail |
| 13 | Terms and conditions | User doesn't check "I agree to terms" checkbox | Error: "You must agree to terms and conditions" | ☐ Pass ☐ Fail |
| 14 | Newsletter subscription | User checks newsletter checkbox | User is subscribed and receives confirmation email | ☐ Pass ☐ Fail |
| 15 | Email verification | After registration, user receives email with verification link | User can verify email by clicking link | ☐ Pass ☐ Fail |
| 16 | Account activation | After email verification, account is activated | User can login immediately | ☐ Pass ☐ Fail |
| 17 | Duplicate submission prevention | User clicks register button twice rapidly | Only one account is created | ☐ Pass ☐ Fail |
| 18 | Data persistence on error | User fills form, gets error, corrects it | Previously entered data is still there | ☐ Pass ☐ Fail |
| 19 | SQL injection in registration | User enters malicious SQL code in fields | Input is sanitized, registration fails safely | ☐ Pass ☐ Fail |
| 20 | Special characters in name | User enters name with special characters | If allowed by business logic, registration succeeds | ☐ Pass ☐ Fail |
| 21 | Maximum character limits | User enters extremely long text (1000+ chars) in fields | Text is truncated or error is shown | ☐ Pass ☐ Fail |
| 22 | Registration form responsive design | User opens registration on mobile device | Form is mobile-friendly and easy to fill | ☐ Pass ☐ Fail |
| 23 | CAPTCHA validation | User attempts to register with invalid CAPTCHA | Error: "CAPTCHA verification failed" | ☐ Pass ☐ Fail |
| 24 | Resend verification email | User clicks "Resend verification email" | New verification email is sent | ☐ Pass ☐ Fail |
| 25 | Already logged-in user cannot register | Logged-in user tries to access registration page | Redirected to home page or dashboard | ☐ Pass ☐ Fail |

---

## CHECKLIST 3: CHECKOUT FEATURE

### Checkout Functional Testing

| # | Test Point | Test Case | Expected Result | Status |
|---|---|---|---|---|
| 1 | Valid checkout with all required fields | User fills shipping and payment details correctly | Order is created successfully | ☐ Pass ☐ Fail |
| 2 | Empty shipping address | User leaves shipping address blank | Validation error: "Address is required" | ☐ Pass ☐ Fail |
| 3 | Empty payment details | User leaves payment fields blank | Validation error: "Payment details are required" | ☐ Pass ☐ Fail |
| 4 | Invalid postal code | User enters invalid postal code format | Validation error: "Invalid postal code" | ☐ Pass ☐ Fail |
| 5 | Delivery address validation | User enters delivery address not in service area | Error: "Delivery not available for this area" | ☐ Pass ☐ Fail |
| 6 | Shipping cost calculation | User selects standard/express shipping | Correct shipping cost is added to total | ☐ Pass ☐ Fail |
| 7 | Tax calculation | User proceeds to checkout | Correct tax is calculated based on location | ☐ Pass ☐ Fail |
| 8 | Correct order total | User reviews order before payment | Total = Subtotal + Tax + Shipping - Discount | ☐ Pass ☐ Fail |
| 9 | Valid coupon application | User applies valid coupon code | Discount is applied, total is reduced | ☐ Pass ☐ Fail |
| 10 | Invalid coupon code | User enters non-existent coupon | Error: "Invalid coupon code" | ☐ Pass ☐ Fail |
| 11 | Expired coupon | User applies expired coupon | Error: "Coupon has expired" | ☐ Pass ☐ Fail |
| 12 | Minimum order value | User adds items below minimum required amount for coupon | Error: "Minimum order value is $X" | ☐ Pass ☐ Fail |
| 13 | Valid credit card | User enters valid credit card details | Payment is processed successfully | ☐ Pass ☐ Fail |
| 14 | Expired credit card | User enters credit card with expired date | Error: "Card has expired" | ☐ Pass ☐ Fail |
| 15 | Invalid credit card number | User enters invalid card number | Error: "Invalid card number" | ☐ Pass ☐ Fail |
| 16 | Insufficient funds | User's card has insufficient balance | Payment declined: "Insufficient funds" | ☐ Pass ☐ Fail |
| 17 | Multiple payment methods | User can select from credit card, debit card, net banking | All methods are available and working | ☐ Pass ☐ Fail |
| 18 | Save card for future use | User checks "Save card for future orders" | Card is saved and available next time | ☐ Pass ☐ Fail |
| 19 | Out of stock during checkout | Product goes out of stock while user is checking out | User is notified, checkout is blocked or item is removed | ☐ Pass ☐ Fail |
| 20 | Price changed during checkout | Product price changes before user completes payment | User is notified of new price, asked to confirm | ☐ Pass ☐ Fail |
| 21 | Quantity changed during checkout | User's cart quantity differs from checkout | System syncs and shows updated total | ☐ Pass ☐ Fail |
| 22 | Order confirmation page | After successful payment | Order confirmation page shows order ID, date, total | ☐ Pass ☐ Fail |
| 23 | Confirmation email | User receives order confirmation email | Email contains order details and tracking link | ☐ Pass ☐ Fail |
| 24 | Duplicate order prevention | User clicks submit button twice rapidly | Only one order is created | ☐ Pass ☐ Fail |
| 25 | Order status update | After checkout, user views order in account | Order status shows "Order Placed" or "Processing" | ☐ Pass ☐ Fail |
| 26 | Cart empty after checkout | After successful checkout | Cart is empty, ready for new purchases | ☐ Pass ☐ Fail |
| 27 | Back button during payment | User clicks browser back button during payment | Payment is not interrupted, session is maintained | ☐ Pass ☐ Fail |
| 28 | Payment timeout | Payment gateway takes too long to respond | User receives appropriate message, can retry | ☐ Pass ☐ Fail |
| 29 | SSL certificate validation | User is on checkout page | Page uses HTTPS (padlock icon visible) | ☐ Pass ☐ Fail |
| 30 | Checkout responsive design | User accesses checkout on mobile device | Checkout form is mobile-friendly and easy to use | ☐ Pass ☐ Fail |

---

## Summary of Validation Points

### Total Validation Points:
- **Login Checklist:** 25 validation points ✓
- **Registration Checklist:** 25 validation points ✓
- **Checkout Checklist:** 30 validation points ✓
- **TOTAL:** 80+ validation points

---

## How to Use These Checklists

### For QA Execution:
1. Print or open the checklist
2. Execute each test case manually
3. Mark ☐ Pass or ☐ Fail based on actual result
4. If fail, report a defect with:
   - Steps to reproduce
   - Expected vs actual result
   - Screenshots/evidence

### For Documentation:
- Add execution date
- Add tester name
- Note any blockers or observations
- Summarize pass/fail count

### For Regression:
- Re-execute checklists after bug fixes
- Mark re-test status
- Ensure all previously passed tests still pass

---

## Best Practices

1. **Test in sequence:** Test login before registration, registration before checkout
2. **Use test data:** Maintain a list of test accounts and test data
3. **Cross-browser:** Execute checklists on at least 2 browsers
4. **Mobile testing:** Execute on at least 1 mobile device
5. **Clean data:** Use fresh test data for each execution cycle
6. **Document evidence:** Keep screenshots of failures for analysis
7. **Communicate:** Report status daily to test lead and stakeholders
