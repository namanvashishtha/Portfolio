import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzelynb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact Me</h2>
          <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-light-text mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              I'm open to freelance opportunities – especially ambitious or large projects.
              However, if you have other requests or questions, don't hesitate to use the form.
            </p>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <FaMapMarkerAlt className="text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                  <p className="text-light-text text-sm sm:text-base">Faridabad, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <FaEnvelope className="text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-light-text text-sm sm:text-base">
                    <a
                      href="mailto:namanvashi@gmail.com"
                      className="hover:text-primary transition-colors break-all touch-manipulation"
                    >
                      namanvashi@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <FaPhone className="text-sm sm:text-base" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                  <p className="text-light-text text-sm sm:text-base">+91 8448362072</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full dark-card rounded-lg border border-gray-700 p-3 sm:p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm sm:text-base touch-manipulation"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full dark-card rounded-lg border border-gray-700 p-3 sm:p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm sm:text-base touch-manipulation"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full dark-card rounded-lg border border-gray-700 p-3 sm:p-4 text-white focus:outline-none focus:border-primary transition-colors text-sm sm:text-base touch-manipulation"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full dark-card rounded-lg border border-gray-700 p-3 sm:p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base touch-manipulation min-h-[120px] sm:min-h-[140px]"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 min-h-[44px] touch-manipulation text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
