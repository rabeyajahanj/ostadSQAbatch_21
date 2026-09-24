# SQA and Selenium Interview Cheatsheet

Use the answers as speaking points. Add a project example after each answer when interviewing.

## 1. SQA, SDLC, and STLC

### 1. What is SQA?
**Answer:** SQA is a process-focused approach to prevent defects and improve the quality of the software process and product. It includes reviews, standards, test planning, audits, defect analysis, and continuous improvement. Testing is one important part of SQA, but SQA is broader than testing.

### 2. What is the difference between QA and testing?
**Answer:** QA is preventive and process-oriented: it improves the way software is built. Testing is mainly product-oriented: it detects defects in the software. QA asks, "Are we following an effective process?" Testing asks, "Does the product behave as expected?"

### 3. What is SDLC?
**Answer:** SDLC is the Software Development Life Cycle. Its common phases are requirements, planning, design, development, testing, deployment, and maintenance. SQA participates throughout the lifecycle, not only during the testing phase.

### 4. What is STLC?
**Answer:** STLC is the Software Testing Life Cycle. Its phases are requirement analysis, test planning, test case development, test environment setup, test execution, and test closure.

### 5. What is the difference between SDLC and STLC?
**Answer:** SDLC covers the complete software development process. STLC focuses specifically on testing activities within that process. STLC usually operates alongside SDLC and starts during requirement analysis.

### 6. What does an SQA do during requirement analysis?
**Answer:** I review requirements for clarity, completeness, consistency, and testability. I identify missing acceptance criteria, ambiguities, dependencies, and risks, then raise questions before development begins.

### 7. What does an SQA do during test planning?
**Answer:** I define the test scope, test types, approach, resources, tools, environments, schedule, risks, entry criteria, exit criteria, and deliverables. I also decide where automation provides value.

### 8. What is a test plan?
**Answer:** A test plan is a document describing what will be tested, how it will be tested, who will test it, which environments and tools are needed, the schedule, risks, and the criteria for starting and completing testing.

### 9. What is a test scenario and a test case?
**Answer:** A test scenario is a high-level condition or user flow to verify, such as "verify login." A test case contains detailed steps, test data, expected results, and execution status for that scenario.

### 10. What is a Requirement Traceability Matrix (RTM)?
**Answer:** An RTM maps requirements to test scenarios and test cases. It helps confirm that every requirement is covered and makes it easier to assess the impact of a requirement change.

### 11. What are entry and exit criteria?
**Answer:** Entry criteria are conditions required before testing starts, such as a stable build and available environment. Exit criteria are conditions required to finish, such as adequate coverage, completed planned tests, and no unresolved critical defects.

### 12. How do you decide whether a defect is release-blocking?
**Answer:** I consider severity, business impact, affected users, frequency, workaround availability, security or data risk, and release requirements. I communicate the risk clearly so the product owner or release authority can make an informed decision.

### 13. What is severity versus priority?
**Answer:** Severity describes the technical or business impact of a defect. Priority describes how urgently it should be fixed. A low-severity typo on a major campaign page can have high priority, while a severe issue in a rarely used feature might be scheduled later.

### 14. What information should a good defect report contain?
**Answer:** It should contain a clear title, environment, build, preconditions, reproducible steps, actual result, expected result, severity, priority, screenshots or logs, and any relevant test data. A good report lets a developer reproduce the issue quickly.

### 15. What is the defect life cycle?
**Answer:** A typical flow is New, Assigned, Open, Fixed, Retest, Reopened if it still fails, and Closed when verified. Teams may use different names, but the important parts are ownership, fix verification, and clear status history.

### 16. What is regression testing?
**Answer:** Regression testing checks that recent code changes have not broken existing functionality. It can be manual or automated and should focus on impacted areas plus critical end-to-end flows.

### 17. What is smoke testing versus sanity testing?
**Answer:** Smoke testing is a broad, shallow check that a build is stable enough for detailed testing. Sanity testing is a narrow check of a specific change or fix. Smoke asks, "Is the build testable?" Sanity asks, "Does this focused change work?"

### 18. What is shift-left testing?
**Answer:** Shift-left means moving quality activities earlier in SDLC. Examples include requirement reviews, acceptance-criteria reviews, design reviews, API checks, static analysis, and unit or integration testing in CI. It helps find defects when they are cheaper to fix.

### 19. What is a test closure report?
**Answer:** It summarizes testing completed, pass and fail results, coverage, defect metrics, known risks, deviations from the plan, and the release recommendation. It also records lessons learned for future improvement.

## 2. Selenium and Automation

### 20. What is Selenium?
**Answer:** Selenium is an open-source framework for automating web browsers. Selenium WebDriver communicates with browsers to perform actions and verify application behavior. It is intended for web applications, not native desktop applications.

### 21. What is the difference between `findElement` and `findElements`?
**Answer:** `findElement` returns the first matching element and throws `NoSuchElementException` when none is found. `findElements` returns a list and returns an empty list when there are no matches.

### 22. What makes a good locator?
**Answer:** A good locator is unique, stable, readable, and tied to the element’s purpose rather than its position or changing styling. I prefer stable IDs or dedicated test attributes, followed by reliable CSS selectors. I avoid fragile absolute XPath.

### 23. What is an implicit wait?
**Answer:** An implicit wait tells WebDriver how long to poll when locating elements. It applies broadly to element lookup. I use it carefully because combining it with explicit waits can create confusing or longer timeouts.

### 24. What is an explicit wait?
**Answer:** An explicit wait waits for a specific condition, such as visibility, presence, clickability, text, or a custom application state. In Selenium Java, `WebDriverWait` is the common implementation and is usually more precise than a fixed sleep.

### 25. What is a fluent wait?
**Answer:** A fluent wait is a configurable explicit wait. It allows a custom timeout, polling interval, and ignored exceptions. It is useful when an application needs a special polling strategy.

### 26. Why should you avoid `Thread.sleep`?
**Answer:** `Thread.sleep` always waits the full fixed duration. It makes tests slow when the page is ready early and flaky when the page needs longer. Condition-based waits synchronize with the actual application state.

### 27. How do you wait for a page to load?
**Answer:** For basic page readiness, I can wait until `document.readyState` is `complete`. For modern applications, that is not always enough, so I also wait for the specific element, text, API result, or state required by the next action.

Java example:

```java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(d -> ((JavascriptExecutor) d)
    .executeScript("return document.readyState")
    .equals("complete"));
```

### 28. How do you scroll using Selenium?
**Answer:** I use the simplest approach that matches the need. For a fixed viewport movement I use `window.scrollBy`. For a target element I use `scrollIntoView`, then wait for the element state before interacting with it.

```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("window.scrollBy(0, 1100);");

WebElement target = driver.findElement(By.cssSelector("#target"));
js.executeScript(
    "arguments[0].scrollIntoView({block:'center'});", target);
wait.until(ExpectedConditions.elementToBeClickable(target));
```

### 29. When would you use `executeScript` and `executeAsyncScript`?
**Answer:** `executeScript` runs JavaScript synchronously and returns when the script completes. `executeAsyncScript` is useful when JavaScript performs an asynchronous operation and calls a Selenium callback when it is done. For simple scrolling, synchronous scrolling is often sufficient; for animation completion, an explicit condition is preferable when available.

### 30. How would you handle smooth scrolling?
**Answer:** I would start the scroll and wait for a meaningful condition, such as the target becoming visible or the scroll position reaching the expected area. A hard-coded delay inside an async script is less reliable because animation speed can vary.

### 31. How do you handle dynamic elements?
**Answer:** I locate them using stable attributes and wait for the condition needed by the action. I avoid storing elements for too long because a page refresh or re-render can make the reference stale. If necessary, I locate the element again before retrying.

### 32. What is `StaleElementReferenceException` and how do you handle it?
**Answer:** It occurs when the DOM element previously located by WebDriver is replaced or removed. I identify the re-rendering action, wait for the updated state, locate the element again, and retry only in a controlled way rather than hiding the defect with a broad retry loop.

### 33. How do you handle `ElementClickInterceptedException`?
**Answer:** I check whether an overlay, loading indicator, sticky header, or animation is covering the element. I wait for the blocking condition to disappear, scroll the element into a usable position, and then click. JavaScript click is a last resort because it may bypass real user interaction.

### 34. What makes an automated test reliable?
**Answer:** Reliable tests use stable locators, isolated test data, deterministic setup and cleanup, condition-based waits, independent test cases, useful failure evidence, and minimal dependence on execution order. They should fail for product problems, not timing noise.

### 35. What should you automate and what should remain manual?
**Answer:** I automate stable, repeatable, high-value flows such as regression, smoke tests, data-driven checks, and cross-browser coverage. Exploratory testing, usability evaluation, visual judgment, and frequently changing features may be better handled manually.

### 36. How do you investigate a flaky Selenium test?
**Answer:** I collect screenshots, logs, browser and environment details, timestamps, and failure frequency. Then I reproduce it repeatedly, inspect timing and locator stability, remove fixed sleeps, wait for the correct state, isolate test data, and determine whether the cause is the application, environment, or test.

## 3. Scenario Questions

### 37. A developer says, "It works on my machine." What do you do?
**Answer:** I provide exact reproduction steps, build number, environment, test data, logs, and evidence. I compare browser, OS, configuration, database, feature flags, and service versions. Then I reproduce in a shared environment and collaborate on the smallest difference that explains the behavior.

### 38. You have little time before release. How do you test?
**Answer:** I use risk-based testing. I first run smoke tests and critical business journeys, then focus on recently changed and high-impact areas. I report what was tested, what was not tested, open defects, and residual risk rather than claiming full confidence without evidence.

### 39. A requirement is unclear. What do you do?
**Answer:** I do not silently guess. I document the ambiguity, ask a specific question, propose an example or acceptance criterion, and update the test cases after agreement. This prevents inconsistent implementation and disputes later.

### 40. A test fails because an element is not visible. What do you check?
**Answer:** I check whether the page finished loading, whether the locator is correct, whether the element is inside an iframe, whether it is hidden by an overlay, whether the page re-rendered, and whether scrolling or lazy loading is required. I then use the appropriate wait and capture evidence.

## Quick Final Revision

- SQA is preventive and process-oriented.
- Testing is product-oriented and finds defects.
- SDLC covers software development; STLC covers testing activities.
- Review requirements early for testability.
- Use RTM to prove requirement coverage.
- Severity is impact; priority is urgency.
- Smoke checks build stability; sanity checks a focused change.
- Regression checks existing behavior after changes.
- Prefer explicit, condition-based waits over `Thread.sleep`.
- Use stable locators and independent test data.
- Scroll to the target element, then wait for the state needed to interact.
- Explain test coverage and residual risk honestly before release.

## 4. Manual, API, and E-commerce Testing

### 41. What is manual testing?
**Answer:** Manual testing is the human execution of test scenarios without automation scripts. I use it for exploratory testing, usability, visual checks, new features, and situations where human judgment is valuable.

### 42. What is API testing?
**Answer:** API testing validates backend endpoints directly by checking requests, responses, status codes, headers, authentication, schema, business rules, and error handling. It can find defects earlier than UI testing because it tests the service layer directly.

### 43. What do you verify in an API response?
**Answer:** I verify the HTTP status code, response body and schema, required fields, data types, headers, response time, authentication behavior, error messages, and whether the requested state change actually occurred.

### 44. Give a manual API testing example.
**Answer:** For `POST /api/orders`, I send a valid authenticated JSON request and expect `201 Created`, an order ID, the correct total, and the expected order status. I also test missing authentication, invalid quantity, unavailable stock, duplicate submission, and payment failure.

### 45. What is risk-based testing?
**Answer:** Risk-based testing prioritizes testing according to business impact and likelihood of failure. In e-commerce, payment, stock, pricing, order creation, refunds, and security receive higher priority than low-impact cosmetic issues.

### 46. What would you test in a medicine e-commerce website?
**Answer:** I would test login, product search, medicine strength and pack size, prescription rules, stock reservation, price and tax, coupons, payment, order and invoice accuracy, POS synchronization, cancellation, refunds, and inventory consistency. I would also verify that expired or restricted products cannot be sold incorrectly.

### 47. What should you test first when you have less than a week?
**Answer:** I would run a smoke test first, then prioritize the critical flow: login, product selection, stock, cart, price, discount, payment, order confirmation, invoice, cancellation, and inventory update. I would document untested areas, blocked tests, open critical defects, and residual release risk.

### 48. What is the difference between positive and negative testing?
**Answer:** Positive testing verifies valid input and expected user behavior. Negative testing verifies how the system handles invalid input, missing data, unauthorized actions, unavailable resources, boundary values, and failures.

### 49. What are boundary value and equivalence partitioning techniques?
**Answer:** Equivalence partitioning divides input into groups expected to behave similarly, so one representative value can be tested. Boundary value analysis focuses on edges where defects commonly occur, such as quantities `0`, `1`, maximum allowed, and maximum plus one.

### 50. What is exploratory testing?
**Answer:** Exploratory testing combines learning, test design, and execution at the same time. I use a time-boxed charter, investigate realistic user behavior, follow risks and unexpected results, and record useful observations and defects.

## 5. Agile and Scrum

### 51. What is Agile testing?
**Answer:** Agile testing is continuous testing throughout iterative development. QA works with developers and product owners from story refinement through release, rather than waiting until all development is complete.

### 52. What is a sprint?
**Answer:** A sprint is a fixed iteration, commonly one to four weeks, in which a team delivers a usable product increment. It has a sprint goal, selected backlog items, acceptance criteria, and a Definition of Done.

### 53. What is a daily standup?
**Answer:** A daily standup is a short team synchronization meeting. I share completed work, planned work, and blockers. Detailed problem-solving should happen separately so the meeting stays focused.

### 54. What is QA's role in Scrum?
**Answer:** QA reviews stories and acceptance criteria, identifies risks, designs tests, prepares data, tests during the sprint, reports and verifies defects, supports automation, and contributes to the Definition of Done and release decision.

### 55. What happens in a sprint from a QA perspective?
**Answer:** QA participates in refinement and planning, prepares scenarios before or during development, tests completed work, performs exploratory and regression testing, verifies fixes, reports quality status, and contributes to the review and retrospective.

## 6. AI-Assisted QA

### 56. How can AI help a QA engineer?
**Answer:** AI can summarize requirements, identify ambiguities, generate test ideas and data, draft automation code, explain logs, group similar defects, suggest risk areas, and summarize test results. I review its output and validate it against requirements because AI output can be incorrect.

### 57. How would you use Claude or ChatGPT to understand an application?
**Answer:** I provide approved requirements, user stories, API documentation, or sanitized examples and ask the tool to summarize flows, actors, business rules, dependencies, risks, and missing information. I then confirm the result with the product owner and application behavior.

### 58. Give an AI prompt for requirement analysis.
**Answer:** `Analyze this user story. List the main user flow, assumptions, missing acceptance criteria, positive cases, negative cases, boundary cases, security risks, and questions I should ask the product owner.` I never upload credentials, personal data, payment data, or confidential source code unless company policy explicitly permits it.

### 59. How can AI support early bug detection?
**Answer:** AI can review requirements and designs for ambiguity, analyze changed files and code risk, suggest tests before implementation is complete, detect unusual logs, identify flaky-test patterns, and prioritize regression tests around frequently changed or high-impact modules.

### 60. What are the risks of AI-generated tests?
**Answer:** AI may misunderstand business rules, generate duplicate or shallow tests, use unstable locators, miss security and domain risks, or produce code that compiles but tests the wrong behavior. I review, execute, and maintain every important test instead of trusting generated output blindly.

### 61. What is AI-assisted versus fully automated QA?
**Answer:** AI-assisted QA keeps a human responsible for judgment, review, and release decisions while AI speeds up analysis and implementation. Fully automated QA attempts to execute and evaluate workflows with minimal human intervention, but human oversight remains important for risk, compliance, usability, and ambiguous failures.

## 7. Professional Scenario Answers

### 62. A medicine e-commerce backend is incomplete. What do you do?
**Answer:** I start with an agreed smoke and happy path to expose integration gaps, document assumptions and unknown business rules, then meet the manager or product owner to clarify stock, prescription, price, payment, cancellation, and POS rules. I report blocked areas separately and avoid declaring backend behavior correct when the expected rule is unknown.

### 63. What is the highest-risk area in medicine e-commerce?
**Answer:** The highest risks are selling an unavailable or restricted medicine, wrong medicine strength or pack size, incorrect price or discount, duplicate or incorrect payment orders, and inconsistent inventory between online and POS channels. These can create safety, financial, regulatory, and trust problems.

### 64. How would you test stock logic?
**Answer:** I test available, low, zero, and insufficient stock; quantity changes; concurrent attempts to buy the last item; stock reservation and release; payment failure; cancellation; refund; and POS updates. I verify that stock never becomes negative and that UI, API, order, and inventory values agree.

### 65. How do you answer when you do not know a business rule?
**Answer:** I state the uncertainty clearly, record an assumption only if the team agrees, ask a focused question with examples, and update the test case after the decision. I do not invent expected behavior because that can create false defects or miss real ones.

### 66. How do you decide whether a release is ready?
**Answer:** I compare results with exit criteria, review critical-path coverage, confirm the status of critical and high-severity defects, assess blocked tests and known risks, and communicate a release recommendation with evidence. The product owner or release authority makes the final business decision.

## Extended Final Revision

- For API testing, verify status, schema, data, authentication, errors, and side effects.
- For Agile, QA starts in refinement and tests continuously during the sprint.
- For AI, use it to accelerate work but verify its assumptions, code, and results.
- For medicine e-commerce, prioritize prescription, stock, price, payment, order, and inventory consistency.
