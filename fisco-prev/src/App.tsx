

function App() {
  return (
    <main>

      {/* Inicio do Header*/}
      <section> {/* header -->COMPONENTE<-- */}

        {/* INICIO COMPONENTE BARRA VERDE */}
        <div>{/* faixa verde -->COMPONENTE<-- */}
          <div> {/* -->COMPONENTE<-- icone + div com horario de trabalho e dias  */}
            <img src="" alt="icone relogio" />
            <span>Segunda a Sexta 09:30-17:00</span>
          </div>
          <div> {/* -->COMPONENTE<-- icone + div com numero telefone */}
            <img src="" alt="icone telefone" />
            <span>Segunda a Sexta 09:30-17:00</span>
          </div>  
          <div>{/* box redes sociais header */}
            <img src="" alt="icone facebook" />
            <img src="" alt="icone instagram" />
            <img src="" alt="icone twitter" />
            <img src="" alt="icone whatsapp" />
          </div>
        </div>
        {/* FIM COMPONENTE BARRA VERDE */}


        {/* INICIO COMPONENTE NAVBAR */}
        <div>
          <img src="" alt="icone fiscoprev" />
          <nav>
            <ul>
              <li><a href="">link para Home</a></li>
              <li><a href="">link para Quem Somos</a></li>
              <li><a href="">link para Servicos</a></li>
              <li><a href="">link para Contato</a></li>
            </ul>
          </nav>
        </div>
        {/* FIM COMPONENTE NAVBAR */}


        {/* INICIO COMPONENTE LANDING */}
        <div> {/* essa div recebe uma img de background */}
          <h2>we have a solid background</h2>
          <h1>financial analisys and consulting</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti tempore fugiat voluptas quia id quo dolor eos quas reiciendis tenetur, voluptate maxime ex aliquid ut esse perferendis quisquam rem!</p>
        </div>
        {/* FIM COMPONENTE LANDING */}


        {/* INICIO COMPONENTE CALL TO ACTION */}
        <div> {/* div verde */}
          <div> {/* div com o subtitulo e content */}
            <h3>request a call backk right now?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <button>Contact Us</button>
        </div>
        {/* FIM COMPONENTE CALL TO ACTION */}


      </section>
      {/* fim do Header*/}

      {/* Inicio do Servicos*/}
      <section> {/* servicos */}
        <h2>financial services</h2>
        <p>ALIQUAM ID URNA IMPERDIET LIBERO MOLLIS HENDRERIT</p>

        {/* cardServico -->COMPONENTE<-- */}
        <div>
          <img src="" alt="icone" />
          <h2>titulo card servicos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur praesentium voluptatum voluptate. Quod cupiditate alias repellat aspernatur nisi! Quam voluptate error veritatis deleniti dolorum quasi quis, odit eligendi. Tempora?</p>
        </div>

        {/* informacoes com paralaxe -->COMPONENTE<-- */}
        <div>
          <h3>subtitule</h3>
          <h2>Our solutions for your
            <span>business growth</span>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique a sunt assumenda quam laboriosam magni sint modi alias optio iusto quaerat culpa ducimus, tenetur nisi eaque soluta placeat, saepe reiciendis?</p>
        </div>
      </section>
      {/* fim do Servicos*/}



      {/* Inicio do quem somos*/}
      <section> {/* quem somos */}
        <div>
          <img src="" alt="foto quem somos" />
          <h3>subtitle</h3>
          <h2>get to know about
            <span>our company</span>
          </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda aliquam rerum porro recusandae perferendis pariatur optio officia, dolore in, iure autem, at omnis? Officiis quibusdam reiciendis perspiciatis assumenda aperiam.</p>
        </div>

        <div>{/* missao, visao e valores */}
        
          <h2>gwhat they say
            <span>about us</span>
          </h2>
          <h3>testemonials from our greatest clients</h3>

          <div>{/* cardPrincipios -->COMPONENTE<-- */}
            <h2>Missao</h2>
            <h3>subtitulo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla molestias eius vero, quam ullam omnis repellendus tenetur illum necessitatibus, voluptatem at ad ab cupiditate perspiciatis amet, nisi doloremque unde!</p>
          </div>
        </div>
      </section>
      {/* fim do quem somos*/}

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
