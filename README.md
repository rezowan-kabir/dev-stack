# Dev Stack Builder

Dev Stack is a simple web application where developers can explore different technology stacks and create their own custom stack list for their projects.

## 🚀 Technologies Used
- React.js
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- React Icons

## ✨ Features
1. **Explore Tech List:** Users can view technologies with their icons, ratings, badges, and difficulty levels.
2. **Add to Stack:** Users can add technologies to their custom stack side bar without duplicate additions.
3. **Toast Notifications:** Real time feedback pops up using React-Toastify when adding or removing items.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript files in React. It makes writing and understanding component structures much easier and visual instead of using plain JavaScript DOM operations.

### 2. What is the difference between props and state?
**Answer:** 
- **Props:** Data sent from a parent component to a child component. Props are read-only and cannot be changed by the child component.
- **State:** Data created and managed inside the component itself. When state updates, the component re-renders automatically.

### 3. What does the useState hook do, and where did you use it in this project?
**Answer:** `useState` is a React Hook that lets us store and update data inside a functional component. In this project, I used `useState` in `App.tsx` to keep track of the technology list from JSON, the loading state, and the user's selected technologies array (`myStack`).

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` allows us to perform side effects like fetching data or running code when a component loads. I used it to fetch the `data.json` file once when the page initially loads (on component mount).

### 5. Why does every item in a .map() list need a unique key prop?
**Answer:** React uses the unique `key` prop to track which items in a list are changed, added, or removed. It helps React update only the modified elements efficiently without re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means rendering different UI elements based on certain conditions (like `if/else` or ternary operators). 
*Example in project:* In `Sidebar.tsx`, I checked `stack.length === 0` to show "Your stack is empty." message when no technology is selected, otherwise showing the list of selected tech items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** 
- **Parent to Child:** Data is passed down through `props`.
- **Child to Parent:** The parent passes a handler function as a prop to the child, and the child component calls that function with parameters to send data back up to the parent.