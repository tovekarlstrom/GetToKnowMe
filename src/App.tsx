import { Outlet } from "react-router-dom";
import "./App.css";
import { Layout } from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Outlet />
        </Layout>
      </header>
    </div>
  );
}

export default App;
