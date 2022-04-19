import './App.css';
import Navegar from './Navegar';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';


function App() {
  
  return (
    <div class="tela-inteira">
        
        <Header/>
        <main>
          <Navegar/>
          <Container/>
            
        </main>
        <Footer/>
    </div>
  )
}

export default App;
