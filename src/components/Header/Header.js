import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'
import {Link} from 'react-router-dom'

const Head = styled.header`
  width:100%;
  height:100px;
  position:fixed;
  top:0;
  background:#333B43;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding-left:190px;
`
const Home = styled.h1`
  margin-right:40px;
  color:white;
`
const linkStyle = {
  textDecoration:'none',
  color:'inherit'
}
export default class Header extends Component {
  render() {
    return (
      <Head>
        <Link to='/' style={linkStyle}>
          <Home>Home</Home>
        </Link>
        <SearchBar/>
      </Head>
    )
  }
}
