import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Header from './component/Layout/Header'
import Home from './container/Home'
import Signup from './container/Signup'
import Signin from './container/Signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/signin' component={Signin}/>
      </Switch>
    </Router>
  );
}

export default App;
