export default function EmptyStatePlaceholder() {
  return (
    <div className="h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-10 text-center text-gray-400 bg-white/50">
      <p className="text-sm">
        Enter your annual salary and select a tax year to see your results.
      </p>
    </div>
  );
}
