import { useEffect, useRef, useState } from "react";
import { Code, Briefcase, Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll just show a success message
      // We'll implement the actual email sending functionality once Supabase is connected
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="section-container">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-sm uppercase tracking-wider text-gray-600">Frontend Engineer</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              Crafting Digital
              <br /> Experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With 15 years of expertise in React, HTML, and CSS, I transform complex problems into elegant, user-centric solutions.
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button className="glass-card">View Projects</Button>
              <Button variant="outline" className="glass-card">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-secondary/50 py-24">
        <div className="section-container">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-center mb-16">Professional Journey</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card p-8 rounded-lg flex gap-6 items-start">
                  <div className="p-3 bg-primary/5 rounded-full">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-gray-600 mt-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                    <p className="mt-4 text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-center mb-16">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card p-8 rounded-lg text-center">
                  <div className="p-4 bg-primary/5 rounded-full inline-block mb-6">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-secondary/30">
        <div className="section-container">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => 
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                      className="glass-card"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      required
                      className="glass-card"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      required
                      className="glass-card min-h-[150px]"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="glass-card w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-24">
        <div className="section-container">
          <div className="animate-on-scroll opacity-0 text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss how we can work together to create something extraordinary.
            </p>
            <div className="flex justify-center gap-6">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const experiences = [
  {
    role: "Lead Frontend Engineer",
    company: "Tech Innovation Corp",
    period: "2019 - Present",
    description: "Leading a team of developers in building scalable React applications, implementing best practices, and mentoring junior developers."
  },
  {
    role: "Senior Frontend Developer",
    company: "Digital Solutions Inc",
    period: "2015 - 2019",
    description: "Architected and developed complex web applications using React, improving performance and user experience."
  },
  {
    role: "Frontend Developer",
    company: "Web Creations Studio",
    period: "2012 - 2015",
    description: "Specialized in creating responsive and accessible web interfaces using modern HTML, CSS, and JavaScript."
  }
];

const skills = [
  {
    name: "React & Modern JavaScript",
    description: "Expert in React ecosystem, state management, and modern JavaScript features. Experienced with Next.js and TypeScript."
  },
  {
    name: "HTML5 & CSS3",
    description: "Advanced knowledge of semantic HTML, CSS Grid, Flexbox, and modern CSS features. Focus on accessibility and best practices."
  },
  {
    name: "Frontend Architecture",
    description: "Specialized in creating scalable frontend architectures, optimizing performance, and implementing design systems."
  }
];

export default Index;
