
import { Button } from '@headlessui/react';
import Link from 'next/link';
import Header from './_components/Header';
import Footer from './_components/footer';

export default function NotFound() {
  return (
    <div>
        <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <Button className="text-blue-500 hover:underline">Go back to Home</Button>
        </Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
