import Patient from "./Patient"

const Patients = ({ list, setEditingPatient, deletePatient }) => {

    return (
        <section className="w-3/5">
            <h2 className="font-bold text-3xl text-center">Patient {''}
                <span className="text-indigo-600 ">List</span>
            </h2>
            <div className="ml-10 mr-20 mt-10 rounded-md shadow-xl">
                <div className="overflow-y-scroll h-screen">
                    {list.map((item) => (
                        <Patient key={item.id} item={item} setEditingPatient={setEditingPatient} deletePatient ={deletePatient} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Patients