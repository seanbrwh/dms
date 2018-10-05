import React, { Component } from 'react'
import styled from 'styled-components'

const Search = styled.input`
  width:300px;
  height:30px;  
  background:rgba(244,255,255,.5);  
  border-right:none;
  border:none;
  border-top-left-radius:6px;
  border-bottom-left-radius:6px;
  color:white;
  padding-left:10px;
  :placeholder-shown{
    padding-left:10px;    
  }
  :focus{
    background:rgba(144,255,255,.1);
    outline:0;
  }
  ::placeholder{
    color:white;
  }
`
const Container = styled.div`  
  background:inherit;
  width:410px;    
`

const SearchButton = styled.button`  
  width:40px;
  height:30px;
  border-left:none;  
  border:none;
  border-top-right-radius:6px;
  border-bottom-right-radius:6px;
  outline:0;
  :hover{
    background:rgba(180,255,244,.2);
  }
`

export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Search type='search' placeholder='Search Everything'/>
        <SearchButton><i className="fa fa-search"></i></SearchButton>
      </Container>
    )
  }
}
