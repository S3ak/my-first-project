import viteLogo from "/vite.svg";
import { Bs0SquareFill } from "react-icons/bs";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1 className="heading-section">
        <Bs0SquareFill></Bs0SquareFill>Welcome to front end
      </h1>
      <p>Where we create magic</p>
      <button className="button">CLick ME</button>
    </>
  );
}

export default App;
