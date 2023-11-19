import { useState, useEffect } from "react"
import Input from "./Input"
import ErrorMessage from "./errorMessage"
const Form = ({ list, setList, patient, setPatient, editingPatient, setEditingPatient }) => {

    const [errorMessage, setErrorMessage] = useState({
        error: false,
        text: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const values = Object.values(patient)

        if (values.includes("")) return setErrorMessage({
            error: true,
            text: 'All fields are required'
        })

        if (editingPatient.id) {
            //Editing
            const editedList = list.map(item => item.id === editingPatient.id ? patient : item)
            setList(editedList)

        }
        else {
            setList(() => [...list, { ...patient, id: crypto.randomUUID() }])
        }


        resetPatient()
    }
    const resetPatient = () => {
        setErrorMessage(false)
        setPatient({
            name: "",
            owner: "",
            email: "",
            high: "",
            symptoms: "",
            id: crypto.randomUUID()
        })
        setEditingPatient({})
    }
    useEffect(() => {
        if (Object.keys(editingPatient) < 1) return
        setPatient(editingPatient)
    }, [editingPatient])

    return (
        <section className="w-2/5">
            <h2 className="font-bold text-3xl text-center">Add Patients and {""}
                <span className="text-indigo-600 ">Admin it</span>
            </h2>
            <form onSubmit={handleSubmit}
                className="ml-20 mr-10 mt-10 bg-white rounded-md shadow-xl p-10 relative">

                {errorMessage.error && (<ErrorMessage text={errorMessage.text} />)}

                <Input itsFor={'name'} inputType={'text'} placeholder={'Pet Name'}
                    patient={patient.name} setPatient={setPatient}
                />
                <Input itsFor={'owner'} inputType={'text'} placeholder={'Owner Name'}
                    patient={patient.owner} setPatient={setPatient}
                />
                <Input itsFor={'email'} inputType={'text'} placeholder={'Owner Email'}
                    patient={patient.email} setPatient={setPatient}
                />
                <Input itsFor={'high'} inputType={'date'} placeholder={'High Date'}
                    patient={patient.high} setPatient={setPatient}
                />
                <Input itsFor={'symptoms'} inputType={'textarea'} placeholder={'Pet Symptoms'}
                    patient={patient.symptoms} setPatient={setPatient}
                />
                <input type="submit" value={editingPatient.id ? 'Edit' : 'Add Patient'}
                    className="bg-indigo-600 text-white font-bold text-center w-full rounded-3xl py-2 my-4 cursor-pointer hover:bg-indigo-700"
                />

                {editingPatient.id && (
                    <input onClick={resetPatient} type="button" value="Exit"
                        className="bg-indigo-600 text-white font-bold text-center w-full rounded-3xl py-2 mb-4 cursor-pointer hover:bg-indigo-700"
                    />
                )
                }
            </form>
        </section>
    )
}

export default Form