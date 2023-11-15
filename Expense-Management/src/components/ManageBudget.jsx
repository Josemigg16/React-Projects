import { useState, useEffect } from "react"
import { formatAmount } from "../helpers/formatAmount"

const ManageBudget = ({ expenses, budget }) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0)
        setAvailable(budget - totalSpent)
        setSpent(totalSpent)
    }, [expenses])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                Graphic
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Budget: </span> {formatAmount(budget)}
                </p>
                <p>
                    <span>Available: </span> {formatAmount(available)}
                </p>
                <p>
                    <span>Spent: </span> {formatAmount(spent)}
                </p>
            </div>
        </div>
    )
}

export default ManageBudget