import { BsFillClockFill, BsTelephoneFill, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import socialMediaData from 'data/socialMedia.json';

export default function FixedBar() {

  function handleIcon(iconName:string) {
    switch (iconName) {
    case 'facebook':
      return <BsFacebook className='text-branco text-xl'/>;
    case 'instagram':
      return <BsInstagram className='text-branco text-xl'/>;
    case 'whatsapp':
      return <BsWhatsapp className='text-branco text-xl'/>;
    default:
      return <BiLoader className='text-branco text-xl'/>;
    }
  }

  return (
    <div className='hidden lg:flex lg:bg-azulPrimario h-12 w-full leading-10 px-16 flex-row justify-between'>
      <div className='flex flex-row items-center border-solid border-brancoBorda border-x'>
        <div className='h-full flex flex-row items-center mr-4'> 
          <BsFillClockFill className='text-azulTerciario text-sm mx-2'/>
          <p className='text-branco'>Segunda a Sexta 07:30-17:00</p>
        </div>
        <div className='h-full flex flex-row items-center border-solid border-l  border-brancoBorda'> 
          <BsTelephoneFill className='text-azulTerciario text-sm mx-2'/>
          <p className='text-branco mr-4'>(019) 3434-5600</p>
        </div>
      </div>

      <div className='flex w-1/5'>
        <ul className='flex flex-row items-center justify-between w-full'>
          {socialMediaData.map((item, index) => (
            <li 
              key={index} 
              className='w-1/3 h-full flex items-center justify-center border-r border-brancoBorda first-of-type:border-l first-of-type:border-brancoBorda hover:bg-azulSecundario hover:cursor-pointer transition-all duration-300 ease-in-out' 
            >
              <a 
                href={item.href} target='_blank' rel='noreferrer'>
                {handleIcon(item.name)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

