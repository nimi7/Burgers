import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile/profile';
import Navbar from './Components/Navbar/navbar';






function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>


        <Switch>

          <Route path="/" exact component={Home} />
          <Route path='/Burgers/:id' exact component={Profile} />
          <Route path='/Profile' exact component={Profile} />

        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
