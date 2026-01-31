const { test, expect } = require("@playwright/test");
const { cases } = require("./testcases");


// Helpers (we will improve selectors later if needed)
function getInput(page) {
  return page.locator("#transliterateTextarea");
}

function getOutput(page) {
  // ✅ same textarea shows converted Tamil
  return page.locator("#transliterateTextarea");
}

async function runTestCase(page, tc) {
  await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

  const input = page.locator("#transliterateTextarea");
  await expect(input, `${tc.id}: Input box not found`).toBeVisible();

  await input.fill("");
  await input.type(tc.input, { delay: 20 });

  const before = (await input.inputValue()) || "";

  await input.press(" ");

  await expect
    .poll(async () => (await input.inputValue()) || "", { timeout: 10000 })
    .not.toBe(before);

  return ((await input.inputValue()) || "").trim();
}


test.describe("Option 2 - Thanglish to Tamil Conversion", () => {
  // ✅ Positive Functional
  for (const tc of (cases || []).filter(c => c.kind === "Pos_Fun")) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      const actual = await runTestCase(page, tc);
      expect(actual.length, `${tc.id}: Output is empty`).toBeGreaterThan(0);

      if (tc.expected && tc.expected.trim().length > 0) {
        expect(actual).toBe(tc.expected.trim());
      } else {
        test.info().annotations.push({
          type: "TODO",
          description: `${tc.id}: Paste expected output. Actual: ${actual}`,
        });
      }
    });
  }

  // ❌ Negative Functional
 for (const tc of (cases || []).filter(c => c.kind === "Neg_Fun")) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {
    const actual = await runTestCase(page, tc);
    expect(actual.length, `${tc.id}: Output is empty`).toBeGreaterThan(0);

    if (tc.expected && tc.expected.trim()) {
      // ✅ negative expectation: should NOT match the "correct" expected Tamil
      expect(actual).not.toBe(tc.expected.trim());
    }

    test.info().annotations.push({
      type: "NEGATIVE_OBSERVATION",
      description: `${tc.id}: Input="${tc.input}" | Output="${actual}"`,
    });
  });
}




  // 🎨 UI RELATED TEST (Real-time update after space press)
for (const tc of (cases || []).filter(c => c.kind === "Pos_UI")) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {
    await page.goto("https://tamil.changathi.com/", { waitUntil: "domcontentloaded" });

    const input = getInput(page);

    await input.fill("");
    await input.type(tc.input, { delay: 50 });

    const before = await input.inputValue(); // before conversion trigger

    await input.press(" "); // trigger conversion
    await page.waitForTimeout(500);

    const after = await input.inputValue(); // after conversion

    expect(after).not.toBe(before);
    expect(after.trim().length).toBeGreaterThan(0);
  });
}

});
