import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './UsedInv.css'
import Sienna from './Sienna.jpg'
import SearchBar from '../SearchBar/SearchBar'

export default class UsedInv extends Component {
  render() {
    return (
      <Tabs>
      <TabList>
        <Tab>
          <h3>
            NEW Inventory
          </h3>
        </Tab>
        <Tab>
          <h3>
            USED Inventory
          </h3>
        </Tab>
        <Tab>
          <h3>
            ALL Inventory
          </h3>
        </Tab>
      </TabList>
  
      <TabPanel>
        <div className="table">
          <table>
            <tbody>                   
              <tr>              
                <th>Details</th>
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
              </tr>
              <tr className='car'>
                <td> <button className='view-btn'>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr><tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
              <tr className='car'>
                <td> <button>VIEW</button> </td>
                <td> * </td>
                <td> <img src={Sienna} alt="Sienna"/> </td>
                <td> New 2019 Toyota Sienna XLE Premium AWD Mini-van Passenger</td>
                <td> 12 </td>
                <td>Mini Van</td>
                <td> 12 </td>
                <td>Grey</td>
                <td>Ash</td>
                <td>35,999</td>
                <td>New</td>
                <td>None</td>
                <td>Sienna</td>
                <td>000</td>            
              </tr>
            </tbody>
          </table>
        </div>
      </TabPanel>
      <TabPanel>
      <table>
        <tbody>
          <tr>
            <th>
              <h2>Used</h2>
            </th>
          </tr>
          <tr>          
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
          </tr>
        </tbody>
      </table>
      </TabPanel>
      <TabPanel>
      <table>
        <tbody>
          <tr>
            <th>
              <h2>All</h2>
            </th>
          </tr>
          <tr>          
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
          </tr>
        </tbody>
      </table>
      </TabPanel>
    </Tabs>
    )
  }
}
