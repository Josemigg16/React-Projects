import { Form, useNavigate, useActionData } from 'react-router-dom'
import MyForm from '../components/MyForm'

export const action = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')
    const errors = []
    const regex = new RegExp("([!#-'+/-9=?AZ^-~-]+(\.[!#-'+/-9=?AZ^-~-]+) |\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=? AZ^-~-]+(\.[!#-'+/-9=?AZ^-~-]+)|\[[\t -Z^-~]*])")

    if (Object.values(data).includes('')) {
        errors.push('All fields are required')
    } else {
        if (!regex.test(email)) errors.push(regex.test(email))
    }


    return errors
}

const NewClient = () => {

    const navigate = useNavigate()
    const action = useActionData()
    console.log(action)

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
                >
                    <MyForm />
                    <input
                        type="submit"
                        className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-900 cursor-pointer'
                        value="Add New Client"
                    />
                </Form>
            </div>
        </div>
    )
}

export default NewClient