import Expense from "./Expense"

const Expenses = ({ expenses, editExpense, deleteExpense }) => {
    return (
        <div className='listado-gastos contenedor'>
            <>
                {
                    expenses.length < 1
                        ? (
                            <h2>There are not expenses yet</h2>
                        )
                        : (
                            <h2>Expenses</h2>
                        )
                }
                {
                    expenses.map(expense => (
                        <Expense
                            key={expense.id}
                            expense={expense}
                            editExpense={editExpense}
                            deleteExpense={deleteExpense}
                        />
                    ))
                }
            </>
        </div>
    )
}

export default Expenses