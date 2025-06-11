import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Expense from './Expense'
import AddExpense from './AddExpense'
import ExpenseDashboard from './ExpenseDash'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Expense />} />
        <Route path='/add-expense' element={<ExpenseDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
