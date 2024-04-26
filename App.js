
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './Comp/Header';
import Home from './Comp/Home';
import Footer from './Comp/Footer';
import Video from './Comp/Video';



function App() {
  return (
    <Router>
      <Header></Header>
     
       <Routes>
       
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Video' element={<Video/>}></Route>
              
       </Routes>
       <Footer></Footer>
       
       
      </Router>
   
  );
}

export default App;
