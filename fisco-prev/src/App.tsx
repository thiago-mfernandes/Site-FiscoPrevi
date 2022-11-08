import Header from 'components/Header';
import './index.css';
import Servicos from './components/Servicos';
import Paralaxe from 'components/Paralaxe';
import QuemSomos from 'components/QuemSomos';
import Missao from 'components/Missao';
import Contato from 'components/Contato';
import Footer from 'components/Footer';
import { LinksUteis } from 'components/LinksUteis';


function App() {
  return (
    <main className='font-sans'>
      <Header />
      <Servicos /> 
      <Paralaxe /> 
      <QuemSomos />   
      <Missao />
      <LinksUteis />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
