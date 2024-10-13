import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <section className="w-full h-screen bg-[url('/images/p1.jpg')] bg-center bg-cover bg-fixed flex justify-center items-center">
        <div
          className="flex flex-col
      items-center justify-center text-white gap-y-14 font-bold text-xl font-serif "
        >
          <div className="">WELCOME TO THE GREENSTORE </div>
          <div>
            <h1 className="text-4xl">Lets Bring the Spring to Your Home </h1>
          </div>
          <span>
            <button className=" bg-green-800 text-white hover:bg-white hover:text-green-500 p-2 rounded-xl">
              SHOP NOW
            </button>
          </span>
        </div>
      </section>
      <About />
      <Contact />
    </main>
  );
}
