import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes,Route } from 'react-router'
import Sales from '../components/Sales'
import Transfer from '../components/Transfer'
import Inventory from '../components/Inventory'
import Finance from '../components/Finance'
import Account from '../components/Account'



function Main() {

  return (
    <div className="flex items-center justify-center h-screen bg-purple-200">
       <div className='bg-white w-10/12 h-10/12 rounded-2xl shadow-2xl flex flex-row'>
        
      <div className='flex flex-col mt-10'>
       <Sidebar />
      </div>
      <div  id='memed' className='bg-gray-200 w-9/10 m-6 rounded-2xl' > 
      <Routes>
             <Route path='sales' element={<Sales /> } />
            <Route path='transfer' element={<Transfer />} />
            <Route path='inventory' element={<Inventory />} />
            <Route path='finance' element={<Finance />} />
            <Route path='account' element={<Account />} />


          </Routes>
       </div>
      </div>
    </div>
  )
}

export default Main