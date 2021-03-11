import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import TeamList from './components/TeamList/TeamList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (

    <Router>

      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
          <TeamList />
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails />
        </Route>
      </Switch>
    </Router>
  );


}

export default App;
