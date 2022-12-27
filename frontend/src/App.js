import "./App.scss";
import AddBook from "./components/AddBook";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <Books />
      <div className="footer">
        <AddBook />
      </div>
    </div>
  );
}

export default App;
