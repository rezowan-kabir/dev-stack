import type { TechCardProps } from "../types";

export default function TechCard({tech, handleAddToStack, isAdded }: TechCardProps) {
  return (
    <div className="card bg-white border border-slate-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
          <h3 className="font-bold text-slate-900">{tech.name}</h3>
        </div>

        {tech.badge && (
          <span className="badge badge-sm badge-ghost">{tech.badge}</span>)}
      </div>

      <p className="text-sm text-slate-500 mb-4">{tech.description}</p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="badge badge-sm">{tech.category}</span>
          <span className="text-xs text-slate-400">{tech.difficulty}</span>
        </div>
        <span className="text-sm font-semibold text-[#F59E0B]">  ★ {tech.rating} </span>
      </div>

      <button onClick={() => handleAddToStack(tech)} disabled={isAdded} className={isAdded? "btn btn-disabled btn-sm w-full": "btn btn-sm w-full bg-slate-900 text-white border-none"} >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
