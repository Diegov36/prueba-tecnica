import CalendarComp from './CalendarComp';
import CheckComp from './CheckComp';
import ActionComp from './ActionComp';
import { useState } from 'react';
import actionService from './../../services';

/**
 * This function renders the form modal in order to create a new action
 * @returns 
 */
function ActionForm() {

  //State for every field
  const [responsibleCheck, setResponsibleCheck] = useState(false);
  const [objetiveCheck, setObjetiveCheck] = useState(false);
  const [markCheck, setMarkCheck] = useState(false);
  const [legalCheck, setLegalCheck] = useState(false);
  const [actionName, setActionName] = useState('');
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const [endDate, setEndDate] = useState(new Date().toDateString());
  const [actionType, setActionType] = useState('Acción social');

  //Arrow functions which saves the new states
  const handleCheckResponsible = () => {
    setResponsibleCheck(!responsibleCheck);
  };

  const handleCheckObjetive = () => {
    setObjetiveCheck(!objetiveCheck);
  };

  const handleCheckMark = () => {
    setMarkCheck(!markCheck);
  };

  const handleCheckLegal = () => {
    setLegalCheck(!legalCheck);
  };

  const handleChangeInput = (event) => {    
    setActionName(event.target.value);
  };

  //Prints the new action object
  const print = () => {
    console.log(actionName);
    console.log(startDate);
    console.log(endDate);
    console.log(responsibleCheck);
    console.log(markCheck);
    console.log(legalCheck);
    console.log(objetiveCheck);
    console.log(actionType);
    closeModal();    
  };

  //Creates a new action object with the actual states
  const createNewAction = () => {
    /*
    Doesn't work
    if(actionType === '' || actionType === 'Seleccione un tipo'){
      setActionType('Acción ambiental');
    } */  
    const action = {
      name: actionName,
      startDate: startDate,
      endDate: endDate,
      responsible: responsibleCheck,
      mark:markCheck,
      legal: legalCheck,
      objetive: objetiveCheck,
      type: actionType
    };

    console.log(JSON.stringify(action));
    actionService.addAction(action);
    closeModal();
    location.reload();
  };


  const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
  };

  return(
    
    <div className='actionForm' id="modal">
      <h3>Nombre de la acción</h3>
      <input onChange={handleChangeInput}/>
      <CalendarComp setStartDate={setStartDate} setEndDate={setEndDate}/>
      <h4>Opciones</h4>
      <div className='switchContainer'>        
        <CheckComp text="Tiene responsable" handleCheck={handleCheckResponsible} check={responsibleCheck}/>
        <CheckComp text="Tiene un objetivo" handleCheck={handleCheckObjetive} check={objetiveCheck}/>
        <CheckComp text="Requiere cálculo de huella" handleCheck={handleCheckMark} check={markCheck}/>
        <CheckComp text="Es una obligación legal" handleCheck={handleCheckLegal} check={legalCheck}/>
      </div>
      <ActionComp setAction={setActionType}/>  
      <div >
        <p></p>
        <button onClick={createNewAction}>Crear</button>
        <button style={{marginLeft: '10px'}}onClick={closeModal}>Volver</button>
      </div>
    </div>
  );
}

export default ActionForm;