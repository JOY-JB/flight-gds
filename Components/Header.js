import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import avatarDropdown from "../services/avatarDropdown";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="navbar shadow-2xl bg-custom-header-bg text-custom-header-text px-4">
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <FaFacebook size="30" />
        <span className="text-lg font-bold pl-3">Flight GDS</span>
      </div>

      <div className="flex-none ml-auto">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <Avatar image="https://i.pravatar.cc/500?img=32" />
        <div className="dropdown dropdown-end">
          <div tabIndex="0" className="btn btn-ghost rounded-btn">
            Joy Barua
          </div>
          <ul
            tabIndex="0"
            className="p-2 mt-4 shadow menu dropdown-content rounded-box w-52"
            style={{
              background: "#404E67",
            }}
          >
            {avatarDropdown.map((item, key) => (
              <Link key={key} href={item.link} passHref>
                <p className="block py-2.5 px-4 select-none rounded transition duration-200 hover:border-custom-hover-bg border-transparent border-2 hover:text-white flex justify-between">
                  {item.name}
                  <span className="my-auto">{item.icon}</span>
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
