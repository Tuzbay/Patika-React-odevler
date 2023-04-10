import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./styles/general.scss";

function App() {
  return (
    <div>
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
