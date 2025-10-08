import "./App.css";

function App() {
  const handleClick = () => {
    console.log("Project Running!");
  };

  return (
    <div>
      <h1>Hello, My Name is Omkar</h1>{" "}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
