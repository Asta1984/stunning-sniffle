const Footer = () => {

    
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/api/placeholder/100/100" alt="Logo" className="h-8 mr-4" />
          <span>&copy; 2023 MoonEx. All rights reserved.</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/api/placeholder/24/24" alt="Email" className="h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/api/placeholder/24/24" alt="Reddit" className="h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src="/api/placeholder/24/24" alt="Twitter" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;