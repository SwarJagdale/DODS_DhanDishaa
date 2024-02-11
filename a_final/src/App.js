import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route exact path='/' component={Home} />
          
        </Switch>
   
      </Router>
    </>
  )
}

export default App
