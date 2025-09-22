import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.jpg";
import background from "../assets/background.jpg";
import { FaFacebookSquare } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-military text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
          <img
            src={logo}
            alt="Suffolk Rural Solutions Logo"
            className="h-28 md:h-32 w-auto rounded-lg shadow-lg mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Suffolk Rural Solutions
          </h1>
          <p className="text-base md:text-lg font-normal leading-relaxed max-w-2xl mb-6">
            Professional gardening and landscaping services across Suffolk.  
            Bringing nature, beauty, and functionality to your outdoor spaces.
          </p>
          <div className="w-24 h-[2px] bg-khaki-light/80 rounded-full mb-2"></div>
        </div>
      </section>

      {/* Main Body with Background */}
      <section
        className="relative py-12 md:py-16"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-khaki-light/70 md:bg-khaki-light/40"></div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Services */}
          <div className="bg-white/95 rounded-2xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 text-center">
            <h2 className="text-2xl md:text-3xl text-military font-bold mb-4">
              Our Services
            </h2>
            <div className="w-20 h-[2px] bg-khaki-light/80 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 mb-6 font-normal text-base md:text-lg">
              Suffolk Rural Solutions is a <strong>family run business</strong>,  
              specialising in <strong>ground care</strong> and <strong>garden maintenance</strong>.
            </p>
            <ul className="text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 list-disc list-inside font-normal text-base md:text-lg text-left md:text-left">
              <li>Private & rental garden maintenance</li>
              <li>Grass cutting & lawn management</li>
              <li>Hedge cutting</li>
              <li>Fencing</li>
              <li>Tree surgery</li>
              <li>Stump grinding</li>
              <li>Paddock care</li>
              <li>Wildlife conservation</li>
            </ul>
          </div>

         
          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
