import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i84znad",
        "template_yjp60yv",
        e.target,
        "EXJWL-PZEEUqciYDc"
        // "wrong_service_id",
        // "wrong_template_id",
        // e.target,
        // "wrong_user_id"
      )
      .then(() => {
        setShowAlert(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setShowAlert(false), 3000);
      })
      .catch(() => {
        setErrorAlert(true);
        setTimeout(() => setErrorAlert(false), 3000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#006A71] to-[#48A6A7] bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full border rounded px-4 py-3 transition focus:outline-none focus:border-[#006A71] focus:bg-[#006A71]/5 placeholder-gray-400"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full border rounded px-4 py-3 transition focus:outline-none focus:border-[#006A71] 
                focus:bg-[#006A71]/5 placeholder-gray-400"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full border rounded px-4 py-3 transition focus:outline-none focus:border-[#006A71] 
                focus:bg-[#006A71]/5 placeholder-gray-400"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#006A71] text-white mb-8 py-3 px-6 rounded font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(72,166,167,0.5)] flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M12 2a10 10 0 0112 10h-4a6 6 0 00-6-6V2z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {showAlert && (
            <div
              role="alert"
              className="rounded-md border border-gray-300 p-4 shadow-sm flex flex-col items-center justify-center text-center"
            >
              <div className="flex items-center gap-2">
                <strong className="font-medium">Email Sent</strong>
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                We'll get back to you shortly!
              </p>
            </div>
          )}
          {errorAlert && (
            <div
              role="alert"
              className="rounded-md border border-red-300 p-4 shadow-sm flex flex-col items-center justify-center text-center mt-4"
            >
              <div className="flex items-center gap-2">
                <strong className="font-medium text-red-600">
                  Failed to Send
                </strong>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Oops! Something went wrong. Please try again.
              </p>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
