import { useEffect, useState } from 'react'
import Header from './components/Header'
import Expenses from './components/Expenses'
import newExpenseIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import Filters from './components/Filters'

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0)
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) ?? [])
  const [editingExpense, setEditingExpense] = useState({})
  const [filters, setFilters] = useState('')
  const [filteredExpenses, setFilteredExpenses] = useState([])

  useEffect(() => {
    Number(localStorage.setItem('budget', budget))
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
    if (filters) setFilteredExpenses(expenses.filter(expense => expense.category === filters))
  }, [expenses])

  useEffect(() => {
    if (budget > 0) setValidBudget(true)
  }, [])

  useEffect(() => {
    setFilteredExpenses(expenses.filter(expense => expense.category === filters))
  }, [filters])


  const editExpense = expense => {
    handleModal()
    setEditingExpense(expense)
  }
  const deleteExpense = expense => {
    const newList = expenses.filter(actExpense => actExpense.id !== expense.id)
    setExpenses(newList)
  }

  const handleModal = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 50)
  }

  const saveExpense = expense => {
    expense.id = crypto.randomUUID()
    expense.date = Date.now()
    setExpenses([...expenses, expense])
  }
  const saveEditedExpense = editedExpense => {
    const { name, amount, category } = editedExpense
    const editedList = expenses.map(expense => {
      return expense.id === editingExpense.id
        ? { ...editingExpense, name, amount, category }
        : expense
    })
    setExpenses(editedList)
    setEditingExpense({})
  }
  const handleResetApp = () => {
    const confirmReset = confirm('Are you sure you want to reset the app?')
    if (confirmReset) {
      setBudget(0)
      setExpenses([])
      setValidBudget(false)
    }
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
        handleResetApp={handleResetApp}
      />
      {validBudget && (
        <>
          <main>
            <Filters filters={filters} setFilters={setFilters} />
            <Expenses
              filters={filters}
              expenses={expenses}
              filteredExpenses={filteredExpenses}
              editExpense={editExpense}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={newExpenseIcon} alt="New Expense Icon"
              onClick={handleModal}
            />
          </div>
        </>
      )}
      {modal && (
        <div>
          <Modal
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            saveExpense={saveExpense}
            saveEditedExpense={saveEditedExpense}
            editingExpense={editingExpense}
            setEditingExpense={setEditingExpense}
          />
        </div>
      )}
    </div>
  )
}

export default App
