import Image from "next/image";

const Header = () => {
  return <section className="w-full flex flex-col justify-center max-w-scree-xl p-8 lg:p-20 pb-0">
    <div className="relative flex flex-col justify-center mb-2">
      <Image src="/images/header-bg.webp" priority width="1110" height="420" className="w-full h-auto" alt="Lúptico" />
      <div className="bg-white rounded-t-full p-10 pb-0 w-56 absolute left-1/2  -translate-x-1/2 bottom-0">
        <Image src="/images/logo.svg" width="348" height="206" className="w-full h-auto" alt="Lúptico" />
      </div>
    </div>
    <div className="relative">
      <h4 className="absolute w-full top-0 right-0 pt-5 text-green-500 text-xs md:text-baste lg:text-4xl uppercase text-right">Cabañas rústicas y jardin de eventos</h4>
      <Image src="/images/brand.svg" width="401" height="88" className="w-full h-auto" alt="Lúptico" />
      <h4 className=" pt-5 text-green-500 text-xs md:text-baste lg:text-4xl uppercase text-left">En el corazón del Valle de Guadalupe</h4>
      <p className="text-orange-500 absolute right-0 bottom-0 -rotate-12 text-7xl sacramento">Pet Friendly</p>
    </div>
  </section>

}

export default Header;
