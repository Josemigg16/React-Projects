const Input = ({ itsFor, inputType, placeholder, patient, setPatient }) => {
    const handleInput = (e) => {
        if (itsFor === 'name') setPatient((prev) => ({ ...prev, name: e.target.value }))
        if (itsFor === 'owner') setPatient((prev) => ({ ...prev, owner: e.target.value }))
        if (itsFor === 'email') setPatient((prev) => ({ ...prev, email: e.target.value }))
        if (itsFor === 'high') setPatient((prev) => ({ ...prev, high: e.target.value }))
        if (itsFor === 'symptoms') setPatient((prev) => ({ ...prev, symptoms: e.target.value }))
    }

    return (
        <div className="pb-5">
            <label className="block uppercase font-bold text-md"
                htmlFor={itsFor}>{itsFor}</label>
            {inputType !== 'textarea'
                ?
                <input className="outline-indigo-600 border-2 w-full text-md p-2 rounded-md"
                    type={inputType} placeholder={placeholder} id={itsFor} value={patient}
                    onChange={handleInput}
                />
                :
                <textarea className="outline-indigo-600 border-gray-200 border-2 w-full text-md p-2 rounded-md" placeholder={placeholder} onChange={handleInput} id={itsFor} value={patient}
                >
                </textarea>
            }
        </div>
    )
}

export default Input