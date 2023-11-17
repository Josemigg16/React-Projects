import { useEffect, useState } from 'react'
import closeModal from '../img/cerrar.svg'
import Message from './Message'

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense, saveEditedExpense, editingExpense, setEditingExpense }) => {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        setName(editingExpense.name)
        setAmount(editingExpense.amount)
        setCategory(editingExpense.category)
    }, [editingExpense.id])

    const handleCloseModal = () => {
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false)

        }, 150);
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([name, amount, category].includes('')) {
            setErrorMessage('Please fill all fields')
            return
        }
        setErrorMessage('')
        if (editingExpense.id) {
            saveEditedExpense({ name, amount, category })
        } else {
            saveExpense({ name, amount, category })
        }
        handleCloseModal()
    }



    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={closeModal} alt="Close Modal Icon"
                    onClick={handleCloseModal}
                />
            </div>

            <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
                onSubmit={handleSubmit}>
                <legend>New Expense</legend>
                {errorMessage && (
                    <Message type="error">{errorMessage}</Message>
                )
                }
                <div className='campo'>
                    <label htmlFor="name">Expense</label>
                    <input type="text" id='name'
                        placeholder='Enter expense name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id='amount'
                        placeholder='Enter expense amount, ej. 300'
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}

                    />
                </div>
                <div className='campo'>
                    <label htmlFor="category">Category</label>
                    <select id="categoty"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="saving"> Ahorro </option>
                        <option value="food"> Food </option>
                        <option value="home"> Home </option>
                        <option value="miscelaneus"> Miscelaneus </option>
                        <option value="leisure"> Ocio </option>
                        <option value="health"> Health </option>
                        <option value="suscriptions"> Suscriptions </option>

                    </select>
                </div>

                <input type="submit" value="Add Expense"

                />

            </form>
        </div>
    )
}

export default Modal