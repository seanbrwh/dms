import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import UsedIvn from './components/UsedInv/UsedInv'
import AuctionMan from './components/AuctionMan/AuctionMan'
import FAndI from './components/FAndI/FAndI'
import DealerWeb from './components/DealerWeb/DealerWeb'
import SalesDesk from './components/SalesDesk/SalesDesk'
import BookKeeping from './components/BookKeeping/BookKeeping'
import WholeSale from './components/WholeSale/WholeSale'
import Employee from './components/Employee/Employee'
import Parts from './components/Parts/Parts'
import CRM from './components/CRM/CRM'


export default(
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route exact path='/used' component={UsedIvn}/>
    <Route exact path='/auction' component={AuctionMan}/>
    <Route exact path='/fandi' component={FAndI}/>
    <Route exact path='/dealerweb' component={DealerWeb}/>
    <Route exact path='/salesdesk' component={SalesDesk}/>
    <Route exact path='/bookkeeping' component={BookKeeping}/>
    <Route exact path='/wholesale' component={WholeSale}/>
    <Route exact path='/employee' component={Employee}/>
    <Route exact path='/parts' component={Parts}/>
    <Route exact path='/crm' component={CRM}/>
  </Switch>
)