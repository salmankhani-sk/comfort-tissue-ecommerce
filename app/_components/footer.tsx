import { Button } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and About */}
          <div className="mb-8 md:mb-0"><div className="flex lg:flex-1 ">
          <Link href="/" className="-m-1.5 p-1.5 shadow-lg rounded-3xl ">
            
            <Image alt="" src="/logo5.jpg"  width={80} height={80} className='rounded-full'/>
            <h1 className='items-center flex justify-center text-lg text-blue-300 font-extrabold shadow-slate-500 shadow-2xl'>Comfort</h1>
          </Link>
        </div>
            <p className="mt-2 max-w-xs">
              Your trusted partner in providing the highest quality tissue paper products, ensuring softness and strength for all your needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <Link href="/aboutus">
              <Button className="hover:text-blue-500 transition">About Us</Button>
            </Link>
            <Link href="/products">
              <Button className="hover:text-blue-500 transition">Products</Button>
            </Link>
            <Link href="/contact">
              <Button className="hover:text-blue-500 transition">Contact</Button>
            </Link>
            <Link href="/privacy-policy">
              <Button className="hover:text-blue-500 transition">Privacy Policy</Button>
            </Link>
            <Link href="/terms">
              <Button className="hover:text-blue-500 transition">Terms of Service</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100015114820222" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://github.com/salmankhani-sk" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://instagram.com/salmankhani_sk" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/salman-khan-84924b24a" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-8 md:mt-0 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Salman Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
