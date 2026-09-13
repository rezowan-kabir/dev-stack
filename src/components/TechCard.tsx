import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  handleAddToStack: (item: Technology) => void;
  isAdded: boolean;
}

export default function TechCard({ tech, handleAddToStack, isAdded }: TechCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2">
              <img src={tech.icon} alt={tech.name} className="w-full h-full" />
            </div>
            <h3 className="font-bold text-slate-900">{tech.name}</h3>
          </div>

          {tech.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {tech.badge}
            </span>
          )}
        </div>

        <p className="text-slate-500 text-xs mb-4 ">
          {tech.description}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
          <div className="flex items-center gap-2">
            <span className="bg-slate-100 px-2 py-1 rounded text-[11px] font-medium text-slate-600">
              {tech.category}
            </span>
            <span className="text-[11px] text-slate-400">{tech.difficulty}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-700 text-[11px]">
            <span className="text-amber-400">★</span> {tech.rating}
          </div>
        </div>
      </div>

      <button
        onClick={() => handleAddToStack(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold ${
          isAdded
            ? 'bg-slate-100 text-slate-400 border border-slate-200'
            : 'brand-gradient text-white'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}