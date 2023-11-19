import { useState } from 'react'
import Message from './Message'

const NewBudget = ({ budget, setBudget, setValidBudget }) => {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()
        if (!budget || budget <= 0) {
            setMessage('Budget is not valid')
            return
        }
        setBudget(Number(budget))
        console.log(budget)
        setMessage('')
        setValidBudget(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handleBudget}>
                <div className='campo'>
                    <label htmlFor="">Define a Budget</label>
                    <input type="number"
                        className='nuevo-presupuesto'
                        placeholder='Add your Budget'
                        value={budget}
                        step="any"
                        onChange={(e) => {
                            setBudget('' + e.target.value)
                        }}
                        onFocus={(e) => e.target.value === '0' && (e.target.value = '')}

                    />

                </div>
                <input type="submit" value="Add" />
                {
                    message && <Message type="error" >{message}</Message>
                }
            </form>
        </div>
    )
}

export default NewBudget