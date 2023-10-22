import PropTypes from 'prop-types'
 const Card = ({appoinment}) =>{
    return(
        <div
          className="appoinment-Card"
        >
          <h1>Nombre mascota:{appoinment.name}</h1>
          <h2>Fecha cita:{appoinment.date}</h2>
          <h3>Edad:{appoinment.age}</h3>
          <h4>Nombre dueño:{appoinment.owner}</h4>
        </div>
    )
 }

 Card.propTypes={
    appoinment: PropTypes.shape({
      name:PropTypes.string.isRequired,
      age:PropTypes.string.isRequired,
      date:PropTypes.string.isRequired,
      owner:PropTypes.string.isRequired,
    })
  }
  
export default Card