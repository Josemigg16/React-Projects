import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatAmount } from "../helpers/formatAmount"

const ManageBudget = ({ expenses, budget }) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [graphicStyles, setGraphicStyles] = useState({
        pathColor: 'var(--azul)',
        trailColor: 'var(--gris-claro)',
    })

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0)
        setAvailable(budget - totalSpent)
        setSpent(totalSpent)
    }, [expenses])

    useEffect(() => {
        setPercentage((Math.round(spent / budget * 10000) / 100).toFixed(2))
        if (spent > budget) {
            setGraphicStyles({
                textColor: '#ff0000',
                pathColor: 'var(--rojo)',
                trailColor: 'var(--gris-claro)',
            })
        } else {
            setGraphicStyles({
                pathColor: 'var(--azul)',
                trailColor: 'var(--gris-claro)',
            })
        }
    }, [spent])

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar value={percentage} text={`${percentage}% spent`}
                    styles={buildStyles(graphicStyles)}
                />
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Budget: </span> {formatAmount(budget)}
                </p>
                <p className={`${spent > budget ? 'negativo' : ''}`}>
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