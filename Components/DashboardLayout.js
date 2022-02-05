import Head from "next/head";
import Link from "next/link";
import links from "../services/links";
import Header from "./Header";
import NavItem from "./NavItem";

const DashboardLayout = ({ children }) => {
  const handleMblToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("-translate-x-full");
  };

  return (
    <div>
      <Header></Header>
      <div className="relative min-h-screen md:flex">
        <div className="bg-gray-800 flex justify-between md:hidden">
          <Link href="/dashboard" passHref>
            <p className="block p-4 text-white font-bold">Flight GDS</p>
          </Link>

          <button
            className="mobile-menu-button p-4 focus:outline-none text-white focus:bg-gray-700"
            onClick={handleMblToggle}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`sidebar bg-custom-bg text-blue-100 w-56 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <nav>
            {links.map((item, key) => (
              <NavItem key={key} item={item}></NavItem>
            ))}
          </nav>
        </div>

        <div className="flex-1 p-10 text-2xl font-bold">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
