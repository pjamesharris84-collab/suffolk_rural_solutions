import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-military text-white py-16 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left/Center - Main Footer Content */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Suffolk Rural Solutions. All rights reserved.
          </p>
          <a
  href="https://www.facebook.com/SuffolkRuralSolutions"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center md:justify-start gap-2 font-semibold"
>
  <div className="bg-[#1877F2] p-1 rounded">
    <FaFacebookSquare className="text-white text-3xl" />
  </div>
  <span className="text-white">Follow us on Facebook</span>
</a>

        </div>

        {/* Right - PJH Attribution */}
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <p className="text-sm text-khaki-light/80 mb-2">Website design by:</p>
          <a
            href="https://www.pjhwebservices.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/pjh-logo-light.png"
              alt="PJH Web Services"
              className="h-14 md:h-16 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
