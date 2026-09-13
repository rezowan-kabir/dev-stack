import type { TechCardProps } from "../types";

export default function TechCard({
  tech,
  handleAddToStack,
  isAdded,
}: TechCardProps) {
  return (
    <div className="card bg-white border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-6 h-6 object-contain"
            />
            <h3 className="font-bold text-slate-900 text-sm">{tech.name}</h3>
          </div>
          {tech.badge && (
            <span className="badge badge-ghost badge-sm text-[10px] font-medium">
              {tech.badge}
            </span>
          )}
        </div>

        <p className="text-slate-500 text-xs leading-normal mb-4 h-9 overflow-hidden">
          {tech.description}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-sm border-none bg-slate-100 text-slate-600 text-[11px]">
              {tech.category}
            </span>
            <span className="text-[11px] text-slate-400">
              {tech.difficulty}
            </span>
          </div>
          <span className="font-semibold text-slate-700 text-[11px]">
            ★ {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`btn btn-sm w-full font-medium ${
          isAdded
            ? "btn-disabled bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-black border-none"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
