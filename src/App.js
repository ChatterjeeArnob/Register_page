
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Count from './count';
import Form from './form';
import FormJS from './form1';
import Welcome from './Welcome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Form/>}/>
      <Route path='welcome' element ={<Welcome/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
