import type { Technology } from '../types';
import { FiX } from 'react-icons/fi';

interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function Sidebar({ stack, handleRemoveFromStack, handleRemoveAll }: SidebarProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm sticky top-24">
      <div className="mb-4">
        <h3 className="font-bold text-slate-900 text-lg">Your Stack</h3>
        <p className="text-xs text-slate-400 mt-0.5">
          {stack.length > 0 ? `${stack.length} Technologies Selected` : 'No technologies selected yet.'}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center my-4">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-2.5 my-4 max-h-[380px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2.5 border border-slate-100 rounded-xl bg-slate-50 hover:bg-slate-100/50 transition"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                  <p className="text-[10px] text-slate-400">{item.category}</p>
                </div>
              </div>

              {/* Single item remove button */}
              <button
                onClick={() => handleRemoveFromStack(item.id)}
                className="text-slate-400 hover:text-red-500 p-1 transition"
                title="Remove item"
              >
                <FiX size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All button */}
      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="w-full mt-2 py-2 text-xs font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
}