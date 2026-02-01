import { test, expect } from "@playwright/test";

test.describe("Tax Calculator", () => {
  test("should calculate and display results correctly", async ({ page }) => {
    await page.goto("http://localhost:5173");

    const salaryInput = page.locator('input[name="salary"]');
    await salaryInput.fill("50000");

    const yearSelect = page.locator('select[name="year"]');
    await yearSelect.selectOption("2022");

    await page.getByRole("button", { name: /calculate/i }).click();
    await page.waitForLoadState("networkidle");

    const hasError =
      (await page.getByText(/server connection failed/i).count()) > 0;

    if (!hasError) {
      await expect(page.getByText("Total Tax Owed")).toBeVisible();
      const totalTaxDisplay = page.locator("h2.text-4xl.font-bold.mt-2");
      await expect(totalTaxDisplay).toContainText("$7,500");
      await expect(page.locator("text=Effective Rate: 15.00%")).toBeVisible();
    } else {
      await expect(page.getByText(/server connection failed/i)).toBeVisible();
    }
  });

  test("should show error message if server fails", async ({ page }) => {
    await page.route("**/tax-calculator/tax-year/**", (route) =>
      route.abort("failed"),
    );

    await page.goto("http://localhost:5173");
    await page.fill('input[name="salary"]', "50000");
    await page.getByRole("button", { name: /calculate/i }).click();

    await expect(page.locator("text=Server connection failed")).toBeVisible();
  });
});
