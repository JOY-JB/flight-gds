import { AiFillHome } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";

const links = [
  {
    name: "Home",
    link: "/dashboard",
    icon: <AiFillHome />,
  },
  {
    name: "About",
    link: "/dashboard/about",
    icon: <AiOutlineInfoCircle />,
    subitem: [
      {
        name: "item about",
        link: "/dashboard/about1",
        icon: <AiFillHome />,
      },
      {
        name: "item 2",
        link: "/dashboard/subitem2",
        icon: <AiFillHome />,
      },
    ],
  },
  {
    name: "Features",
    link: "/dashboard/features",
    icon: <AiFillHome />,
    subitem: [
      {
        name: "item 1 features",
        link: "/dashboard/features",
        icon: <AiFillHome />,
      },
      {
        name: "item 2",
        link: "/dashboard/subitem2",
        icon: <AiFillHome />,
      },
      {
        name: "item 3",
        link: "/dashboard/subitem3",
        icon: <AiFillHome />,
      },
      {
        name: "item 4",
        link: "/dashboard/subitem3",
        icon: <AiFillHome />,
      },
    ],
  },
];

export default links;
