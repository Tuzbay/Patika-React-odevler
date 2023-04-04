import "./App.scss";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvide } from "./context/WeatherData";
import Container from "./components/Container";

function App() {
  return (
    <ThemeProvider>
      <WeatherProvide>
        <Container />
      </WeatherProvide>
    </ThemeProvider>
  );
}

export default App;
