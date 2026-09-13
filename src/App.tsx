import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data.json");
        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load data:", error);
        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Add tech to stack
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning("Already added!");
      return;
    }
    setStack((previousStack) => [...previousStack, tech]);
    toast.success("Technology added!");
  };

  // Remove one tech
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    toast.info("Technology removed!");
  };

  // Remove all tech
  const handleRemoveAll = () => {
    setStack([]);
    
    toast.error("All technologies removed!");};

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
           <p className="text-sm text-slate-500 mt-1"> Pick technologies to build your ideal stack. </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full">{loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
                  <p className="text-sm text-slate-400"> Loading technologies...</p>
                </div>) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((item) => {
                    const isAdded = stack.some(
                      (stackItem) => stackItem.id === item.id,);

                    return (
                      <TechCard key={item.id} tech={item} handleAddToStack={handleAddToStack}isAdded={isAdded}/>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="w-full lg:w-80">
              <Sidebar stack={stack} handleRemoveFromStack={handleRemoveFromStack} handleRemoveAll={handleRemoveAll}/>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
