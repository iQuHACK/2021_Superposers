import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GamePage from './components/GamePage.component';
import Welcome from './components/Welcome.component';
import Link from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';


function App() {
  const history = useHistory();

  return (
    <Router>
      <Route path='/' exact component={Welcome} />
      <Route path="/play" exact component={GamePage} />
    </Router>
  );
}

export default App;
