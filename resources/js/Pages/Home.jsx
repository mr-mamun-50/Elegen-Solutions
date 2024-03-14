import { Link, Head } from '@inertiajs/react';
import { Dialog } from '@headlessui/react'
import { useState } from 'react';
import { ArrowRightEndOnRectangleIcon, Bars3Icon, UserIcon, UserPlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeSwitch from '@/Components/ThemeSwitch';
import { useLocalStorage } from 'usehooks-ts';

export default function Home(props) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const navigation = [
    { name: 'How We Work', route: 'admin.login' },
    { name: 'Services', route: 'dashboard' },
    { name: 'Projects', route: 'dashboard' },
    { name: 'People', route: 'dashboard' },
    { name: 'News', route: 'dashboard' },
    { name: 'Blog', route: 'dashboard' },
  ]


  return (
    <>
      <Head title="Leading Software Company in Bangladesh" />



      <div className="relative flex items-center min-h-screen overflow-hidden bg-white dark:bg-gray-900 bg-dots-darker dark:bg-dots-lighter">

        {/* nav section */}
        <header className="fixed inset-x-0 top-0 z-50 border-b dark:border-gray-600 backdrop-blur-3xl">
          <div className="container">
            <nav className="flex items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
              {/* logo */}
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  <img className="w-auto h-10"
                    src={theme === 'light' ? '/assets/images/elegen_solution_logo.png' : '/assets/images/elegen_solution_logo_white.png'}
                    alt="Elegen Solutions" />
                </Link>
              </div>

              {/* Mobile menu, show/hide based on mobile menu state. */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* navigation menus */}
              <div className="hidden lg:flex lg:gap-x-10">
                {navigation.map((item) => (
                  <Link key={item.name} href={route(item.route)}
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                    {item.name}
                  </Link>
                ))}
              </div>


              {/* login register button */}
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                {/* theme switcher */}
                <div className="pt-1 me-5">
                  <ThemeSwitch />
                </div>

                {props.auth.user ? (
                  <Link href={route('dashboard')}
                    className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                    <UserIcon className="w-5 h-5 me-2" aria-hidden="true" />
                    {props.auth.user.name}
                  </Link>
                ) : (
                  <>
                    <Link href={route('login')}
                      className="flex items-center text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                      <ArrowRightEndOnRectangleIcon className="w-5 h-5 me-2" aria-hidden="true" />
                      Log in
                    </Link>

                    <Link href={route('register')}
                      className="flex items-center ml-6 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                      <UserPlusIcon className="w-5 h-5 me-2" aria-hidden="true" />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>

          {/* drawer for mobile */}
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-5 overflow-y-auto bg-white dark:bg-gray-950 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

              {/* header */}
              <div className="flex items-center justify-between">
                {/* logo */}
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="w-auto h-10"
                    src={theme === 'light' ? '/assets/images/elegen_solution_logo.png' : '/assets/images/elegen_solution_logo_white.png'}
                    alt=""
                  />
                </Link>

                {/* close button */}
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* body */}
              <div className="flow-root mt-6">
                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/50">

                  <div className="py-6 space-y-2">
                    {navigation.map((item) => (
                      <Link key={item.name} href={route(item.route)}
                        className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-100">
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* login register buttons */}
                  <div className="py-6">
                    {props.auth.user ? (
                      <Link href={route('dashboard')}
                        className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-100">
                        <UserIcon className="w-5 h-5 me-2" aria-hidden="true" />
                        {props.auth.user.name}
                      </Link>
                    ) : (
                      <>
                        <Link href={route('login')}
                          className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-100">
                          <ArrowRightEndOnRectangleIcon className="w-5 h-5 me-2" aria-hidden="true" />
                          Log in
                        </Link>

                        <Link href={route('register')}
                          className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-900 dark:text-gray-100">
                          <UserPlusIcon className="w-5 h-5 me-2" aria-hidden="true" />
                          Sign Up
                        </Link>
                      </>
                    )}

                    {/* theme switcher */}
                    <div className="-mx-3 flex items-center px-3 py-2.5">
                      <ThemeSwitch />
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* hero section */}
        <div className="container">
          <div className="relative px-6 isolate pt-14 lg:px-8">
            {/* bg img */}
            <div
              className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

            {/* hero section */}
            <div className="grid grid-flow-col">
              {/* hero text */}
              <div className="w-11/12 max-w-2xl py-32 mx-auto md:mx-0 sm:py-44 lg:py-40">

                <div className="hidden sm:mb-8 sm:flex sm:justify-center md:justify-normal">
                  <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full dark:text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
                    Announcing our next round of funding.{' '}
                    <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-500">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                    Innovating Tomorrow's Solutions, Today.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                    Transforming Ideas into Reality with Custom Software Development Services. Join the Digital Revolution Today with Elegen Solutions!
                  </p>
                  <div className="flex items-center justify-center mt-10 md:justify-normal gap-x-6">
                    <a href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* hero image */}
              <div className="items-center justify-end hidden md:flex">
                <img src='/assets/images/4882396.png' alt="Elegen Solutions" className='w-96' />
              </div>
            </div>

            {/* bg img */}
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>



        </div>
      </div>




      <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
    </>
  );
}
