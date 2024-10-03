import Link from "next/link";
export default function Contact() {
  return (
    <div className="w-full h-screen flex justify-center items-center border-teal-950 bg-green-200 ">
      <div className=" bg-green-500 text-white p-6  rounded-lg w-[50vw]">
        <form className=" flex flex-col space-y-4 space-x-2 ">
          <h1 className="font-bold bg-green-600 p-4 text-5xl text-center rounded-md">
            Contact Form
          </h1>

          <input type="text" className="rounded-md p-2" placeholder="Name.." />

          <input
            type="email"
            className="rounded-md  p-2"
            placeholder="Email.."
          />

          <textarea
            className="rounded-md p-2 resize-none"
            placeholder="comment.."
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 p-2 rounded-md text-white text-lg font-semibold cursor-pointer hover:bg-green-400 hover:font-semibold transition-all duration-100 "
          >
            Submit
          </button>

          <div className="flex justify-center gap-4 mt-3">
            <Link
              href={"/"}
              className="bg-green-600 rounded-md p-1 hover:bg-white hover:text-green-500 transition-all duration-100"
            >
              Home
            </Link>
            <Link
              href={"/components/about"}
              className="bg-green-600 rounded-md p-1  hover:bg-white hover:text-green-500 transition-all duration-100"
            >
              About
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
