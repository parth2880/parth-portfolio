import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Card from "./components/Card";
import Button from "./components/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

type Skill = {
  title: string;
  name: string[];
};

export default function Home() {
  const skills: Skill[] = [
    { title: "Languages", name: ["Javascript", "Typescript"] },
    { title: "Frameworks", name: ["Next.js", "React", "TailwindCSS"] },
    { title: "Databases", name: ["MongoDB", "MySQL"] },
    { title: "Tools", name: ["Figma", "Adobe XD", "FigJam"] },
    { title: "Cloud", name: ["Vercel", "Netlify"] },
  ];
  return (
    <>
      <Hero />

      {/* quote */}
      <div>
        <div className="border border-secondary p-4 md:p-8 max-w-max mx-auto text-xl mdtext-2xl relative mt-28">
          With great power comes great electricity bill
          <span className="p-3 md:p-4 border border-secondary absolute top-full right-0 ">
            -Dr. Who
          </span>
          <Image
            src="/icons/quote.svg"
            alt=""
            className="absolute -translate-y-1/2 top-0 left-2"
            width={42}
            height={29}
          />
          <Image
            src="/icons/quote.svg"
            alt=""
            className="absolute translate-y-1/2 bottom-0 right-2"
            width={42}
            height={29}
          />
        </div>
      </div>

      {/* projects */}
      <>
        <Title id="projects" className="mt-36 mb-12">
          projects
        </Title>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16 md:mb-28 place-content-center">
          <Card className="w-full" body={<>Toolstation</>} primaryLink="https://toolstation.nl/" />
          <Card
            body={<>Vaah.dev</>}
            primaryLink="https://vaah.dev/store/"
            secondaryLink="https://github.com/parth-2880/vaah-store"
          />
          <Card
            body={<>Webreinvent</>}
            primaryLink="https://webreinvent.com/"
          />
        </div>
      </>

      {/* skills */}
      <>
        <Title id="skills" className="mb-12">
          skills
        </Title>
        <div className="flex justify-between gap-8">
          <div className="hidden md:block relative w-[35%]">
            <Image
              src="/icons/dots.svg"
              alt=""
              width={64}
              height={64}
              className="absolute top-0 left-0"
            />
            <Image
              src="/icons/dots.svg"
              alt=""
              width={64}
              height={64}
              className="absolute top-1/2 right-0"
            />
            <Image
              src="/icons/structure1.svg"
              alt=""
              width={113}
              height={113}
              className="absolute bottom-0 left-8"
            />
            <div className="border size-22 absolute -top-8 right-8 border-secondary"></div>
            <div className="border size-16 absolute bottom-8 right-0 border-secondary"></div>
          </div>
          <div className="columns-2 md:columns-3 gap-4 md:gap-8 md:w-[55%]">
            {skills.map((item) => (
              <Card key={item.title} className="inline-block flex-col max-w-44 mb-4 last:mb-0">
                <p className="p-2 border-b">{item.title}</p>
                <div className="text-secondary p-2 flex flex-wrap gap-2">
                  {item.name.map((name) => (
                    <p key={name}>{name}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </>

      {/* about-me */}
      <>
        <Title id="about-me" className="mt-28">
          about-me
        </Title>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 md:*:w-1/2 mt-6">
          <div className="text-secondary space-y-8">
            <p>Hello, i’m Parth! </p>
            <p>
              I’m a self-taught front-end developer based in Kangra, H.P, India.
              I can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <Button>Read more !!</Button>
          </div>
          <div>
            <Image
              src="/images/parth-hero.png"
              alt=""
              width={457}
              height={386}
              className="ml-auto"
            />
          </div>
        </div>
      </>

      {/* contacts */}
      <>
        <Title id="contacts" className="mt-28 mb-12">
          contacts
        </Title>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p className="max-w-lg text-secondary">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>

          <div className="p-4 border border-secondary mb-20 md:mb-40 max-w-max space-y-4">
            <p className="mb-4">Message me here!</p>
            <p className="text-secondary flex items-center gap-2">
              <Icon icon="mdi:email" width={20} height={20} />
              pathinteract@gmail.com
            </p>
            <p className="text-secondary flex items-center gap-2">
              <Icon icon="mdi:phone" width={20} height={20} />
              <a href="tel:+91-7876800210">+91-7876800210</a>
            </p>
          </div>
        </div>
      </>
    </>
  );
}
