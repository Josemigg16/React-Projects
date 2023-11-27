import { Form, useNavigate, useActionData } from 'react-router-dom'
import MyForm from '../components/MyForm'

export const action = () =>{
    return 'hello'
}

const NewClient = () => {

    const navigate = useNavigate()
    const action = useActionData()

    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
            <p className='mt-3'>Create a new client</p>

            <div className='flex justify-end'>
                <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
                    onClick={() => navigate('/')}>
                    Return
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
                <Form
                    method='post'
                    action='/clients/new'
                >
                    <MyForm />
                    <input
                        type="submit"
                        className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
                        value="Add New Client"
                    />
                </Form>
            </div>
        </div>
    )
}

    export default NewClient
