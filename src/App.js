import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import SigninPage from "./pages/sign_in";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component ={Home} exact/>
        <Route path="/sign_in" component ={SigninPage} exact/>
      </Switch>
    </Router>
  );
}
export default App;
