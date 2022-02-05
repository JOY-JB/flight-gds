import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";

const NavItem = ({ item }) => {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  const handleMenuToggle = () => {
    setToggle(!toggle);
  };

  const Component = item.subitem ? "button" : Link;

  return (
    <div>
      <Component href={item.link} className="w-full text-left">
        <p
          className={`block py-2.5 px-4 rounded transition duration-200 text-custom-text hover:border-custom-hover-bg border-transparent border-2 hover:text-white select-none ${
            router.pathname == item.link ? "bg-custom-hover-bg " : ""
          }`}
          onClick={item.subitem && handleMenuToggle}
        >
          <div className="inline-block mr-2">{item.icon}</div>
          {item.name}
          {item.subitem && (
            <>
              <div
                className="absolute right-3 p-1 select-none my-auto"
                style={{ marginTop: "-1.35rem" }}
              >
                <FaAngleDown />
              </div>
              <div
                className={`rounded mt-4  ${toggle ? "block" : "hidden"}`}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                {item.subitem.map((subitem, index) => (
                  <Link key={index} href={subitem.link} passHref>
                    <p
                      className={`block py-2.5 px-4 select-none text-custom-text rounded transition duration-200 hover:border-custom-hover-bg border-transparent border-2 hover:text-white flex justify-between ${
                        router.pathname == subitem.link
                          ? " bg-custom-hover-bg "
                          : ""
                      }`}
                    >
                      {subitem.name}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </p>
      </Component>
    </div>
  );
};

export default NavItem;
