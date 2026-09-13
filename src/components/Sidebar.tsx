import type { SidebarProps } from "../types";

export default function Sidebar({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) {
  return (
    <div className="card bg-white border border-slate-200 p-5 shadow-sm sticky top-20">
      <h3 className="font-bold text-slate-900 text-sm">Your Stack</h3>
      <p className="text-xs text-slate-400 mt-0.5 mb-4">
        {stack.length > 0
          ? `${stack.length} Technologies Selected`
          : "No technologies selected yet."}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-lg p-8 text-center my-2">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-2 mb-4 max-h-[360px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 border border-slate-100 rounded-lg bg-slate-50"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
                <div>
                  <h4 className="text-xs font-semibold text-slate-800">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveFromStack(item.id)}
                className="btn btn-ghost btn-xs text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="btn btn-outline btn-error btn-xs w-full mt-2 font-medium"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
