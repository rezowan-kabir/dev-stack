# Dev Stack Builder 🚀

A modern, interactive web application designed to help developers explore, select, and organize their ideal tech stack for modern software projects.

---

## 📄 Description

**Dev Stack Builder** allows developers to browse curated frontend, backend, database, and devops tools. Users can seamlessly add or remove technologies to/from a custom list, monitor selected technologies in real-time with visual indicators, and clear their selection effortlessly—all powered by a clean, responsive interface.

---

## 🛠️ Technologies Used

- **React** (Component-driven UI library)
- **TypeScript** (Type-safe JavaScript for reliability)
- **Vite** (Next-generation, fast frontend build tool)
- **Tailwind CSS & DaisyUI** (Utility-first and component-based styling)
- **React Toastify** (Interactive notification alerts)
- **JSON** (Local data source for technology items)

---

## ✨ Features

- **Browse Development Technologies:** Explore an extensive grid of technologies complete with ratings, badges, descriptions, and difficulty levels.
- **Dynamic Stack Management:** Add or remove technologies dynamically with state synchronization, ensuring no duplicate items can be added.
- **Interactive Feedback:** Get immediate visual toasts when adding, removing, or trying to add duplicate technologies, accompanied by real-time sidebar state updates.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that lets developers write HTML-like markup inside a JavaScript file. It is used in React because it makes building component UI structures intuitive, readable, and easy to maintain while combining render logic with component structure.

### 2. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Immutable data passed down from a parent component to a child component (read-only for the child).
- **State:** Internal data managed within a component that can change over time. When state changes, the component automatically re-renders to reflect the new state in the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to create, hold, and update their own local state. In this project, `useState` was used in `App.tsx` to store the loaded technology list (`technologies`), maintain the selected items in the user's stack (`stack`), and manage the loading spinner state (`loading`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook is used to handle side effects in components, such as fetching data, modifying the DOM, or setting up subscriptions. In this project, it was used to fetch the technology items from local `data.json` file asynchronously as soon as the main application component mounted on the screen.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the unique `key` prop to identify which items in a list have changed, been added, or been removed. It optimizes performance during the reconciliation process by preventing unnecessary re-renders of unchanged DOM elements.

### 6. What is conditional rendering? Give an example from this project.
**Answer:** Conditional rendering means rendering different components or markup based on specific conditions (e.g., using ternary operators `? :` or logical `&&`). 

**Example from project (`TechCard.tsx`):**
```tsx
<button
  onClick={() => handleAddToStack(tech)}
  disabled={isAdded}
  className={`btn btn-sm w-full ${
    isAdded ? 'btn-disabled bg-slate-100' : 'bg-slate-900 text-white'
  }`}
>
  {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
</button>