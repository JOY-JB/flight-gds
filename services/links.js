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
    icon: <AiOutlineInfoCircle />,
    subitem: [
      {
        name: "item about 1",
        link: "/dashboard/about1",
        icon: <AiFillHome />,
      },
      {
        name: "item about 2",
        link: "/dashboard/about2",
        icon: <AiFillHome />,
      },
    ],
  },
  {
    name: "Features",
    icon: <AiFillHome />,
    subitem: [
      {
        name: "item features 1",
        link: "/dashboard/features1",
        icon: <AiFillHome />,
      },
      {
        name: "item features 2",
        link: "/dashboard/features2",
        icon: <AiFillHome />,
      },
    ],
  },
  {
    name: "Gallary",
    link: "/dashboard",
    icon: <AiFillHome />,
  },
  {
    name: "Contact Us",
    link: "/dashboard",
    icon: <AiFillHome />,
  },
  {
    name: "Our Developers",
    icon: <AiFillHome />,
    subitem: [
      {
        name: "item features 1",
        link: "/dashboard/features1",
        icon: <AiFillHome />,
      },
      {
        name: "item features 2",
        link: "/dashboard/features2",
        icon: <AiFillHome />,
      },
    ],
  },
  {
    name: "Owners",
    icon: <AiFillHome />,
    subitem: [
      {
        name: "item features 1",
        link: "/dashboard/features1",
        icon: <AiFillHome />,
      },
      {
        name: "item features 2",
        link: "/dashboard/features2",
        icon: <AiFillHome />,
      },
    ],
  },
];

export default links;
