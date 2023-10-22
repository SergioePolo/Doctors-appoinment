import { useState } from "react"
import "./styles.scss"
import Form from "./Components/Form"
import Card from "./Components/Card"

function App() {
  const [appoinments, setAppoinments] = useState([]);
  const [Errorname, setErrorname] = useState('')
  const [Errorage, setErrorage] = useState('')
  const [Errordate, setErrordate] = useState('')
  const [Errorowner, setErrorowner] = useState('')
  const [Errorgender, setErrorgender] = useState('')
  const [form, setForm] = useState(
    {
      name:"",
      age:"",
      owner:"",
      date:"",
      gender:"",
    }
  )

  const handleInputChange = (e) =>{
    e.preventDefault();
    setForm({
      ...form,[e.target.name]: e.target.value,
    })
  }

  const createAppoinment =() =>{
    setAppoinments([...appoinments,form])
    setForm({
      name:"",
      age:"",
      owner:"",
      date:"",
      gender:"",
    })
  }

  const submit = (e)=>{
    e.preventDefault();
    const {name,age,date,owner,gender} = form
    const today = new Date(Date.now())
    const  tempDate = new Date(date) 
    if (!name){
      setErrorname("Escriba el nombre de su mascota")
      return
    }
    else if(!age || age<1){
      setErrorage("Escriba la edad de su mascota")
    }
    else if(!gender){
      setErrorgender("Escriba el genero de la mascota")
    }
    else if(!date ||tempDate.toLocaleDateString()<today.toLocaleDateString()){
      setErrordate("Seleccione una fecha valida para su cita")
    }
    else if(!owner){
      setErrorowner("Escriba el nombre del dueño")
    }
    
    else{
      createAppoinment()
    }
  }
  console.log(form)
  return (
    <div className="app">
      <Form 
        form={form}
        handleInputChange={handleInputChange}
        submit={submit}
        errorName = {Errorname}
        errorAge = {Errorage}
        errorDate = {Errordate}
        ErrorOwner = {Errorowner}
        ErrorGender = {Errorgender}
      />
      {appoinments.map((appoinment)=>
        <Card 
          key={`
            ${appoinment.name}
            ${appoinment.date}
          `}
          appoinment={appoinment}
        />
      )}
    </div>
  )
}

export default App
