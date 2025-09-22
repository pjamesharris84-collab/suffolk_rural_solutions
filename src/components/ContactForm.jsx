export default function ContactForm() {
  return (
    <section id="contact" className="bg-khaki-light py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl text-military font-bold mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-[2px] bg-khaki-light/80 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-700 mb-6 font-normal text-base md:text-lg">
            To request a call back, or to email us with your project requirements,  
            please use the contact form and we will respond as quickly as possible.
          </p>
          <form className="space-y-5 font-normal">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-olive rounded-lg p-3 text-base md:text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-olive rounded-lg p-3 text-base md:text-lg"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border border-olive rounded-lg p-3 text-base md:text-lg"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-olive rounded-lg p-3 text-base md:text-lg"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-military text-white px-6 py-3 rounded-lg hover:bg-olive transition text-base md:text-lg font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
