import { useState } from 'react'
import Header from './components/Header'
import Expenses from './components/Expenses'
import newExpenseIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {
  const [budget, setBudget] = useState(0)
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [editingExpense, setEditingExpense] = useState({})

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


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />
      {validBudget && (
        <>
          <main>
            <Expenses
              expenses={expenses}
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
