import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import Toggable from './Toggable';

function CalendarComp ({setStartDate, setEndDate}) {
  const [dateValue, setDateValue] = useState(new Date());  
  
  useEffect(() => {
    if(dateValue.length > 1){
      console.log(dateValue[0].toDateString());
      setStartDate(dateValue[0].toDateString());
      setEndDate(dateValue[1].toDateString());
    }
    
  }, [dateValue]);

  return (
    <div style={{display: 'flex', width: '100%', flexDirection: 'column',  margin: 'auto'}}>
      {dateValue.length > 1 ? (
        <div className='container'>
          <div className='col1'>
            <h4>Inicio</h4>
            <p>{dateValue[0].toDateString()}</p>
          </div>        
          <div className='col2'>
            <h4>Término</h4>
            <p>{dateValue[1].toDateString()}</p>
          </div>
            
            
        </div>        
      ):(
        <div className='container'>
          <div>
            <h4>Fecha de Inicio</h4>            
          </div>        
          <div className='col2'>
            <h4>Fecha de término</h4>            
          </div>
            
            
        </div> 
      )}
      <div className='calContainer'>
        <Toggable>
          <Calendar onChange= {setDateValue} selectRange={true}/>    
        </Toggable>
      </div>
      
               
    </div>            
  );
}

export default CalendarComp;
