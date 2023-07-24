import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <div>
        <footer className="footer footer-center p-10 bg-orange-500 text-orange-50">
<div className='gap-8'>
<img className='w-1/2' src={logo} alt="" />
  <p className='font-bold'>Copyright © 2023 - All right reserved</p>
</div> 

</footer>
      </div>
    );
};

export default Footer;