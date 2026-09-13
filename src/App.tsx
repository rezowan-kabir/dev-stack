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

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data.json");
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load JSON data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning("Already added!");
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success("Technology added!");
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <section
          id="technologies"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Explore the{" "}
              <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full">
              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-2">
                  <span className="loading loading-spinner loading-md text-pink-500"></span>
                  <p className="text-xs font-medium text-slate-400">
                    Loading technologies...
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((item) => {
                    const isAdded = stack.some(
                      (stackItem) => stackItem.id === item.id,
                    );
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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
