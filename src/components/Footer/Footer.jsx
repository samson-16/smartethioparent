import { FaCopyright, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0052B4] text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end">
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Support Center</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Community</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">About</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Contact</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2"><FaCopyright /></div>
          <div>2024, SmartEthioParent</div>
          <div className='flex ml-auto'><a href='#'><FaFacebook className='mr-5 hover:text-gray-400'/></a> <a href="#"><FaInstagram className='mr-5 hover:text-gray-400'/></a> <a href="#"><FaTiktok className='mr-5 hover:text-gray-400'/></a> <a href="#"><FaTwitter className='mr-5 hover:text-gray-400'/></a> <a href="#"><FaYoutube className='mr-5 hover:text-gray-400'/></a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;