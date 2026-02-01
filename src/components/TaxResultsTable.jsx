import DataTable from "./DataTable";

const taxColumns = [
  {
    header: "Range",
    key: "range",
    align: "left",
  },
  {
    header: "Rate",
    key: "rate",
    align: "left",
    render: (value) => (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        {value}
      </span>
    ),
  },
  {
    header: "Tax Amount",
    key: "tax",
    align: "right",
    render: (value) =>
      `$${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
  },
];

/**
 *
 * * @param {Object} props - Component properties.
 * @param {Object} props.results - Object containing the calculation results.
 * @param {number} props.results.totalTax - The total amount of calculated taxes.
 * @param {string} props.results.effectiveRate - The effective tax rate as a percentage (e.g., "15.50").
 * @param {Array<Object>} props.results.breakdown - Array of objects with the breakdown by tax bracket.
 * @param {string} props.results.breakdown[].range - The range of the tax bracket (e.g., "0 - 50,197").
 * @param {string} props.results.breakdown[].rate - The tax rate for the tax bracket as a string (e.g., "15%").
 * @param {number} props.results.breakdown[].tax - The tax calculated for that specific band.
 */

export default function TaxResultsTable({ results }) {
  if (!results?.breakdown) return null;

  return (
    <div className="w-full max-w-md md:max-w-full overflow-hidden">
      <h3 className="text-lg font-bold mb-4 text-gray-800">
        Taxes Owed Per Band
      </h3>
      <div className="mt-6 overflow-x-auto">
        <DataTable columns={taxColumns} data={results.breakdown} />
      </div>
      {results && (
        <div className="min-w-md bg-blue text-white p-6 rounded-xl shadow-md mt-6">
          <p className="text-blue-100 text-sm uppercase font-semibold">
            Total Tax Owed
          </p>
          <h2 className="text-4xl font-bold mt-2">
            ${results.totalTax.toLocaleString()}
          </h2>
          <p className="mt-2 text-blue-100 italic">
            Effective Rate: {results.effectiveRate}%
          </p>
        </div>
      )}
    </div>
  );
}
