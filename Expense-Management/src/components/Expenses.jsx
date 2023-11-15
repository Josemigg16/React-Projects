import Expense from "./Expense"

const Expenses = ({ expenses }) => {
    return (
        <div className='listado-gastos contenedor'>
            <>
            <h2>Expenses</h2>
                {
                    expenses.map(expense => (
                        <Expense key={expense.id} expense={expense} />
                    ))
                }
            </>
        </div>
    )
}

export default Expenses