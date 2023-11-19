import Header from "./components/Header"
import Form from "./components/Form"
import Patients from "./components/Patients"
import { useState, useEffect } from "react"

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('patients')) ?? [])
  const [editingPatient, setEditingPatient] = useState({})
  const [patient, setPatient] = useState({
    name: "",
    owner: "",
    email: "",
    high: "",
    symptoms: "",
  })
  const deletePatient = (id) => {
    const deletedPatientList = list.filter(item => item.id !== id && item)
    setList(deletedPatientList)
  }

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(list));
  }, [list]);


  return (
    <>
      <Header />
      <article className="flex mt-14">
        <Form list={list} setList={setList} patient={patient} setPatient={setPatient} editingPatient={editingPatient} setEditingPatient={setEditingPatient} />
        <Patients list={list} setEditingPatient={setEditingPatient} deletePatient={deletePatient} />
      </article>
    </>
  )
}

export default App