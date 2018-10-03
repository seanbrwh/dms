import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  flex-direction:column;
  padding-top:30px;
`

const Input = styled.input`
  border-radius:4px;
  outline:none;
  border:.5px solid rgba(51,59,67,.5);
  text-align:center;
  :placeholder-shown{
    text-align:center;
  }
`

const Button = styled.button`
  width:90px;
  background:rgba(99,99,199,.5);
  outline:none;
  border:none;
  border-radius:3px;
  margin-top:10px;
`

const Container = styled.div`
  width:200px;
  height:200px;
  border-radius:4px;
  box-shadow:4px 6px 10px .5px;
  background:rgba(50,60,72,.9);
`

export default class Landing extends Component {
  render() {
    return (
      <Container>
        <Form action="">
          <label htmlFor="username">Username</label>
          <Input type="text" placeholder='Username'/>
          <label htmlFor="password">Password</label>
          <Input type="text" placeholder='password'/>
          <Button>Log In</Button>
        </Form>
      </Container>
    )
  }
}
