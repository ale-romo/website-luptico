"use client"
import Link from "next/link";
import Image from "next/image";

interface navItem {
  href: string;
  title: string;
  icon: string;
}

interface Props {
  navItems: navItem[];
}

const Navbar = ({ navItems }: Props) => {

  return <div className="w-full flex py-1 md:py-2 justify-between items-center px-3 sm:px-8 lg:px-20  bg-gradient-to-b from-white to-transparent from-50% relative">
    <Image src="/images/navbar-bg.svg" width="1195" height="62" alt="" className="w-full h-full absolute top-0 left-0 block" />
    <Link href="/" title="Lúptico" className="sm:-mb-5 md:-mb-8 z-10">
        <Image src="/images/logo-small.svg" alt="Lúptico" height="66" width="86" className="h-auto w-12 md:w-16" />
    </Link>
    <nav className={`w-full z-10 relative flex justify-end gap-6`}>
        {navItems.map(({ href, title, icon }) => (
          <a key={href} href={href} title={title}>
            <Image src={icon} width="40" height="32" className="h-5 md:h-7 w-auto" alt={title} />
          </a>
        ))}
    </nav>
  </div>

}

export default Navbar;
