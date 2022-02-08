import { useRouter } from "next/router";
import links from "../services/links";
import { AiFillHome } from "react-icons/ai";

const Breadcumb = () => {
  const router = useRouter();

  const linkitem = links.find((a) => a.link == router.pathname);

  const sublinkitem = links?.find((a) =>
    a?.subitem?.find((b) => b.link == router.pathname)
  );

  const innersublink = sublinkitem?.subitem.find(
    (a) => a.link == router.pathname
  );

  let singlepage;
  let multipage;
  let currentPage;

  if (linkitem) {
    singlepage = linkitem.name;
    currentPage = linkitem.name;
  } else if (sublinkitem && innersublink) {
    multipage = `${sublinkitem.name} / ${innersublink.name}`;
    currentPage = innersublink.name;
  }

  return (
    <div className="my-6 flex justify-between">
      <div className="w-3/5">
        <h2 className="text-xl text-gray-500 font-medium"> {currentPage} </h2>
      </div>
      <div className="flex items-end">
        <AiFillHome size={15} style={{ marginBottom: "3px" }} />
        <p className="text-gray-500 text-sm ml-2">
          {" "}
          {singlepage ? singlepage : multipage}{" "}
        </p>
      </div>
    </div>
  );
};

export default Breadcumb;
