import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Github,
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useToast } from "@/hooks/use-toast";
  import { useState } from "react";
  
  export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
      }, 1500);
    };
    return (
      <section id="contact" className="py-12 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center pb-4">
            Get In <span className="text-primary"> Touch</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 w-full max-w-xs mx-auto flex flex-col items-center">
                <div className="flex items-center space-x-4 justify-center w-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:swastikkulkarni737@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      swastikkulkarni737@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-center w-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8106138238
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-center w-full">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Hyderabad, Telangana, India
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/swastik-kulkarni/" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="github.com/swastik3616" target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="bg-card p-8 rounded-lg shadow-xs w-full py-16 min-h-[300px]"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };