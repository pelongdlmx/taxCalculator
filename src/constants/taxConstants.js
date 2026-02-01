export const BASE_TAX_URL = "/tax-calculator/tax-year/";

export const taxFormConfig = [
  {
    name: "salary",
    label: "Annual Salary ($)",
    type: "number",
    validation: {
      required: "Salary is required",
      min: 0,
      valueAsNumber: true,
      pattern: {
        value: /^[0-9]+$/, // Regex for only digits
        message: "Please enter only numbers",
      },
    },
    placeholder: "e.g. 50000",
  },
  {
    name: "year",
    label: "Tax Year",
    type: "select",
    options: [
      { value: "2019", label: "2019" },
      { value: "2020", label: "2020" },
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
    ],
    validation: { required: true },
  },
];

export const defaultTaxValues = {
  salary: "",
  year: "2022",
};
