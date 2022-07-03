import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import{useState} from "react";

function App() {

  const [counter, setCounter] = useState(0);
  return (
    <>
 <Header title="React Counter" />
 <Button counter={counter} setCounter={setCounter} />
<Footer title="Made with React at Le Reacteur by Manue"/>
     
    </>
  );
}

export default App;
