import React from 'react'

const Patient = ({ item, setEditingPatient, deletePatient }) => {

    return (
        <div className='py-5 bg-white mb-5 rounded-md'>

            <p className='font-bold uppercase px-5 py-2'>
                Name: {""}
                <span className='font-normal normal-case'>
                    {item.name}
                </span>
            </p>
            <p className='font-bold uppercase px-5 py-2'>
                Owner: {""}
                <span className='font-normal normal-case'>
                    {item.owner}
                </span>
            </p>
            <p className='font-bold uppercase px-5 py-2'>
                Owner Email: {""}
                <span className='font-normal normal-case'>
                    {item.email}
                </span>
            </p>
            <p className='font-bold uppercase px-5 py-2'>
                High Date: {""}
                <span className='font-normal normal-case'>
                    {item.high}
                </span>
            </p>
            <p className='font-bold uppercase px-5 py-2'>
                Symptoms: {""}
                <span className='font-normal normal-case'>
                    {item.symptoms}
                </span>
            </p>
            <div className='flex justify-between'>
                <button className='bg-indigo-600 px-16 py-2 uppercase font-bold text-center text-white mt-8 hover:bg-indigo-700 rounded-md mx-6'
                    type='button'
                    onClick={() => setEditingPatient(item)}
                >
                    Edit
                </button>
                <button className='bg-red-600 px-16 py-2 uppercase font-bold text-center text-white ml-6 mt-8 hover:bg-red-700 rounded-md mx-6'
                    type='button'
                    onClick={() => deletePatient(item.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Patient