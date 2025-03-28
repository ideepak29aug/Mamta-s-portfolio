import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact1 from "./components/Contact1";

// import Contact from "./components/Contact";
// import {useEffect} from 'react'

// import FormPractice from "./components/FormPractice"



function App() {

// Case 1 : run on every render
// useEffect(() => {
//   alert('hey there i will run on every render')
// })

// Case 2 : run on only first render
  // useEffect(() => {
  //   alert('Welcome to my Portfolio')
  // }, [])

  // Case 3 : run only when certain values are changed
  // useEffect(() => {
  //   alert('color changed')
  // }, [color])
  
 
  return (
    <div className="background z-0">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact1 />
    </div>
    // <div>
    //   <FormPractice />
    // </div>
  );
}

export default App;
