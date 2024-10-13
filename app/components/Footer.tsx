
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
export default function Footer() {
  return (
    <main className="w-full h-auto p-8 bg-green-600 text-white flex flex-col items-center justify-center gap-1">
      <div className="flex items-center justify-center gap-2 cursor-pointer">
        <span>
          {" "}
          <FaSquareGithub className="w-8 h-8 hover:-translate-y-1" />
        </span>
        <span>
          {" "}
          <FaFacebookSquare className="w-8 h-8 hover:-translate-y-1" />
        </span>
        <span>
          {" "}
          <FaLinkedin className="w-8 h-8 hover:-translate-y-1" />
        </span>
        <span>
          <FaInstagramSquare className="w-8 h-8 hover:-translate-y-1" />
        </span>
        <span>
          <FaSquarePhone className="w-8 h-8 hover:-translate-y-1" />
        </span>
      </div>
      <div>
        <p>@Copywrites 2024,GreenStore</p>
      </div>
      <div>
        Legal Stuff | Privacy Policy | Security | Website Accessability | Manage
        Cookies{" "}
      </div>
    </main>
  );
}
