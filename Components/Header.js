import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import avatarDropdown from "../services/avatarDropdown";

const Header = () => {
  return (
    <div className="navbar shadow-lg bg-custom-bg text-neutral-content px-4">
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
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex="0" className="btn btn-ghost rounded-btn">
            Joy Barua
          </div>
          <ul
            tabIndex="0"
            className="p-2 shadow menu dropdown-content rounded-box w-52 bg-custom-hover-bg"
          >
            {avatarDropdown.map((item, key) => (
              <Link key={key} href={item.link} passHref>
                <p className="block py-2.5 px-4 select-none rounded transition duration-200 hover:bg-white hover:text-custom-hover-text flex justify-between">
                  {item.name}
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
