import React from 'react'

const Client = ({ clients }) => {

    const { name, phone, email, company } = clients

    return (
        <>
            <tr className='[&>td]:p-6'>
                <td className=''>
                    <p className='text-2xl text-gray-800'>{name}</p>
                    <p className=''>{company}</p>
                </td>
                <td>
                    <p className='text-gray-600'>
                        <span className='text-gray-800 uppercase font-bold'>
                            Email: {""}
                        </span>{email}</p>
                    <p className='text-gray-600'>
                        <span className='text-gray-800 uppercase font-bold'>
                            Phone: {""}
                        </span>{phone}</p>
                </td>
                <td className='flex gap-8'>
                    <button className='text-blue-600 hover:text-blue-700 uppercase font-bold'>
                        Edit
                    </button>
                    <button className='text-red-600 hover:text-red-700 uppercase font-bold'>
                        Delete
                    </button>
                </td>
            </tr >
        </>
    )
}

export default Client
