import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import MasterList from './components/masterlist/MasterList'
import DataEncoder from './components/dataencoder/DataEncoder'
import GIP from './components/gip/GIP'
import OJT from './components/ojt/OJT'

export default function App() {
  const [active, setActive] = useState('masterlist')

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeId={active} onSelect={setActive} />

      <main className="flex-1 p-8">
        {active === 'masterlist' && <MasterList />}
        {active === 'dataencoder' && <DataEncoder />}
        {active === 'gip' && <GIP />}
        {active === 'ojt' && <OJT />}
      </main>
    </div>
  )
}