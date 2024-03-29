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
        <Route path='/' exact component = {Home} />
        <Route path='/page' component = {Page} />
        <Route path='/videos/:id' component ={Home} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;



