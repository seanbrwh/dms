import React, { Component } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const tabsStyle = {
  display:'flex',
  flexDirection:'column'
}
const tabListStyle = {
  display:'flex',
  flexDirection:'row',
  listStyleType:'none',
  position:'absolute',
  top:'100px',
  left:'180px'
}
const tabStyle = {
  width:'200px',
  height:'32px',
  textAlign:'center',
  paddingBottom:'15px',
  background:'grey',
  cursor:'default',
  borderRadius: '10px 10px 0 0',
  border:'.5px solid black',
}
const tabPanelStyle1 = {
  display:'flex',
  listStyleType:'none',
  position:'absolute',
  top:'164px',
  left:'213px',
  width:'1600px',
  height:'700px'
}
const tabPanelStyle2 = {
  display:'flex',
  listStyleType:'none',
  position:'absolute',
  top:'164px',
  left:'213px',
  width:'1600px',
  height:'700px'
}
const Table = styled.table`
  width:100%;
  padding-top:10px;
`
const TableRow = styled.tr`
  background:red;
`

export default class UsedInv extends Component {
  constructor(){
    super()
    this.state = {
      VehicleData:[]
    }
  }
  render() {
    return (
      <Tabs style={tabsStyle}>
      <TabList style={tabListStyle}>
        <Tab style={tabStyle}>
          <h3>
            Used Inventory
          </h3>
        </Tab>
        <Tab style={tabStyle}>
          <h3>
            New Inventory
          </h3>
        </Tab>
      </TabList>
  
      <TabPanel style={tabPanelStyle1}>
        <Table>
          <TableRow>
            <th>Detailed View</th>
            <th>Inv</th>
            <th>Photo</th>
            <th>Details</th>
            <th>Days in Inv</th>
            <th>Type</th>
            <th>Mileage</th>
            <th>External Color</th>
            <th>interior Color</th>
            <th>Pricing</th>
            <th>Status</th>
            <th>Deals</th>
            <th>Model Code</th>
            <th>Sales Code</th>
          </TableRow>
        </Table>
      </TabPanel>
      <TabPanel style={tabPanelStyle2}>
      <Table>
      <TableRow>
            <th>Detailed View</th>
            <th>Inv</th>
            <th>Photo</th>
            <th>Details</th>
            <th>Days in Inv</th>
            <th>Type</th>
            <th>Mileage</th>
            <th>External Color</th>
            <th>interior Color</th>
            <th>Pricing</th>
            <th>Status</th>
            <th>Deals</th>
            <th>Model Code</th>
            <th>Sales Code</th>
      </TableRow>
        </Table>
      </TabPanel>
    </Tabs>
    )
  }
}
