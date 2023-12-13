import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import { BookOpenText, Home, Mail, Menu, Shirt } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4 px-4 xl:px-0">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            J&C Creations
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex items-center font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
            <li>
              <UserButton afterSignOutUrl="/"></UserButton>
            </li>
          </ul>
        </div>
        <div className="test text-dark md:hidden">  
          <MobileNavbar></MobileNavbar>
        </div>
      </div>
    </nav>
  );
}

export async function MobileNavbar() {
  const user = await currentUser();
  return (
    <>
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer hover:text-blue-700">
        <Menu/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center my-4 gap-3">
            <UserButton afterSignOutUrl="/"></UserButton>
            <span className="font-semibold">Hello, {user?.firstName} {user?.lastName}</span>
          </div>
          <hr></hr>
        </SheetHeader>
        <SheetDescription>
          <div className="mt-8">
          <ul className="mt-4 font-medium space-y-5 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                <span className="flex items-center gap-4 font-semibold text-lg"><Home className="text-blue-700"></Home> Home</span>
                
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                <span className="flex items-center gap-4 font-semibold text-lg"><BookOpenText></BookOpenText> About</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                <span className="flex items-center gap-4 font-semibold text-lg"><Shirt></Shirt> Products</span>
              </a>
            </li>
           
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                <span className="flex items-center gap-4 font-semibold text-lg"><Mail></Mail> Contact</span>
              </a>
            </li>

          </ul>

          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
    </>
  )
}