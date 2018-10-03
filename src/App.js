import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/SideBar/Sidebar'
import routes from './routes'
import styled from 'styled-components'

const Sdiv = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  flex-direction:column;
  width:100%;
  height:100vh;
`

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Sidebar/>
        </div>
        <Sdiv>
          {routes}
        </Sdiv>
        <div>
          <Footer/>      
        </div>
      </div>
    );
  }
}

export default App;
