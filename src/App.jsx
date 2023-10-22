import { useState } from "react"
import "./styles.scss"
import Form from "./Components/Form"
import Card from "./Components/Card"

function App() {
  const [appoinments, setAppoinments] = useState([]);
  const [form, setForm] = useState(
    {
      name:"",
      age:"",
      owner:"",
      date:"",
    }
  )

  const handleInputChange = (e) =>{
    e.preventDefault();
    setForm({
      ...form,[e.target.name]: e.target.value,
    })
  }

  const submit = (e)=>{
    e.preventDefault();
    setAppoinments([...appoinments,form])
    setForm({
      name:"",
      age:"",
      owner:"",
      date:"",
    })
  }
  return (
    <div className="app">
      <Form 
        form={form}
        handleInputChange={handleInputChange}
        submit={submit}
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
