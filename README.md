# 🧮 Multi Counter App — Learn `useState` in React

This project is a simple and interactive **Multi Counter App** built with **React**.  
It’s designed to help beginners understand one of the most fundamental React hooks: **`useState`**.

---

## 🚀 Live Demo

👉 [View Demo](#)  
(Add your deployed link here, e.g., from Vercel or Netlify)

---

## 🧠 What You’ll Learn

This project demonstrates how to:
- Use the **`useState`** hook to manage state in React.
- Update state **immutably** using array and object methods.
- Dynamically **add and remove components** from the UI.
- Pass functions and values cleanly between JSX elements.
- Apply **simple, reusable CSS styles** for a clean and responsive layout.

---

## 💡 About the Project

The **Multi Counter App** lets you:
1. Add as many counters as you want.  
2. Increment or decrement each counter individually.  
3. Remove counters when you don’t need them anymore.

It’s a great example for learning:
- How React re-renders components when state changes.
- How to handle arrays in state using the spread operator.
- How to write clean, organized component code.

---

## 🧩 Project Structure

src/
├── App.jsx # Main entry component

├── MultiCounter.jsx # Core component with useState logic

├── MultiCounter.css # Styling for the app

└── main.jsx # React DOM setup

## ⚙️ How It Works

### 1. Initialize state
```jsx
const [counters, setCounters] = useState([0]);
```
We start with a single counter represented by an array containing one element.

## 2. Add a new counter
```jsx
const addCounter = () => setCounters([...counters, 0]);
```
The spread operator (...) is used to create a new array so React can detect the change and re-render.

## 3. Update a specific counter
```jsx
const updateCounter = (index, amount) => {
  const newCounters = counters.map((value, i) =>
    i === index ? value + amount : value
  );
  setCounters(newCounters);
};
```
This function updates only the counter at the chosen index, a common React pattern.

## Remove a counter
```jsx
const removeCounter = (index) => {
  setCounters(counters.filter((_, i) => i !== index));
};
```
filter() removes the selected counter and updates the array.

## Styling

The app uses a simple CSS file (MultiCounter.css) with responsive design in mind.
You can easily swap it out for Tailwind or any other styling method.

## Installation & Setup
1- Clone the repository:

```bash
git clone https://github.com/your-username/multi-counter-app.git
```

2-Navigate into the folder:
```bash
cd multi-counter-app
```

3- Install dependencies:
```bash
npm install
```

4- Start the development server:
```bash
npm run dev
```

5- Open in your browser:
```bash
http://localhost:5173
```
## Example Code Snippet
Here’s the heart of the app:

```jsx
function MultiCounter() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => setCounters([...counters, 0]);

  const updateCounter = (index, amount) => {
    const newCounters = counters.map((value, i) =>
      i === index ? value + amount : value
    );
    setCounters(newCounters);
  };

  const removeCounter = (index) => {
    setCounters(counters.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>Multi Counter App</h1>
      <button className="add-btn" onClick={addCounter}>➕ Add Counter</button>
      <div className="counter-grid">
        {counters.map((count, index) => (
          <div key={index} className="counter-card">
            <h2>Counter {index + 1}</h2>
            <p className="count">{count}</p>
            <div className="controls">
              <button onClick={() => updateCounter(index, -1)} className="btn minus">➖</button>
              <button onClick={() => updateCounter(index, +1)} className="btn plus">➕</button>
            </div>
            <button onClick={() => removeCounter(index)} className="remove-btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
```
## Author
👋 Obada Barakat
Frontend Developer | UI Designer | Lifelong Learner

## License
This project is open source and available under the MIT License
.
