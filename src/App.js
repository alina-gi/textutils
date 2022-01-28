import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';

// const select = document.getElementById("upper");
// const myBox = document.getElementById("myBox");
//     select.addEventListener('click', function(){
//       myBox.toupperCase();
//     });



function App() {
  return (
    <>
       <Navbar  title ="TextUtils"/>  
       <div className="container">
       <Form heading ="Enter The Text Below For Analyze."/> 
       <About/>
       </div>
    </>
  );
}

export default App;
