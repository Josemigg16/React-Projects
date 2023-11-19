import Expense from "./Expense"

const Expenses = ({ filters, expenses, filteredExpenses, editExpense, deleteExpense }) => {
    return (
        <div className='listado-gastos contenedor'>

            {
                filters
                    ?
                    (
                        <>
                            <h2>{filteredExpenses.length > 0 ? 'Expenses' : 'There are not expenses in this category yet'}</h2>
                            {filteredExpenses.map(filteredExpense => (
                                <Expense
                                    key={filteredExpense.id}
                                    expense={filteredExpense}
                                    editExpense={editExpense}
                                    deleteExpense={deleteExpense}
                                />
                            ))}
                        </>
                    )

                    :
                    (
                        <>
                            <h2>{expenses.length > 0 ? 'Expenses' : 'There are not expenses yet'}</h2>
                            {expenses.map(expense => (
                                <Expense
                                    key={expense.id}
                                    expense={expense}
                                    editExpense={editExpense}
                                    deleteExpense={deleteExpense}
                                />
                            ))}
                        </>
                    )
            }
        </div>
    )
}

export default Expenses