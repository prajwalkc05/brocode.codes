import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import contactBg from "@/assets/contact-bg.jpeg";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={contactBg} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Options */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 backdrop-blur-md bg-card/80 border border-border/50 hover:border-green-500/50 transition-all group shadow-lg hover:shadow-green-500/20"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-green-500/20 group-hover:bg-green-500/30 transition-colors rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@brocode.com"
              className="flex items-center gap-4 p-6 backdrop-blur-md bg-card/80 border border-border/50 hover:border-blue-500/50 transition-all group shadow-lg hover:shadow-blue-500/20"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors rounded-lg">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">contact@brocode.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-6 backdrop-blur-md bg-card/80 border border-border/50 hover:border-purple-500/50 transition-all group shadow-lg hover:shadow-purple-500/20"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors rounded-lg">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">+1 (234) 567-890</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-card/80 border border-border/50 p-6 sm:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <AnimatedButton>Send Message</AnimatedButton>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
