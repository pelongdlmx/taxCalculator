import { useState, useMemo, useCallback } from "react";
import { calculateTaxes } from "./utils/calculator";
import { fetchBracketsWithCancellation } from "./api/taxService";
import DynamicForm from "./components/DynamicForm";
import TaxResultsTable from "./components/TaxResultsTable";
import { taxFormConfig, defaultTaxValues } from "./constants/taxConstants";
import EmptyStatePlaceholder from "./components/EmptyStatePlaceholder";
import { logger } from "./utils/logger";

export default function App() {
  const [currentSalary, setCurrentSalary] = useState(0);
  const [state, setState] = useState({
    results: null,
    brackets: null,
    isLoading: false,
    error: null,
    activeYear: null,
  });

  const computedResults = useMemo(() => {
    if (!state.brackets || !currentSalary) return state.results;
    return calculateTaxes(currentSalary, state.brackets);
  }, [currentSalary, state.brackets, state.results]);

  const handleCalculate = useCallback(
    async (data) => {
      logger.info("Calculation requested", { year: data.year });
      const { salary, year } = data;
      const safeSalary = parseFloat(salary) || 0;
      setCurrentSalary(safeSalary);

      if (state.brackets && state.activeYear === year) return;

      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      try {
        const freshBrackets = await fetchBracketsWithCancellation(year);
        logger.track("TAX_CALCULATION_SUCCESS", { salary: safeSalary, year });

        setState({
          brackets: freshBrackets,
          results: calculateTaxes(Number(salary), freshBrackets),
          activeYear: year,
          isLoading: false,
          error: null,
        });
      } catch (err) {
        if (err.name === "CanceledError" || err.name === "AbortError") {
          logger.info(`Error: ${err.name}`);
          return;
        }
        logger.error("Failed to fetch tax brackets", err);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Server connection failed. Please try again.",
          results: null,
        }));
      }
    },
    [state.brackets, state.activeYear],
  );

  return (
    <div className="justify-center items-center flex flex-col gap-10 py-20 px-10  bg-grey-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Tax Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          <div className="w-full">
            <DynamicForm
              config={taxFormConfig}
              defaultValues={defaultTaxValues}
              onSubmit={handleCalculate}
              isLoading={state.isLoading}
              buttonText="Calculate"
            />
            {state.error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center gap-2">
                <span>{state.error}</span>
              </div>
            )}
          </div>

          <div className="w-full min-w-0">
            {computedResults ? (
              <TaxResultsTable results={computedResults} />
            ) : (
              <EmptyStatePlaceholder />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
