import DateFnsUtils from '@date-io/date-fns'
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import CreatePatent from './components/CreatePatent'
import { useEthereumInit } from './components/ethereum'
import Patent from './components/Patent'
import Patents from './components/Patents'
import Profile from './components/Profile'

function App () {
  const eth = useEthereumInit()
  if (eth.fallback) {
    return eth.fallback
  }
  const { ethereum, provideEthereum } = eth

  return (
    <BrowserRouter>
      <AppBar position="static" className="top-bar">
        <Toolbar>
          <Typography variant="h6" className="main-title">
            IdeaChainCoin
          </Typography>
          <div className="nav">
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            <Button color="inherit" component={Link} to="/patents">Patents</Button>
          </div>
          Account: <code>{ethereum.account}</code>
        </Toolbar>
      </AppBar>

      <Container>
        {provideEthereum(
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route exact path="/patents" component={Patents} />
              <Route exact path="/patents/create" component={CreatePatent} />
              <Route exact path="/patents/:id" component={Patent} />
            </Switch></MuiPickersUtilsProvider>
        )}
      </Container>
    </BrowserRouter>
  )
}

export default App
