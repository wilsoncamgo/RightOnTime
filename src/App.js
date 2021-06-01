import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninPage from "./pages/sign_in";
import SignupPage from "./pages/sign_up";
import DashboardPage from "./pages/dashboard";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign_in" component={SigninPage} exact />
          <Route path="/sign_up" component={SignupPage} exact />
          <Route path="/dashboard" component={DashboardPage} exact />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
export default App;
