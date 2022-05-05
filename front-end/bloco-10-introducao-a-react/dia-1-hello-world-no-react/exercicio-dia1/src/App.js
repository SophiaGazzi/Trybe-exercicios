import logo from './logo.svg';
import './App.css';

const tarefas = ['acordar', 'jogar', 'tomar café','Almoçar','Tomar banho','Jantar'];


function App() {
  const task = (value) => {
    return (
      <li key={value}> {value} </li>
    );
  }
  
  return (
    <div>{task('Lista de Tarefas:')}
     {tarefas.map((elemento) => task(elemento))}
     </div>
    
  );
}

export default App;
