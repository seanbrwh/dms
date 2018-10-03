import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Aside = styled.aside`  
  width:180px;
  height:100vh;
  margin-top:100px;
  background:rgba(180,180,180,1);
  position:fixed;
  left:0;
  z-index:2;
  display:flex;
  justify-content:flex-start;
  align-items:center;  
  flex-direction:column;  
  background:rgb(51,59,67);
  color:white;
  padding-left:5px;
  padding-right:5px;
`
const Section = styled.section`
  width:100%;
  font-size:1.19rem;  
  line-height:22px;
  border-radius:4px;
  p{
    text-align:center;
    vertical-align:center;
  }
  :hover{
    box-shadow: inset 0px 1px 1px 0px #BFB8B8;
    border: 1px solid black;
    background:rgba(59,65,72,.9);
    cursor:default;
  }
`

const linkStyle = {
  width:'inherit',
  color:'inherit',
  textDecoration:'none'
}


export default class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <Link to='used' style={linkStyle}>
          <Section>
            <p>
              Inventory                
            </p>
          </Section>
        </Link>
        <Link to='auction' style={linkStyle}>
          <Section>
            <p>
              Auction 
            </p>
          </Section>
        </Link>
        <Link to='fandi' style={linkStyle}>
          <Section>
            <p>
              Finace 
            </p>
          </Section>
        </Link>
        <Link to='dealerweb' style={linkStyle}>
          <Section>
            <p>
              Dealer Website                
            </p>
          </Section>
        </Link>
        <Link to='salesdesk' style={linkStyle}>
          <Section>
            <p>
              Sales Desk
            </p>
          </Section>
        </Link>
        <Link to='bookkeeping' style={linkStyle}>
          <Section>
            <p>
              Accounting
            </p>
          </Section>
        </Link>
        <Link to='wholesale' style={linkStyle}>
          <Section>
            <p>
              WholeSale 
            </p>
          </Section>
        </Link>
        <Link to='employee' style={linkStyle}>
          <Section>
            <p>
              Employee 
            </p>
          </Section>
        </Link>
        <Link to='parts' style={linkStyle}>
          <Section>
            <p>
              Parts 
            </p>
          </Section>
        </Link>
        <Link to='crm' style={linkStyle}>
          <Section>
            <p>
              CRM
            </p>
          </Section>
        </Link>
      </Aside>
    )
  }
}
