import { useLoaderData } from 'react-router-dom'
import Client from '../components/Client'

export const loader = () => {
    return [
        {
            id: 1,
            name: 'Juan',
            phone: 102013313,
            email: "juan@juan.com",
            company: 'Code Con Juan'
        },
        {
            id: 2,
            name: 'Karen',
            phone: 138198313,
            email: "karen@juan.com",
            company: 'Code Con Juan'
        },
        {
            id: 3,
            name: 'Josue',
            phone: 31983913,
            email: "josue@juan.com",
            company: 'Code Con Juan'
        },
        {
            id: 4,
            name: 'Miguel',
            phone: 319381983,
            email: "miguel@juan.com",
            company: 'Code Con Juan'
        },
        {
            id: 5,
            name: 'Pedro',
            phone: 1398198938,
            email: "pedro@juan.com",
            company: 'Code Con Juan'
        },
    ]
}

const Index = () => {

    const clients = useLoaderData()
    console.log(clients)

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
            <p className='mt-3'>Admin your clients</p>

            <table className='w-full bg-white shadow mt-5 table-auto text-left'>
                <thead className='bg-blue-800 text-white [&>th]:p-2 [&>th]:pl-8'>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <Client key={client.id} clients={client} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Index
