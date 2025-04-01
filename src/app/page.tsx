import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Card from "./components/Card";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <div className="border border-secondary p-8 max-w-max mx-auto text-2xl relative mt-28">
          With great power comes great electricity bill
          <span className="p-4 border border-secondary absolute top-full right-0 ">
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
      <Title className="mt-36 mb-12">projects</Title>
      <div className="grid grid-cols-3 gap-4 mb-28">
        <Card body={<>Toolstation</>} primaryLink="https://toolstation.nl/" />
        <Card
          body={<>Vaah.dev</>}
          primaryLink="https://vaah.dev/store/"
          secondaryLink="https://github.com/parth-2880/vaah-store"
        />
        <Card body={<>Webreinvent</>} primaryLink="https://webreinvent.com/" />
      </div>

      <Title className="mb-12">skills</Title>
      <div className="flex justify-between gap-8">
        <div className="relative w-[35%]">
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
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <Card className="inline-block flex-col max-w-44">
              <p className="p-2 border-b">Languages</p>
              <div className="text-secondary p-2 flex flex-wrap gap-2">
                <p>Typescript</p>
                <p>Typescript</p>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <Card className="inline-block flex-col max-w-44">
              <p className="p-2 border-b">Languages</p>
              <div className="text-secondary p-2 flex flex-wrap gap-2">
                <p>Typescript</p>
                <p>Typescript</p>
              </div>
            </Card>
            <Card className="inline-block flex-col max-w-44">
              <p className="p-2 border-b">Languages</p>
              <div className="text-secondary p-2 flex flex-wrap gap-2">
                <p>Typescript</p>
                <p>Typescript</p>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <Card className="inline-block flex-col max-w-44">
              <p className="p-2 border-b">Languages</p>
              <div className="text-secondary p-2 flex flex-wrap gap-2">
                <p>Typescript</p>
                <p>Typescript</p>
              </div>
            </Card>
            <Card className="inline-block flex-col max-w-44">
              <p className="p-2 border-b">Languages</p>
              <div className="text-secondary p-2 flex flex-wrap gap-2">
                <p>Typescript</p>
                <p>Typescript</p>
              </div>
            </Card>
            <Card className="inline-block flex-col max-w-44">
              <p className="p-2 border-b">Languages</p>
              <div className="text-secondary p-2 flex flex-wrap gap-2">
                <p>Typescript</p>
                <p>Typescript</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Title className="mt-28">about-me</Title>
      <div className="flex justify-between gap-4 *:w-1/2 mt-6">
        <div className="text-secondary space-y-8">
          <p>Hello, i’m Elias! </p>
          <p>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
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

      <Title className="mt-28 mb-12">contacts</Title>
      <div className="flex justify-between">
        <p className="max-w-lg text-secondary">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>

        <div className="p-2 border border-secondary mb-40">
          <p>Message me here!</p>
          <p className="text-secondary">pathinteract@gmail.com</p>
        </div>
      </div>
    </>
  );
}
