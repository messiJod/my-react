import "./App.css";

function App() {
  return (
    <div className="container">
      <Mybutton />
    </div>
  );
}

function Mybutton() {
  return (
    <button className="bg-blue-600 px-5 py-2 rounded-xl font-medium text-white hover:cursor-pointer hover:bg-blue-700/60 transition-all">
      Jod
    </button>
  );
}
export default App;
