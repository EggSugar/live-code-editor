import "./App.css"
import { Header } from "./components/Header";
import { cssDefaultTemplate, htmlDefaultTemplate } from "./config";
import { Context } from "./context";
import { Layout } from "./layout/Layout";
import { IState } from "./model";
import { useLocalStorage } from "./hooks/useLocalStorage";

const initialState: IState = {
  html: htmlDefaultTemplate,
  css: cssDefaultTemplate,
  theme: "dark",
  js: ""
}

function App() {
  const [state, dispatch] = useLocalStorage("state", initialState);

  return (
    <div className="App">
      <Header />

      <main>
        <Context.Provider value={{ state, dispatch}}>
          <Layout />
        </Context.Provider>
      </main>
    </div>
  );
};

export default App;
