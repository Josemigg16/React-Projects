import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatAmount } from "../helpers/formatAmount"

const ManageBudget = ({ expenses, budget, handleResetApp }) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0)
        setAvailable(budget - totalSpent)
        setSpent(totalSpent)
    }, [expenses])

    useEffect(() => {
        setPercentage((Math.round(spent / budget * 10000) / 100).toFixed(2))
    }, [spent])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar value={percentage} text={`${percentage}% spent`}
                    styles={buildStyles({
                        textColor: percentage < 100 ? 'var(--azul)' : '#ff0000',
                        pathColor: percentage < 100 ? 'var(--azul)' : 'var(--rojo)',
                        trailColor: 'var(--gris-claro)',
                    })}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button className="reset-app" type="button"
                    onClick={handleResetApp}
                >
                    Reset App
                </button>
                <p>
                    <span>Budget: </span> {formatAmount(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
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