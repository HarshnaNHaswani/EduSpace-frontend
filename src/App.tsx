import { AppRouter } from "router";
import "./App.css";
import { getThemeClass } from "./components/Theme/getThemeClass";
function App() {
  return (
    <div className={`App ${getThemeClass()}`}>
      <AppRouter/>
    </div>
  );
}

export default App;
