# 🧱 Dev Stack Builder

Welcome to **Dev Stack Builder**! This is a simple React application built with TypeScript and Tailwind CSS that helps web developers explore various software technologies and create their custom full-stack combination.

## 🚀 Live Demo & Links
- **GitHub Repository:** [Your Repository Link Here]
- **Live Site:** [Your Live Site Link Here]

---

## 🛠️ Technologies Used
- **React.js** (Component-based library)
- **TypeScript** (For type safety)
- **Vite** (Fast dev server and build tool)
- **Tailwind CSS v4** (Utility-first CSS styling)
- **React-Toastify** (For toast notifications)
- **React Icons** (SVG icon library)

---

## ✨ Project Features
1. **Dynamic JSON Data Fetching:** Loads technology tools dynamically from a local JSON file with loading indicators.
2. **Interactive Stack Selection:** Users can add technologies to their personal stack with duplicate prevention and disable options.
3. **Stack Management & Toast Alerts:** Effortlessly remove single items or clear the full stack with instant feedback using `react-toastify`.

---

## ❓ React Concepts & Questions Answered

### 1. What is JSX, and why is it used in React?
**Ans:** JSX stands for JavaScript XML. It allows us to write HTML-like elements inside JavaScript/TypeScript files in React. It makes writing UI markup much cleaner and easier to understand instead of writing ugly `React.createElement()` calls.

### 2. What is the difference between props and state?
**Ans:** 
- **Props:** Data passed from a parent component down to a child component. Props are read-only and cannot be modified by the child.
- **State:** Internal data managed within a component that can change over time when users click buttons or type in forms.

### 3. What does the useState hook do, and where did you use it in this project?
**Ans:** The `useState` hook lets functional components hold and update dynamic data. In this project, I used `useState` in `App.tsx` for tracking `technologies`, `stack` items, and the `loading` state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Ans:** `useEffect` runs side effects in a component (like data fetching). I used `useEffect` to fetch technology data from the `/data.json` file when the application mounts for the first time.

### 5. Why does every item in a .map() list need a unique key prop?
**Ans:** React uses the unique `key` prop to identify which items have changed, added, or removed. It helps React render lists efficiently without re-rendering every single item.

### 6. What is conditional rendering? Show one place you used it.
**Ans:** Conditional rendering means showing different UI blocks based on state condition. I used it in `Sidebar.tsx` to display an empty message when `stack.length === 0` and show the stack list when items are added.

### 7. How do you pass data from parent to child, and how does child send data back to parent?
**Ans:** 
- **Parent to Child:** Data is passed down using `props`.
- **Child to Parent:** The parent passes a function (callback) down as a prop, and the child calls that function with parameters when an event occurs.
