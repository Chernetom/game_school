import './App.css';
import TheGame from "./components/theGame";

const store = {
    numbers: [
    {number: "12"},
    {number: "14"}
    ]
};

function App() {
  return (
      <div>
          <TheGame numbers={store.numbers} mode={"up"}/>
      </div>
  );
}

export default App;
