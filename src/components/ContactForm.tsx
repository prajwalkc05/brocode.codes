import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MessageCircle, Loader2 } from "lucide-react";
import { useEmailForm } from "@/hooks/useEmailForm";
import contactBg from "@/assets/contact-bg.jpeg";

const ContactForm = () => {
  const { formData, isSubmitting, handleSubmit, updateField } = useEmailForm();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
              href="https://wa.me/918310605144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 backdrop-blur-md bg-card/80 border border-border/50 hover:border-green-500/50 transition-all group shadow-lg hover:shadow-green-500/20 relative overflow-hidden"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-green-500/20 group-hover:bg-green-500/30 transition-colors rounded-lg relative z-10">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold mb-1 text-foreground">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:contact@brocode.com"
              className="flex items-center gap-4 p-6 backdrop-blur-md bg-card/80 border border-border/50 hover:border-blue-500/50 transition-all group shadow-lg hover:shadow-blue-500/20 relative overflow-hidden"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors rounded-lg relative z-10">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="font-bold mb-1 text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">contact@brocode.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+918310605144"
              className="flex items-center gap-4 p-6 backdrop-blur-md bg-card/80 border border-border/50 hover:border-purple-500/50 transition-all group shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors rounded-lg relative z-10">
                <Phone className="w-6 h-6 text-purple-400" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold mb-1 text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 8310605144</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-card/80 border border-border/50 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full px-4 py-3 bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all rounded-lg"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all rounded-lg"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 bg-background/70 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none rounded-lg"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
