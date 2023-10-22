import PropTypes from 'prop-types'
const Form = ({form, handleInputChange,submit,errorName,errorAge,errorDate,errorOwner,errorGender}) =>{
    return(
        <form onSubmit={submit} className="form-card">
        <input 
          type="text" 
          name= "name" 
          placeholder="Nombre mascota" 
          value = {form.name}
          onChange={handleInputChange}
          />
        {errorName 
          && 
          <p className="error">
            {errorName}
          </p>
        }
        <input 
          type="number" 
          name= "age" 
          placeholder="Edad" 
          value = {form.age}
          onChange={handleInputChange}
        />
        {errorAge
          && 
          <p className="error">
            {errorAge}
          </p>
        }
        <input 
          type="text" 
          name= "gender" 
          placeholder="Genero de la mascota" 
          value = {form.gender}
          onChange={handleInputChange}
        />
        {errorGender
          && 
          <p className="error">
            {errorGender}
          </p>
        }
        {/* <select 
          name="gender"
          className="select"
          value = {form.gender}
        >
          <option value={form.gender}>Macho</option>
          <option value="Hembra">Hembra</option>
        </select> */}
        <input 
          type="date" 
          name= "date" 
          placeholder="Fecha de la cita" 
          value = {form.date}
          onChange={handleInputChange}
        />
        {errorDate
          && 
          <p className="error">
            {errorDate}
          </p>
        }
        <input 
          type="text" 
          name= "owner" 
          placeholder="Nombre del dueño" 
          value = {form.owner}
          onChange={handleInputChange}
        />
        {errorOwner
          && 
          <p className="error">
            {errorOwner}
          </p>
        }
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
    gender:PropTypes.string.isRequired,
  }),
  errorName :PropTypes.string.isRequired,
  errorAge :PropTypes.string.isRequired,
  errorOwner :PropTypes.string.isRequired,
  errorDate :PropTypes.string.isRequired,
  errorGender :PropTypes.string.isRequired,
}

export default Form