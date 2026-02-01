import { describe, it, expect } from "vitest";
import { calculateTaxes } from "../calculator";

const mockBrackets = [
  { min: 0, max: 50197, rate: 0.15 },
  { min: 50197, max: 100392, rate: 0.205 },
  { min: 100392, max: 155625, rate: 0.26 },
  { min: 155625, max: 221708, rate: 0.29 },
  { min: 221708, max: null, rate: 0.33 },
];

describe("Tax Calculator Core Logic", () => {
  it("should calculate $7,500.00 tax for exactly $50,000 salary", () => {
    const result = calculateTaxes(50000, mockBrackets);
    expect(result.totalTax).toBe(7500);
    expect(result.effectiveRate).toBe("15.00");
    expect(result.breakdown).toHaveLength(1);
  });

  it("should handle salaries that cross multiple brackets ($100,000)", () => {
    const result = calculateTaxes(100000, mockBrackets);
    expect(result.totalTax).toBeCloseTo(17739.17, 2);
    expect(result.breakdown).toHaveLength(2);
  });

  it("should return zero for negative or zero salary", () => {
    const result = calculateTaxes(0, mockBrackets);
    expect(result.totalTax).toBe(0);
    console.log(
      "DEV This message will appear in the terminal during the test run.",
    );
    expect(result.effectiveRate).toBe(0);
  });
});
