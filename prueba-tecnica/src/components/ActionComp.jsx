/**
 * This function renders the select component from HTML
 * @param {setAction} it is the useState setter function of action
 * @returns 
 */
function ActionComp({setAction}){

  const handleChangeType = (event) => {
    setAction(event.target.value);
  };

  return(
    <div className="actionContainer" >
      <span>Tipo de acción</span>
      <select name='actionType' onChange={handleChangeType}>
        <option selected>
          Seleccione un tipo
        </option>
        <option>
          Acción ambiental
        </option>
        <option>
            Acción social
        </option>
        <option>
            Acción gubernamental
        </option>
        <option>
            Acción económica
        </option>
      </select>
    </div>
    
  );
}

export default ActionComp;