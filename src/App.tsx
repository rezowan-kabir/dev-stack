import { useState, useEffect } from "react";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to load data.");

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section id="technologies" className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Explore Technologies
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Pick your technologies to build your stack.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full">
              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-3">
                  <div className="w-8 h-8 border-4 border-slate-300 border-t-pink-500 rounded-full animate-spin"></div>
                  <p className="text-sm">Loading...</p>
                </div>
              ) : error ? (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                  Error: {error}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {technologies.map((item) => (
                    <TechCard
                      key={item.id}
                      tech={item}
                      handleAddToStack={handleAddToStack}
                      isAdded={stack.some((s) => s.id === item.id)}
                    />
                  ))}
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

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
