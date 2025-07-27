"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Card from "./components/Card";
import Button from "./components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Quote, Mail, Phone, ArrowRight, Star } from "lucide-react";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { initScrollAnimations } from "./utils/scrollAnimations";

type Skill = {
  title: string;
  name: string[];
};

export default function Home() {
  const skills: Skill[] = [
    { title: "Languages", name: ["Javascript", "Typescript"] },
    {
      title: "Frameworks",
      name: ["Nuxt.js", "Vue.js", "Next.js", "React", "TailwindCSS"],
    },
    { title: "Databases", name: ["Node.js", "MySQL"] },
    {
      title: "Tools",
      name: ["Figma", "VS Code", "PhpStorm", "GitKraken", "Canva"],
    },
    { title: "Cloud", name: ["Vercel", "Netlify"] },
    { title: "Version Control", name: ["Git"] },
  ];

  useEffect(() => {
    const observer = initScrollAnimations();
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Hero />

      {/* quote */}
      <section className="py-20 scroll-animate">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative border border-secondary/30 p-8 md:p-12 rounded-2xl bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover-scale">
            <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed animate-fade-in stagger-1">
              <span className="animate-gradient-shift font-semibold">
                "With great power comes great electricity bill"
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 mt-6 text-secondary animate-fade-in stagger-2">
              <Quote className="w-5 h-5" />
              <span className="text-lg">- Dr. Who</span>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-primary/30 rounded-full animate-rotate-slow" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border border-secondary/30 rounded-full animate-rotate-reverse" />
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="py-20 scroll-animate" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <Title id="projects" className="mb-16 text-center">
            <span className="animate-fade-in stagger-1">
              Featured Projects
            </span>
          </Title>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up stagger-1">
              <Card
                imgUrl="/images/ts.webp"
                className="w-full h-full"
                body={
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <h3 className="text-lg font-semibold text-white">Toolstation.nl</h3>
                    </div>
                    <p className="text-sm text-primary mb-2">10% Sales Growth</p>
                    <p className="text-secondary text-sm leading-relaxed">
                      Developed responsive UI components and implemented pixel-perfect designs for the
                      Toolstation project with focus on performance and user experience.
                    </p>
                  </>
                }
                primaryLink="https://toolstation.nl/"
                delay={0.1}
              />
            </div>

            <div className="animate-slide-up stagger-2">
              <Card
                imgUrl="/images/vaah.webp"
                className="w-full h-full"
                body={
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <h3 className="text-lg font-semibold text-white">Vaah.dev</h3>
                    </div>
                    <p className="text-sm text-primary mb-2">100% Lighthouse Score</p>
                    <p className="text-secondary text-sm leading-relaxed">
                      Built and maintained modern, responsive UI components for various modules on the
                      vaahh.dev platform with exceptional performance metrics.
                    </p>
                  </>
                }
                primaryLink="https://vaah.dev/store/"
                secondaryLink="https://github.com/parth-2880/vaah-store"
                delay={0.2}
              />
            </div>

            <div className="animate-slide-up stagger-3">
              <Card
                imgUrl="/images/webreinvent.webp"
                className="w-full h-full"
                body={
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <h3 className="text-lg font-semibold text-white">Webreinvent.com</h3>
                    </div>
                    <p className="text-sm text-primary mb-2">Upgraded to Nuxt3</p>
                    <p className="text-secondary text-sm leading-relaxed">
                      Implemented modern, responsive UI for the WRI site, focusing on performance and
                      visual consistency with the latest Nuxt.js framework.
                    </p>
                  </>
                }
                primaryLink="https://webreinvent.com/"
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="py-20 scroll-animate" id="skills">
        <div className="max-w-7xl mx-auto px-4">
          <Title id="skills" className="mb-16 text-center">
            <span className="animate-fade-in stagger-1">
              Skills & Technologies
            </span>
          </Title>

          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="hidden lg:block relative w-[35%] animate-slide-in-left">
              <div className="absolute top-0 left-0 animate-rotate-slow">
                <Image
                  src="/icons/dots.svg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>

              <div className="absolute top-1/2 right-0 animate-rotate-reverse">
                <Image
                  src="/icons/dots.svg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>

              <div className="absolute bottom-0 left-8 animate-float">
                <Image
                  src="/icons/structure1.svg"
                  alt=""
                  width={113}
                  height={113}
                />
              </div>

              <div className="border size-22 absolute -top-8 right-8 border-secondary animate-scale-pulse" />
              <div className="border size-16 absolute bottom-8 right-0 border-secondary animate-scale-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:w-[55%]">
              {skills.map((item, index) => (
                <div key={item.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card
                    className="inline-block flex-col max-w-44 mb-6 last:mb-0 hover:bg-background/80"
                    delay={index * 0.1}
                  >
                    <p className="p-3 border-b border-secondary/20 font-semibold text-white">{item.title}</p>
                    <div className="text-secondary p-3 flex flex-wrap gap-2">
                      {item.name.map((name) => (
                        <span
                          key={name}
                          className="text-sm px-2 py-1 bg-secondary/10 rounded-md hover:bg-primary/20 hover:text-primary transition-colors cursor-default hover-scale"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* about-me */}
      <section className="py-20 scroll-animate" id="about-me">
        <div className="max-w-7xl mx-auto px-4">
          <Title id="about-me" className="mb-16 text-center">
            <span className="animate-fade-in stagger-1">
              About Me
            </span>
          </Title>

          <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
            <div className="text-secondary space-y-6 lg:w-1/2 animate-slide-in-left">
              <p className="text-xl font-semibold text-white animate-fade-in stagger-1">
                Hello, I'm Parth!
              </p>

              <p className="leading-relaxed animate-fade-in stagger-2">
                I'm a self-taught front-end developer based in Kangra, H.P, India.
                I can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences.
              </p>

              <p className="leading-relaxed animate-fade-in stagger-3">
                Transforming my creativity and knowledge into websites has been
                my passion for over a year. I have been helping various clients to
                establish their presence online. I always strive to learn about
                the newest technologies and frameworks.
              </p>

              <div className="animate-fade-in stagger-4">
                <Button variant="outline" size="lg">
                  Read more <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative lg:w-1/2 animate-slide-in-right">
              <div className="relative hover-scale transition-transform duration-300">
                <Image
                  src="/images/parth-hero.png"
                  alt="Parth Sharma"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-400/20 blur-xl animate-glow-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contacts */}
      <section className="py-20 scroll-animate" id="contacts">
        <div className="max-w-7xl mx-auto px-4">
          <Title id="contacts" className="mb-16 text-center">
            <span className="animate-fade-in stagger-1">
              Get In Touch
            </span>
          </Title>

          <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
            <div className="max-w-lg text-secondary lg:w-1/2 animate-slide-in-left">
              <p className="text-lg leading-relaxed animate-fade-in stagger-1">
                I'm interested in freelance opportunities. However, if you have
                other request or question, don't hesitate to contact me
              </p>
            </div>

            <div className="lg:w-1/2 animate-slide-in-right">
              <div className="p-8 border border-secondary/30 rounded-2xl bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 max-w-md hover-lift">
                <p className="mb-6 text-xl font-semibold text-white animate-fade-in stagger-1">
                  Message me here!
                </p>

                <div className="space-y-4 animate-fade-in stagger-2">
                  <a
                    href="mailto:parthinteract@gmail.com"
                    className="text-secondary flex items-center gap-3 hover:text-primary transition-colors hover-scale"
                  >
                    <Mail className="w-5 h-5" />
                    <span>parthinteract@gmail.com</span>
                  </a>

                  <a
                    href="tel:+91-7876800210"
                    className="text-secondary flex items-center gap-3 hover:text-primary transition-colors hover-scale"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91-7876800210</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
