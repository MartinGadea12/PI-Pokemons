import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LangindPage/LandingPage'
import Home from './components/Home/Home'
import Formulario from './components/Formulario/Formulario'
import Detail from './components/Detail/Detail'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path = "/" component = {LandingPage}/>
    <Route path = "/home" component = {Home}/>
    <Route path = "/create" component = {Formulario}/>
    <Route  path= '/pokemons/:id' component={Detail} />
    

    </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
