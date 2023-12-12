import { UserButton } from "@clerk/nextjs";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export function Navbar() {
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
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
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Pricing
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
        <div className="test text-white md:hidden">
          <HamburgerMenuIcon />
        </div>
      </div>
    </nav>
  );
}
