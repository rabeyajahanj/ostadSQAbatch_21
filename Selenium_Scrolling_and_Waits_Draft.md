# Selenium Scrolling & Waits — Learning Draft

Short, practical guide covering common scroll and wait patterns in Selenium (Java).

## Goal
Teach when and how to use JavaScript scrolling, `executeAsyncScript`, and explicit waits instead of `Thread.sleep`.

## Prerequisites
- Java 11+ installed
- Selenium 4.x (Java)
- Chrome and matching `chromedriver` on PATH
- Build: Maven or Gradle

Maven dependency snippet:

```xml
<dependency>
  <groupId>org.seleniumhq.selenium</groupId>
  <artifactId>selenium-java</artifactId>
  <version>4.11.0</version>
</dependency>
```

## Key concepts
- `JavascriptExecutor` runs JS in page context.
- `executeScript` runs sync JS; `executeAsyncScript` lets JS call a callback to signal completion.
- Prefer `WebDriverWait` / explicit waits over `Thread.sleep`.
- Wait for `document.readyState === 'complete'` or a specific element.

## Example 1 — Simple numeric scroll (reliable)
```java
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("window.scrollBy(0, 1100);");
```
Use when you just need to move viewport; works across browsers.

## Example 2 — Smooth scroll and wait (no Thread.sleep)
```java
// wait for page load
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(d -> ((JavascriptExecutor) d).executeScript("return document.readyState").equals("complete"));

// smooth scroll and signal completion via async script
js.executeAsyncScript(
  "var callback = arguments[arguments.length-1];"+
  "window.scrollBy({top:1100,left:0,behavior:'smooth'});"+
  "setTimeout(callback,700);"
);
```
Notes: adjust `700`ms to match scroll distance or implement polling to check position.

## Example 3 — Scroll until element visible
```java
WebElement el = driver.findElement(By.cssSelector("#target"));
((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView({behavior:'smooth',block:'center'});", el);
new WebDriverWait(driver, Duration.ofSeconds(10)).until(d -> el.isDisplayed());
```
Use when you must interact with an element that may be outside the viewport.

## Waiting best practices
- Prefer waits for elements or conditions: presence, visibility, clickable.
- Wait for network-loaded content: use waits that check element text or count.
- Avoid fixed sleeps; they slow tests and are flaky.

## Troubleshooting checklist
- ChromeDriver version matches Chrome.
- JS syntax is valid (`behavior`, not `behaviour`; objects use commas not semicolons).
- If page uses heavy lazy-loading, wait for the element you're targeting.

## Converting this draft to PDF
Option A — Pandoc (recommended):

```bash
pandoc -s Selenium_Scrolling_and_Waits_Draft.md -o Selenium_Scrolling_and_Waits_Draft.pdf
```

Option B — Print from browser: open the `.md` in an editor or GitHub and `Print -> Save as PDF`.

Option C — Python (if installed):

```bash
python -m pip install markdown weasyprint
python - <<'PY'
from weasyprint import HTML
import markdown
md = open('Selenium_Scrolling_and_Waits_Draft.md').read()
html = markdown.markdown(md)
HTML(string=html).write_pdf('Selenium_Scrolling_and_Waits_Draft.pdf')
PY
```

## Where to use each syntax
- `executeScript(...)` — run small sync JS snippets (read DOM, scroll, read values).
- `executeAsyncScript(...)` — when you need to wait for JS-driven animations or async events and signal completion.
- `WebDriverWait` — always to replace sleeps; wait for states/elements.
- `scrollIntoView` — when targeting a specific element.

---
Created for learning; tell me if you want this converted to PDF here (I can try to run pandoc/WeasyPrint if you permit).