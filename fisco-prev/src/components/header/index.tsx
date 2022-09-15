import CallToAction from './call-to-action';
import FixedBar from './fixedBar';
import Landing from './banner';
import NavBar from './navBar';

export default function Header() {
  return (    
    <section className='bg-blue'> {/* header -->COMPONENTE<-- teste*/}
      <FixedBar />
      <NavBar />
      <Landing />
      <CallToAction />
    </section>  
  );
}
