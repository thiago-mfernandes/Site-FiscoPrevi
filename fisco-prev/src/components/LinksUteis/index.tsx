import AnchorLink from 'react-anchor-link-smooth-scroll';

export function LinksUteis() {
  return (
    <section id='linksUteis' className='flex flex-col justify-center px-6 md:px-20 md:py-10 bg-[#00007e]'>
      <h2 className='titleh2 text-white text-center mt-4 mb-10 md:mb-20'>Links Úteis</h2>
      <div className='flex flex-col md:flex-row flex-wrap justify-between mb-4 lg:justify-between md:w-1/2 md:mx-auto'>        
        
        <a 
          className="text-white text-center mb-2 hover:text-cinzaSubTitle"
          href="https://www.bcb.gov.br/controleinflacao/taxaselic" 
          target="_blank" 
          rel="noreferrer">Taxa Selic
        </a>
        <a 
          className="text-white text-center mb-2 hover:text-cinzaSubTitle"
          href="https://www.bcb.gov.br/estabilidadefinanceira/fechamentodolar" 
          target="_blank" 
          rel="noreferrer">Cotação do Dólar
        </a>
        <a 
          className="text-white text-center mb-2 hover:text-cinzaSubTitle"
          href="http://www.receita.fazenda.gov.br/Aplicacoes/ATCTA/CPF/Fisica.htm" 
          target="_blank" 
          rel="noreferrer">Consulta CPF
        </a>
          
      </div> 
    </section>
  );
}
