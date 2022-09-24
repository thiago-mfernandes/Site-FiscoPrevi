import { ICardServico } from 'types';

export default function CardServico({icon, title, content}:ICardServico) {
  return (
    <div 
      className='w-full h-full bg-cardServicosBg p-7 mb-8 md:w-[47.5%]'
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
