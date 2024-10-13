import Link from "next/link";
import { GiFruitTree } from "react-icons/gi";
export default function Header() {
  <title>My Website</title>;
  return (
    <div>
      <title>My 1st Website</title>
      <header className="container bg-green-600 text-white p-2 flex align-center justify-between rounded-sm bg-fixed">
        {/* Logo */}

        <div className="text-3xl font-bold text-white flex">
          {/* import icon of tree for nav bar */}
          <GiFruitTree className="border-2 rounded-full w-10 h-10 p-1 mr-2" />
          <h2>GreenStore</h2>
        </div>

        {/* Link */}
        <ul className="flex align-center gap-3 font-bold p-1.5">
          <li>
            <Link
              href={"/"}
              className="hover:bg-white hover:text-green-500 p-2 rounded-md"
            >
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"./about"}
              className="hover:bg-white hover:text-green-500 p-2 rounded-md"
            >
            
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="hover:bg-white hover:text-green-500 p-2 rounded-md"
            >
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
