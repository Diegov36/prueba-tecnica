
/**
 * Renders an action
 * @param {action} represents the actual action rendered
 * @returns 
 */
function Actions({action}){
  return(
    <div>
      <h3>Nombre de la acción: {action.name}</h3>
      <p>Fecha de Inicio: {action.startDate}</p>
      <p>Fecha de Termino: {action.endDate}</p>
      <p>Tiene responsable: {action.responsible === true ? 'Si' : 'No'}</p>
      <p>Requiere cálculo de huella: {action.mark  === true ? 'Si' : 'No'}</p>
      <p>Tiene un objetivo: {action.objetive  === true ? 'Si' : 'No'}</p>
      <p>Es una obligación legal: {action.legal  === true ? 'Si' : 'No'}</p>
      <p>Tipo de acción: {action.type}</p>
    </div>
  );
}

export default Actions;