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
    setModal(false)
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
            <Expenses expenses={expenses} />
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
          <Modal setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            saveExpense={saveExpense}
          />
        </div>
      )}
    </div>
  )
}

export default App
