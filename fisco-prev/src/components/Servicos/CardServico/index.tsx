import { ICardServico } from 'types';

export default function CardServico({icon, title, content}:ICardServico) {
  return (
    <div 
      //alinhamento pelo maior
      className='w-full h-full lg:h-[40rem] bg-cardServicosBg p-7 mb-8 md:w-[47.5%] lg:w-[24%]'
      title="servico"
    >
      <img 
        src={icon} 
        alt={title} 
      />
      <div className='mt-4'>
        <h4 className='titleh4 mb-4'>{title}</h4>
        <p className='contentCard'>{content}</p>
      </div>
    </div>
  );
}
