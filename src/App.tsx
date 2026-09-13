import { useState, useEffect } from 'react';
import type { Technology } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// React Toastify Imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/data.json');

        if (!response.ok) {
          throw new Error('Failed to load technology data.');
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Fetch error:', err.message);
          setError(err.message);
        } else {
          console.error('An unexpected error occurred:', err);
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Add to Stack with Toast Notifications
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      // Warning Toast
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    // Success Toast
    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove One Technology with Info Toast
  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (itemToRemove) {
      // Info Toast for Removal
      toast.info(`${itemToRemove.name} removed from stack.`);
    }
  };

  // Remove All Technologies with Error/Danger Toast
  const handleRemoveAll = () => {
    setStack([]);
    // Error Toast for Clear All
    toast.error('All technologies removed!');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full">
              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
                  <div className="w-8 h-8 border-4 border-slate-300 border-t-pink-500 rounded-full animate-spin"></div>
                  <p className="text-sm font-medium">Loading technologies, please wait...</p>
                </div>
              ) : error ? (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                  Error: {error}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {technologies.map((item) => {
                    const isAdded = stack.some((stackItem) => stackItem.id === item.id);
                    return (
                      <TechCard
                        key={item.id}
                        tech={item}
                        handleAddToStack={handleAddToStack}
                        isAdded={isAdded}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            <div className="w-full lg:w-80">
              <Sidebar
                stack={stack}
                handleRemoveFromStack={handleRemoveFromStack}
                handleRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Render ToastContainer at the bottom of application */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}