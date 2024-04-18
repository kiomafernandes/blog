import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


// Componentes
// import Navbar from "./components/layout/Navbar";
// import Footer from './components/layout/Footer';

// Paginas
import Home from './components/pages/Home';
import PostView from './components/pages/PostView';
import Vision from './components/pages/Vision';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Publishers from './components/pages/Publishers';
import Colections from './components/pages/Colections';
import Contacts from './components/pages/Contacts';
import CreateArticle from './components/pages/CreateArticle';
import Article from './components/pages/Articles';


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/postview' element={<PostView />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/publishers' element={<Publishers />} />
          <Route path='/colection' element={<Colections />} />
          <Route path='/contacts' element= {<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/createarticle' element={<CreateArticle />} />
          <Route path='/articles' element={<Article />} />
        </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
