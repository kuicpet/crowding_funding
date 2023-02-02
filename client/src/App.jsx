import { ConnectWallet } from '@thirdweb-dev/react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile, CampaignDetails, CreateCampaign } from './pages'
import { Sidebar, Navbar } from './components'

export default function App() {
  return (
    <div className='relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row text-white'>
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px]: mx-auto sm:pr-5 '>
        Navbar
        <Routes>
          <Route path='/' element={<Home />} />
          <Route />
        </Routes>
      </div>
    </div>
  )
}
