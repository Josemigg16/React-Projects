import { useEffect } from 'react'
import NewBudget from './NewBudget'
import ManageBudget from './ManageBudget'

const Header = ({ expenses, budget, setBudget, validBudget, setValidBudget }) => {



    return (
        <>
            <header>
                <h1>Expense Management</h1>
                {!validBudget
                    ?
                    <NewBudget budget={budget} setBudget={setBudget} setValidBudget={setValidBudget} />
                    :
                    <ManageBudget expenses={expenses} budget={budget} />
                }
            </header>

        </>
    )
}

export default Header