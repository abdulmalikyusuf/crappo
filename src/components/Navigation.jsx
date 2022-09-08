import React from 'react'
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Logo from '../components/Logo';

function Navigation() {
  return (
    <Popover>
        {({open}) => (
            <>
                <nav className="hidden md:flex justify-between md:items-center">
                    <Logo/>
                    <ul className="flex space-x-8 items-center tracking-[0.01rem] leading-7">
                        <div className="flex space-x-8">
                            <li>Products</li>
                            <li>Features</li>
                            <li>About</li>
                            <li>Contact</li>
                        </div>
                        <div className="flex space-x-8 items-center divide-x divide-slate-500">
                            <li className="font-medium leading-normal">Login</li>
                            <button type="button" className="bg-royal-blue rounded-full ml-8 py-4 px-8 font-medium leading-6">
                                Register
                            </button>
                        </div>
                    </ul>
                </nav>
                <div className="flex justify-between md:hidden">
                    <Logo/>    
                    <Popover.Button className="z-50 p-2 text-gray-500 lg:hidden" aria-controls="mobile-menu-2" aria-expanded="false">
                        {open ? 
                            <>
                                <span className="sr-only">
                                    Close main menu
                                </span>
                                <XMarkIcon className="h-10 w-10 text-white" aria-hidden="true"/>
                            </> : 
                            <>
                                <span className="sr-only">
                                    Open main menu
                                </span>
                                <Bars3Icon className="h-10 w-10 text-white" aria-hidden="true"/>
                            </>
                        }
                    </Popover.Button>
                </div>
                <Transition className="fixed inset-0 z-40 overflow-hidden lg:hidden">
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Popover.Overlay className="absolute inset-0 dark:dark:bg-slate-900 bg-opacity-50 backdrop-blur backdrop-filter opacity-100" />
                    </Transition.Child>

                    <Transition.Child
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="-translate-x-0"
                        leaveTo="translate-x-full">
                        <Popover.Panel static className="pointer-events-none absolute inset-0 z-40 translate-x-0 h-full">
                            <div className="bg-main overflow-hidden pointer-events-auto min-h-screen">
                                <nav className="flex flex-col space-y-10 justify-center items-center mx-auto h-screen w-fit text-2xl transition-width duration-75 px-10">
                                    <ul className="flex flex-col space-y-10 mx-auto">
                                        <li className="cursor-pointer">Products</li>
                                        <li className="cursor-pointer">Features</li>
                                        <li className="cursor-pointer">About</li>
                                        <li className="cursor-pointer">Contact</li>
                                    </ul>
                                    <div className="flex space-x-8 items-center divide-x divide-slate-500">
                                        <p className="leading-normal cursor-pointer">Login</p>
                                        <button type="button" className="bg-royal-blue rounded-full ml-8 py-2 px-4 leading-6">
                                            Register
                                        </button>
                                    </div>
                                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam unde delectus saepe eum ab minus enim eveniet natus nemo. Ipsam ducimus labore distinctio aut delectus aperiam enim aspernatur facilis voluptatem ex modi odio cupiditate hic qui expedita, totam explicabo a dignissimos. Quaerat itaque adipisci, ullam quidem quas quam sint! */}
                                </nav>
                            </div>
                        </Popover.Panel>
                    </Transition.Child>
                </Transition>
            </>

        )}
</Popover>
  )
}

export default Navigation