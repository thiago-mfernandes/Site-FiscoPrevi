import { MdOutlineMenu } from 'react-icons/md';

export interface MenuHamburguer {
  menuMobileState: boolean,
  setMenuMobileState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuHamburguer({menuMobileState, setMenuMobileState}:MenuHamburguer) {

  return (
    <div 
      className='w-1/2 flex justify-end pt-4 pr-4 pb-4'
      onClick={() => setMenuMobileState(!menuMobileState)}
    >
      <MdOutlineMenu className='text-white text-4xl'/>
    </div>
  );
}
