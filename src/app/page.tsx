import Image from "next/image";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Card from "./components/Card";

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
        <Card body={<>Minecraft servers hosting </>} />
        <Card body={<>Minecraft servers hosting </>} />
        <Card body={<>Minecraft servers hosting </>} />
      </div>
      <Title>skills</Title>


      <Title>about-me</Title>
      
      
      <Title>contacts</Title>
    </>
  );
}
