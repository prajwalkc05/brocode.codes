import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)]" />
      
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
              className="flex items-center gap-4 p-6 backdrop-blur-sm bg-card/50 border border-border/50 hover:border-green-500/50 transition-all group"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@brocode.com"
              className="flex items-center gap-4 p-6 backdrop-blur-sm bg-card/50 border border-border/50 hover:border-blue-500/50 transition-all group"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">contact@brocode.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-4 p-6 backdrop-blur-sm bg-card/50 border border-border/50 hover:border-purple-500/50 transition-all group"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-3 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Phone className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Phone</h3>
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
            <div className="backdrop-blur-sm bg-card/50 border border-border/50 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 focus:border-primary outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 focus:border-primary outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 focus:border-primary outline-none transition-colors resize-none"
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
