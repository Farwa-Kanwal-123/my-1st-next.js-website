import Link from "next/link";
import Image from "next/image";
import pic from "../../images/store.jpeg";
export default function About() {
  return (
    <main className="w-full h-screen flex justify-center items-center p-10 font-mono bg-green-300">
      <div className=" bg-gray-200 p-2 w-[70vw] rounded-md flex-wrap ">
        <h1 className="font-bold text-2xl text-center text-white bg-green-500 rounded-md p-2">
          About Us
        </h1>
        <p className="leading-relaxed p-4 text-green-800">
          GreenStore is your one-stop shop for all your plant needs. We offer a
          wide variety of healthy, vibrant plants, from popular houseplants to
          unique outdoor varieties. Our knowledgeable staff is dedicated to
          helping you find the perfect plant for your space.we believe that
          plants bring life to any environment. That's why we're committed to
          providing our customers with high-quality plants and expert advice.
          Whether you're a seasoned plant parent or just starting your gardening
          journey, we have everything you need to cultivate a thriving green
          space.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            href={"/"}
            className="bg-green-500 text-white rounded-md p-2 font-bold hover:bg-white hover:text-green-500"
          >
            Home
          </Link>

          <Link
            href={"/components/contact"}
            className="bg-green-500 text-white rounded-md p-2 font-bold hover:bg-white hover:text-green-500 "
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
