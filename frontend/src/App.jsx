import './App.css'
import EarningsTable from './components/EarningsTable'
import SummaryStats from './components/SummaryStats'
import DashboardHeader from './components/DashboardHeader'

function App() {
  return (
    <div id='main'>
      <DashboardHeader />
      <div id="App">
        <SummaryStats />
        <EarningsTable />
      </div>
    </div>
  )
}

export default App
