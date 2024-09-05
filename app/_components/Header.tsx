'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingCart } from 'lucide-react';
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  InboxIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

{/* *************** Products ***************** */}
const products = [
  { 
    name: 'Toilet Tissue Paper', 
    description: 'High-quality tissue paper for everyday use', 
    href: '/toilettissue', 
    icon: ChartPieIcon 
  },
  { 
    name: 'Luxury Scented Tissue Paper', 
    description: 'Tissue paper with a pleasant fragrance for a refreshing experience', 
    href: 'luxurytissues', 
    icon: InboxIcon 
  },
  { 
    name: 'Eco-Friendly Tissue Paper', 
    description: 'Sustainable and biodegradable tissue paper for eco-conscious customers', 
    href: '/', 
    icon: ArrowPathIcon 
  },
];

{/* ************** Calls to Action ****************** */}
const callsToAction = [
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]

{/* ************** Header Start ****************** */}
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 ">
          <Link href="/" className="-m-1.5 p-1.5 shadow-lg rounded-3xl ">
            
            <Image alt="" src="/logo5.jpg"  width={120} height={100} className='rounded-full'/>
            <h1 className='items-center flex justify-center text-xl text-blue-300 font-extrabold shadow-slate-500 shadow-2xl'>Comfort</h1>
          </Link>
        </div>
        {/* ******************************** */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* ******************************** */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
    {({ open }) => (
      <>
        <PopoverButton
          className={`inline-flex items-center px-3 py-1.5 border ${
            open ? 'border-blue-600' : 'border-transparent'
          } rounded-md text-black font-semibold text-xl shadow-sm ring-1 ring-gray-900/10 hover:bg-gray-100 transition-all duration-300 ease-in-out`}
        >
          Product
          <ChevronDownIcon
            aria-hidden="true"
            className="ml-1 h-5 w-5 flex-none text-gray-400"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 p-4 transition-all transform-gpu data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="p-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <Link
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              >
                <item.icon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </>
    )}
  </Popover>
          <Link href="./seling" className="text-lg font-semibold leading-6 text-gray-900  active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:font-bold">
            What We Offer
          </Link>
          <Link href="/products" className="text-lg font-semibold leading-6 text-gray-900  active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:font-bold">
            Marketplace
          </Link>
          <Link href="/aboutus" className="text-lg font-semibold leading-6 text-gray-900  active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:font-bold">
            Company
          </Link>
        </PopoverGroup>
        {/* ******************************** */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <Button className="relative flex items-center border-8 rounded-2xl transition-all duration-500 ease-in-out transform group ">
    <Link href="/deals" className="flex items-center group">
      <ShoppingCart width={30} height={30} className='hover:cursor-pointer shadow-xl transition-transform transform group-hover:scale-110' />
      <h1 className="ml-3 shadow-gray-400 text-lg font-bold text-gray-900 opacity-0 transform -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-300 transition-opacity duration-300">
        Get deals 
      </h1>
    </Link>
  </Button>
</div>



      </nav>
      {/* ******************************** */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" src="/logo5.jpg"  width={100} height={80} className='rounded-3xl'/>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/seling"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  What We Offer
                </Link>
                <Link
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  href="aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/deals"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                >
                  <Button className="flex items-center border-8 rounded-xl">
                  <ShoppingCart className="w-10 h-10" width={15} height={15}/>
                  Get deals 
                  </Button>
                  
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
