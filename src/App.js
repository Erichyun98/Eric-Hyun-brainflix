import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/Home/Home.js';
import Page from './pages/Page/Page.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/Page' render={() => <Page />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;



