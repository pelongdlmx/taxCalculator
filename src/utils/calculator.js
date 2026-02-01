/**
 * Calculates progressive taxes for a given salary.
 *
 * Pure function:
 * - No side effects
 * - Deterministic output
 *
 * Designed to be easily testable and reusable.
 */

/**
 * @param {number} salary
 * @param {Array} brackets
 */
export const calculateTaxes = (salary, brackets) => {
  if (!salary || salary <= 0)
    return { totalTax: 0, breakdown: [], effectiveRate: 0 };

  let totalTax = 0;
  const breakdown = [];

  brackets.forEach((bracket) => {
    const min = bracket.min;
    const max = bracket.max;
    const rate = bracket.rate;

    if (salary > min) {
      const upperLimit = max ? Math.min(salary, max) : salary;
      const taxableAmount = upperLimit - min;
      const taxForBand = taxableAmount * rate;

      if (taxableAmount > 0) {
        totalTax += taxForBand;
        breakdown.push({
          range: `${min.toLocaleString()} - ${max ? max.toLocaleString() : "More"}`,
          rate: (rate * 100).toFixed(1) + "%",
          tax: taxForBand,
        });
      }
    }
  });

  return {
    totalTax: Number(totalTax.toFixed(2)),
    breakdown,
    effectiveRate: ((totalTax / salary) * 100).toFixed(2),
  };
};
