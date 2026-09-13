# Dev Stack Builder 

A modern, interactive web application designed to help developers explore, select, and organize their ideal tech stack for modern software projects.

---

## Description

**Dev Stack Builder** allows developers to browse curated frontend, backend, database, and devops tools. Users can seamlessly add or remove technologies to/from a custom list, monitor selected technologies in real-time with visual indicators, and clear their selection effortlessly—all powered by a clean, responsive interface.

---

## Technologies Used

- **React** 
- **TypeScript**
- **Vite** 
- **Tailwind CSS & DaisyUI** 
- **React Toastify** 
- **JSON**

---

## Features

- **Browse Development Technologies:** Explore an extensive grid of technologies complete with ratings, badges, descriptions, and difficulty levels.
- **Dynamic Stack Management:** Add or remove technologies dynamically with state synchronization, ensuring no duplicate items can be added.
- **Interactive Feedback:** Get immediate visual toasts when adding, removing, or trying to add duplicate technologies, accompanied by real-time sidebar state updates.

---

## React Questions & Answers

## 1. What is JSX, and why is it used in React?

**Answer:**JSX is a JavaScript syntax that lets us write HTML-like code inside JavaScript. It makes React code easier to read and helps us describe what the UI should look like directly inside our components.


## 2. What is the difference between props and state?

**Answer:**
- **Props:** Props are data passed from a parent component to a child component. The child component can use the data but should not change it directly.
- **State:** State is data managed inside a component. It can change when something happens, and React updates the UI when the state changes.


## 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**`useState` is a React hook that lets us store and update data inside a component. In this project, I used it in `App.tsx` to store the technology data, keep track of the technologies added to the stack, and control the loading state.


## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` is used when we need to perform something after a component renders, such as fetching data. In this project, I used it to fetch the technology data from the local `data.json` file when the `App` component loads.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** A unique `key` helps React identify each item in a list. This allows React to understand which items have changed, been added, or removed when the UI updates.

## 6. What is conditional rendering? Give an example from this project.

**Answer:** Conditional rendering means showing different UI depending on a condition. In this project, I used it to show a loading spinner while the JSON data is being loaded and display the technology cards after the data is ready.

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