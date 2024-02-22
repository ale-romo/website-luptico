import Image from "next/image";

const Hero = () => {
  return <section className="w-full flex flex-col justify-center max-w-screen-xl p-3 md:p-8 lg:p-20">
    <div className="relative flex flex-col justify-center mb-1 md:mb-2">
      <Image src="/images/header-bg.webp" priority width="1110" height="420" className="w-full h-auto" alt="Lúptico" />
      <div className="bg-white rounded-t-full p-3 sm:p-6 lg:p-10 pb-0 w-24 sm:w-40 lg:w-56 absolute left-1/2  -translate-x-1/2 bottom-0">
        <Image src="/images/logo.svg" width="348" height="206" className="w-full h-auto" alt="Lúptico" />
      </div>
    </div>
    <div className="relative">
      <h4 className="flex absolute w-full top-0 right-0 pt-1 sm:pt-3 xl:pt-5 text-green-500 uppercase text-[4vw] sm:text-[3vw] lg:text-[2.7vw] xl:text-4xl justify-end">Cabañas rústicas y jardin <span className="hidden sm:flex">de eventos</span></h4>
      <Image src="/images/brand.svg" width="401" height="88" className="w-full h-auto" alt="Lúptico" />
      <h4 className="flex pt-1 sm:pt-3 xl:pt-5 text-green-500 uppercase text-[4vw] sm:text-[3vw] lg:text-[2.7vw] xl:text-4xl text-left">En el <span className="hidden sm:flex">corazón del</span> Valle de Guadalupe</h4>
      <p className="text-orange-500 absolute right-0  bottom-0 -rotate-12 text-[8vw] sm:text-[7vw] md:text-[6vw] xl:text-7xl  font-display">Pet Friendly</p>
    </div>
  </section>

}

export default Hero;
