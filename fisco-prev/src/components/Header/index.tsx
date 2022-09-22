import CallToAction from './call-to-action';
import FixedBar from './fixedBar';
import Landing from './banner';
import NavBar from './navBar';

export default function Header() {
  return (    
    <section id='home' className='bg-blue'>
      <FixedBar />
      <NavBar />
      <Landing />
      <CallToAction />
    </section>  
  );
}
