
import './App.css';
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import Textform from './Components/Textform';
function App() {
  return (
  <>
  <Navbar/>
  <Alert alert="Welcome to my TextEditor app"/>
  <div className="container">
  <Textform/>
  </div>

  </>  
  );
}

export default App;
