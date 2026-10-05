import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-md shadow-md border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-800 font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-800 font-medium mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-800 font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="type message here..."
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 text-gray-700 placeholder-gray-400 resize-y"
              ></textarea>
            </div>

            {/* Right-aligned Submit Button */}
            <div className="flex justify-center pt-2 ">
              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-sm transition-colors cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      

    </>
  )
}

export default Contact