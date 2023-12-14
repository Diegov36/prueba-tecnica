import { useEffect,useState } from 'react';
import './App.css';
import ActionForm from './components/ActionForm';
import Toggable from './components/Toggable';
import actionService from '../services';
import Actions from './components/Actions';

/**
 * Starting function of the app
 * @returns 
 */
function App() {
  const [visible, setVisible] = useState(false);
  const [savedActions, setSavedActions] = useState([]); //Every action saved in the database
  const openModal = () => {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';                
  };
  
  //UseEffect which loads the actions from the database (JSON-server)
  useEffect(() => {
    const actions = actionService.getAll();
    actions.then(data => setSavedActions(data));
  }, []);

  const viewActions = () => {
    setVisible(!visible);
  };

  return (
    
    <main id='main'>
      <h1>Creador de Acciones</h1>  
      <button onClick={openModal}>Crear una nueva acción</button>
      <button style={{marginLeft: '10px'}}onClick={viewActions}>Ver acciones creadas</button>
      
      <ActionForm/>      
      {visible && savedActions.map((action, index) => (
        <Actions key={index} action={action}/>
      ))}

    </main>
  );
}

export default App;
