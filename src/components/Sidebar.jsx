import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';


function Sidebar() {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/')
    }
    
  return (
    <div>
<button className='flex flex-col ml-10 mb-15 cursor-pointer rotate-180 '  onClick={logout}> <LogoutIcon style={{ width:'50px',height:'50px'}} /> </button>
        <ul className=' bg-gray-200 w-24 ml-6 rounded-2xl flex flex-col max-h-dvh items-center'>
<Link to='/main/sales'>
           <li  title='Satış Verileri'
             className='bg-gray-300   hover:bg-gray-400 m-5 mb-5 rounded-2xl w-16 h-14 cursor-pointer flex items-center justify-center'
            > 
            <TrendingUpIcon  style={{width:'50px', height:'50px'}} />
            </li> </Link>
<Link to='/main/transfer'>
            <li  title='Dağıtım Verileri'
             className='bg-gray-300   hover:bg-gray-400 m-5   mb-5  rounded-2xl w-16 h-14 cursor-pointer flex items-center justify-center'
            >
                <LocalShippingIcon style={{width:'50px' ,height:'50px'}} />
            </li>  </Link>
<Link to='/main/inventory'>
            <li title='Stok Verileri'
             className='bg-gray-300   hover:bg-gray-400 m-5   mb--5 rounded-2xl w-16 h-14 cursor-pointer flex items-center justify-center'
            >
                <InventoryIcon style={{width:'50px', height:'50px'}}/>
            </li> </Link>
<Link to='/main/finance'>
            <li title='Finansal Veriler'
            className='bg-gray-300   hover:bg-gray-400 m-5   mb--5 rounded-2xl w-16 h-14 cursor-pointer flex items-center justify-center'
            >
                <CurrencyLiraIcon style={{width:'50px', height:'50px'}} />
            </li></Link>
<Link to='/main/account'>
            <li title='Kullanıcı Verileri'
            className='bg-gray-300   hover:bg-gray-400 m-5   mb--5 rounded-2xl w-16 h-14 cursor-pointer flex items-center justify-center'
            > 
            <AccountCircleIcon style={{width:'50px' ,height:'50px'}} />
            </li> </Link>
        </ul> 
        
      
    </div>
  )
}
export default Sidebar