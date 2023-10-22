import PropTypes from 'prop-types'
const Form = ({form, handleInputChange,submit}) =>{

    return(
        <form onSubmit={submit} className="form-card">
        <input 
          type="text" 
          name= "name" 
          placeholder="Nombre mascota" 
          value = {form.name}
          onChange={handleInputChange}
          />
        <input 
          type="number" 
          name= "age" 
          placeholder="Edad" 
          value = {form.age}
          onChange={handleInputChange}
        />
        <input 
          type="date" 
          name= "date" 
          placeholder="Fecha de la cita" 
          value = {form.date}
          onChange={handleInputChange}
        />
        <input 
          type="text" 
          name= "owner" 
          placeholder="Nombre del dueño" 
          value = {form.owner}
          onChange={handleInputChange}
        />
        <button 
          type="submit"
        >
          Agendar cita
        </button>
      </form>
    )
}

Form.propTypes={
  handleInputChange:PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    name:PropTypes.string.isRequired,
    age:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired,
  })
}

export default Form