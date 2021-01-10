import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import Home from './home/Home'
import Footer from './footer/Footer'
import Login from './login/Login'
import Register from './register/Register'

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/logout'>Logout</Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/' component={Home} />
          <Route path='/'></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
