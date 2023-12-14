import Switch from 'react-switch';

/**
 * This function renders a switch component with the text that represents it
 * @param {} param0 
 * @returns 
 */
function CheckComp({handleCheck, check, text}){

  return(
    <label className='switchItem'>
      <span >{text}</span>
      <Switch onChange={handleCheck} checked={check}/>
    </label>
  );
}

export default CheckComp;