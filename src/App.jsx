import "./App.css";


function App() {
  const todoTitle = "My Todo List";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

  const Card = () => {
    return (
      <div className="card">
        <h2 style={{ color: "red", fontSize: "3rem" }}>{todoTitle}</h2>
        <p className="app">
          Date: {dateName}/{monthName}/{currentYear}
        </p>
        <ul>
          <li>Learn React</li>
          <li>Learn Node</li>
          <li>Learn Express</li>
          <li>Learn MongoDB</li>
        </ul>
      </div>
    );
  };

  const headingStyle = {
    backgroundColor: "purple",
    color: "white",
    fontSize: "4rem",
    textAlign: "center",
    padding: "15px",
  };

  return (
    <>
      <h1 style={headingStyle}>Todo App</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
