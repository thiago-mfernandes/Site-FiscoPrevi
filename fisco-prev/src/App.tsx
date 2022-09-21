import Header from 'components/Header';
import './index.css';
import Servicos from './components/servicos';
import Paralaxe from 'components/Paralaxe';
import QuemSomos from 'components/QuemSomos';
import Missao from 'components/Missao';


function App() {
  return (
    <main className='font-sans'>

      <Header />
      <Servicos /> 
      <Paralaxe /> 
      <QuemSomos />   
      <Missao />

      {/* Inicio do contato*/}
      <section>
        <h2>request a 
          <span>callback</span>
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <form action="">{/* form -->COMPONENTE<-- */}
          <input type="text" />
          <input type="email" />
          <input type="text" />
          <textarea name="" id="" cols={30} rows={10}></textarea>
          <input type="submit" value='enviar'/>
        </form>
      </section>
      {/* fim do contato*/}

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
