import Header from 'components/Header';
import './index.css';
import Servicos from './components/Servicos';
import Paralaxe from 'components/Paralaxe';
import QuemSomos from 'components/QuemSomos';
import Missao from 'components/Missao';
import Contato from 'components/Contato';


function App() {
  return (
    <main className='font-sans'>
      <Header />
      <Servicos /> 
      <Paralaxe /> 
      <QuemSomos />   
      <Missao />
      <Contato />
      

      {/* Inicio do footer*/}
      <section> {/* footer */}
        <div>  
          <h2>FiscoPrev</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae alias omnis praesentium pariatur reiciendis atque eligendi eaque. Molestias at soluta ipsam sed quasi? In nisi cupiditate quibusdam at autem enim.</p>

          <div>{/* redes sociais */}
            <div> {/* icone rede social -->COMPONENTE<-- */}
              <img src="" alt="icone rede social" />
            </div>
          </div>
        </div>

        <div>
          <a href="">link para..</a>
          <a href="">link para..</a>
          <a href="">link para..</a>
          <a href="">link para..</a>
        </div>

        <form>{/* form -->COMPONENTE<-- */}
          <input type="text" />
          <input type="email" />
          <input type="text" />
          <textarea name="" id="" cols={30} rows={10}></textarea>
          <input type="submit" value='enviar'/>
        </form>
      </section>
      {/* fim do footer*/}

    </main>
  );
}

export default App;
