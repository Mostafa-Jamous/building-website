import SliderImg from "../../components/SliderImg";
import Landing from "../Landing";
import { FaSchool } from "react-icons/fa";
import { FaBuilding, FaFootballBall } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FaFlag } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import MainContainer from "../../components/MainContainer";
import Card from "../../components/Card";
import room from "../../imgs/room.jpeg";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import FooterList from "../../components/FooterList";

function Home() {
  return (
    <div>
      <Landing title="Home" />
      <MainContainer>
        <div className="grid grid-cols-2 gap-3 my-5 max-xl:grid-cols-1 ">
          <SliderImg />
          <div className="max-xl:mx-auto max-xl:my-5">
            <h1 className="text-slate-700 text-3xl font-bold mb-4">
              June in north coast by SODIC
            </h1>
            <h2 className="text-lg font-bold text-red-600 mb-5">
              price: 2.325.000 EGP
            </h2>
            <h3 className="text-slate-700 text-2xl font-bold mb-10">
              Monte Galala in Ain Sakhna by Tatweer Misr
            </h3>
            <div className="my-5">
              <h4 className="text-4xl font-bold mb-3">Amenities</h4>
              <div className="grid grid-cols-3 gap-y-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div className=" flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] grad flex justify-center items-center rounded-full  grad">
                    <FaSchool size={35} color="white" />
                  </div>
                  <h1 className="text-xl">School</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] grad flex justify-center items-center rounded-full  grad">
                    <FaFootballBall size={35} color="white" />
                  </div>
                  <h1 className="text-xl">Sports Club</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] grad flex justify-center items-center rounded-full  grad">
                    <FaBuilding size={35} color="white" />
                  </div>
                  <h1 className="text-xl">City Center</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] grad flex justify-center items-center rounded-full  grad">
                    <FaBus size={35} color="white" />
                  </div>
                  <h1 className="text-xl">Bus Station</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] grad flex justify-center items-center rounded-full  grad">
                    <FaFootballBall size={35} color="white" />
                  </div>
                  <h1 className="text-xl">Sports Club</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <button className="px-24 py-5 max-md:px-12 max-md:py-3 hover:bg-red-700 bg-red-600 text-white text-3xl font-bold rounded-2xl">
                Call Us
              </button>
              <button className="px-24 py-5 max-md:px-12 max-md:py-3 hover:bg-green-700 bg-green-600 text-white text-3xl font-bold rounded-2xl">
                Whatsapp
              </button>
            </div>
          </div>
        </div>
        <div className="my-14">
          <h1 className="text-3xl font-bold mb-4 text-slate-700">
            About Monte Galala in Ain Sakhna by Tatweer Misr
          </h1>
          <h1 className="font-bold mb-2">The Club Park</h1>
          <p className="leading-7 mb-9 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            sunt neque. Explicabo tempora architecto rem, quibusdam doloribus
            molestiae. Magni cupiditate perspiciatis nostrum excepturi
            necessitatibus maxime omnis veritatis officia laboriosam beatae.
          </p>
          <p className="leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            tenetur, dolores dicta facere nulla perspiciatis corrupti fuga iste
            perferendis ab voluptatem labore libero provident expedita, eius
            laudantium illum dignissimos vero?
          </p>
          <h1 className="font-bold mb-2">Central Park</h1>
          <p className="leading-7 mb-9 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eaque consequuntur eveniet expedita maiores qui et explicabo libero
            veniam ipsa nemo sapiente debitis deserunt pariatur, placeat
            cupiditate! Quidem, perferendis dolorum.
          </p>
          <p className="leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            suscipit inventore incidunt quasi, voluptas quibusdam reprehenderit
            animi aut et molestiae dolores vero, deserunt, rem corporis totam
            perspiciatis enim ut commodi!
          </p>
        </div>
        <div>
          <h1 className="text-red-600 text-xl font-bold mb-4">Payment Plans</h1>
          <div className="grad w-fit p-1 rounded-2xl">
            <div className="bg-white px-10 py-3 border-grad rounded-2xl">
              <h1 className="text-xl my-3 font-bold">5% Down Payment</h1>
              <h1 className="text-xl my-3 font-bold">6 Years</h1>
              <h1 className="text-xl my-3 font-bold">Original Plan</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-between my-5">
            <h1 className="text-2xl text-slate-700 font-bold">
              Explore Properties In June
            </h1>
            <div className="flex flex-wrap items-center gap-2 max-md:ml-auto max-md:my-4 ">
              <button className="text-white bg-red-600 hover:bg-red-700 rounded-xl py-2 px-8 text-lg max-sm:mx-auto">
                Compare
              </button>
              <button className="flex items-center text-white bg-red-600 hover:bg-red-700 rounded-xl py-2 px-8 text-lg max-sm:mx-auto">
                Sort By
                <FiFilter size={20} color="white" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-20 gap-y-6 max-xl:grid-cols-2 max-sm:grid-cols-1 my-4">
          <Card title="Shops" />
          <Card title="Shops" />
          <Card title="Administrative" />
          <Card title="Shops" />
          <Card title="Shops" />
          <Card title="Administrative" />
          <Card title="Shops" />
          <Card title="Shops" />
          <Card title="Administrative" />
        </div>
      </MainContainer>
      <div className="relative mt-9">
        <img className="w-full h-full max-xl:hidden" src={room} alt="" />
        <div className="absolute top-0 left-0 w-full h-full max-xl:hidden bg-black/60"></div>
        <div className="absolute text-center left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] grid grid-cols-2 max-xl:grid-cols-1 max-xl:gap-5 max-xl:mt-[450px] w-[95%] mx-auto">
          <div className=" mx-auto my-auto">
            <h1 className="text-white max-xl:text-black font-bold text-5xl mb-6">
              Need expert advice?
            </h1>
            <h1 className="text-2xl text-white max-xl:text-black">
              Fill out the form and one of your property consuitants will
              contact you
            </h1>
          </div>

          <form
            className="px-7 py-4 bg-gray-400/60 max-xl:bg-gray-600 rounded-3xl max-xl:w-[85%] max-xl:mx-auto"
            action=""
          >
            <input
              placeholder="your name"
              className="py-3 px-6 outline-none w-full mb-5 bg-gray-300 rounded-xl"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="Preffered location"
              className="py-3 px-6 outline-none w-full mb-5 bg-gray-300 rounded-xl"
              type="text"
              name=""
              id=""
            />
            <div className="flex  items-center bg-gray-300 mb-5 rounded-xl">
              <div className="flex items-center mx-4">
                <FaFlag size={20} />
                <FiChevronDown size={20} />
              </div>

              <input
                placeholder="phone number"
                className="py-3 outline-none w-full bg-gray-300 rounded-xl"
                type="text"
                name=""
                id=""
              />
            </div>
            <textarea
              placeholder="your message"
              className="py-3 px-6 outline-none w-full min-h-[200px] mb-5 bg-gray-300 rounded-xl"
              name=""
              id=""
            ></textarea>
            <button className="bg-blue-700 hover:bg-blue-800 max-xl:bg-blue-800 hover:max-xl:bg-blue-900 text-white text-xl font-bold w-full py-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black/20">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1 max-sm:text-center w-[90%] mx-auto py-16 max-xl:mt-[850px] max-sm:mt-[950px] ">
          <div className="mx-auto my-auto">
            <h1 className="text-6xl mb-4">Logo</h1>
            <div className="flex justify-between">
              <AiOutlineInstagram size={30} color="purple" />
              <CiFacebook size={30} color="blue" />
              <AiOutlineWhatsApp size={30} color="green" />
            </div>
          </div>
          <FooterList title="Areas" />
          <FooterList title="Recommended" />
          <FooterList title="Latest Developers" />
        </div>
      </div>
    </div>
  );
}
export default Home;
