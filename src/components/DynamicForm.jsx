/**
 * Config-driven form renderer.
 *
 * This component intentionally contains:
 * - UI concerns
 * - Validation orchestration
 *
 * It intentionally excludes:
 * - Business logic
 * - Side effects (API calls)
 *
 * Designed to scale when form requirements change frequently.
 */

import { useForm } from "react-hook-form";
import Spinner from "./Spinner";

export default function DynamicForm({
  config,
  onSubmit,
  isLoading,
  buttonText = "Submit",
  defaultValues,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues, //
  });

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {config.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                {...register(field.name, field.validation)}
                className="w-full p-2 border border-gray-300 rounded-md outline-none">
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, field.validation)}
                className={`w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}

            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors[field.name].message || "This field is required"}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={isLoading}
          className="text-lg px-5 rounded-full inline-block font-bold bg-orange text-white w-full h-10">
          <div className="flex  items-center justify-center">
            <div className="  leading-0  text-center">
              {isLoading ? <Spinner /> : buttonText}
            </div>
          </div>
        </button>
      </form>
    </section>
  );
}
