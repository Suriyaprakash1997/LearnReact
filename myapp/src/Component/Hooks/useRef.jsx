import React, { useRef, useState, useEffect } from "react";

function TaskTracker() {
  const inputRef = useRef(null); // Access DOM element
  const taskCountRef = useRef(0); // Persist value without re-render
  const prevTaskCountRef = useRef(0); // Store previous state
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus input on page load
  }, []);

  useEffect(() => {
    prevTaskCountRef.current = taskCountRef.current; // Store previous count
  }, [tasks]);

  const addTask = () => {
    const task = inputRef.current.value.trim();
    if (task) {
      setTasks([...tasks, task]);
      taskCountRef.current += 1; // Increment task count without re-render
      inputRef.current.value = ""; // Clear input field
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>📌 Task Tracker</h2>
      <input ref={inputRef} type="text" placeholder="Enter a task..." style={{ padding: "5px", width: "80%" }} />
      <button onClick={addTask} style={{ marginLeft: "5px", padding: "5px 10px" }}>Add</button>
      <p>🔹 <b>Previous Task Count:</b> {prevTaskCountRef.current}</p>
      <p>🔹 <b>Total Tasks Added:</b> {taskCountRef.current}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;











// import { useRef, useState } from "react";
// //import { useRef ,useEffect} from "react";
// function useRefComponent() {

//     //Auto Focusing
// //   const inputRef = useRef(null);
// //   useEffect(() => {
// //     inputRef.current.focus(); // Automatically focus input on mount
// //   }, []);
// //   return <input ref={inputRef} type="text" placeholder="Auto Focus" />;

//   //Store mutable value without re-rendering
// //   const countRef = useRef(0);
// //   const [count, setCount] = useState(0);

// //   const incrementRef = () => {
// //     countRef.current += 1; // Updates value but does NOT re-render
// //     console.log("Ref Count:", countRef.current);
// //   };

// //   return (
// //     <div>
// //       <p>State Count: {count}</p>
// //       <p>Ref Count (No Render Update): {countRef.current}</p>
// //       <button onClick={() => setCount(count + 1)}>Increment State</button>
// //       <button onClick={incrementRef}>Increment Ref</button>
// //     </div>
// //   );

// //Keep tracking previous values.
// // const [count, setCount] = useState(0);
// //   const prevCountRef = useRef();

// //   useEffect(() => {
// //     prevCountRef.current = count; // Stores previous count value
// //   }, [count]);

// //   return (
// //     <div>
// //       <p>Current Count: {count}</p>
// //       <p>Previous Count: {prevCountRef.current}</p>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //     </div>
// //   );

//   //Store interval IDs or Timeout References
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);

//   const startTimer = () => {
//     if (!intervalRef.current) {
//         console.log(intervalRef.current)
//       intervalRef.current = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   return (
//     <div>
//       <p>Timer: {count} seconds</p>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }
// export default useRefComponent;
