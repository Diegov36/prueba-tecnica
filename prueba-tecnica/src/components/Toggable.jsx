import { useState } from 'react';
/**
 * Toggles visible or invisible the children component, in this proyect it is used to hide/show the calendar
 * @param {} props 
 * @returns 
 */
const Toggable = (props) => {

  const [visible, setVisible] = useState();
  const hideWhenVisible = {display: visible ? 'none' : ''};
  const hideWhenNotVisible = {display: visible ? '' : 'none'};

  return(
    <>
      <div style={hideWhenNotVisible}>
        {props.children}
        <button onClick={() => setVisible(!visible)}>Cerrar Calendario</button>
      </div>

      <div style={hideWhenVisible}>
        <button onClick={() => setVisible(!visible)}>Mostrar calendario</button>
      </div>
    </>    
  );

};

export default Toggable;