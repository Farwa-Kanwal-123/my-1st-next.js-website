import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <main className="w-full h-screen font-mono bg-gray-200 flex items-center ">
      <section className="flex w-[80vw] h-[70vh] justify-center gap-12 ml-20">
        <div className=" w-[450px] h-[379px] bg-gray-100">
          <h1 className="font-bold text-2xl text-center text-white bg-green-500 rounded-sm p-2">
            About Us
          </h1>
          <p className="leading-relaxed p-4 text-green-800">
            GreenStore is your one-stop shop for all your plant needs. We offer
            a wide variety of healthy, vibrant plants, from popular houseplants
            to unique outdoor varieties. Our knowledgeable staff is dedicated to
            helping you find the perfect plant for your space.we believe that
            plants bring life to any environment. Thats why we are committed to
            providing our customers with high-quality plants and expert advice.
            
          </p>
            <div className="flex justify-center gap-3">
              <Link
                href={"/"}
                className="bg-green-500 text-white rounded-md p-1 px-4 font-bold hover:bg-white hover:text-green-500"
              >
                Home
              </Link>

              <Link
                href={"/contact"}
                className="bg-green-500 text-white rounded-md p-1 px-2 font-bold hover:bg-white hover:text-green-500 "
              >
                Contact
              </Link>
            </div>
        </div>
        <div className="w-[350px] h-[460px]">
          <Image
            src={"/images/p3.jpg"}
            alt="about"
            width={350}
            height={460}
            objectFit="cover"
            className="rounded-sm border-green-300 border-2"
          />
        </div>
      </section>
    </main>
  );
}
