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

  return <div className="w-full flex p-2 justify-between items-center bg-no-repeat bg-cover px-8 lg:px-20" style={{ backgroundImage: 'url(images/navbar-bg.svg'}}>
    <Link href="/" title="Lúptico" className="-mb-7">
        <Image src="/images/logo-small.svg" alt="Lúptico" height="66" width="86" className="h-auto w-16" />
    </Link>
    <nav className={`w-full z-10 relative flex justify-end gap-6`}>
        {navItems.map(({ href, title, icon }) => (
          <a key={href} href={href} title={title}>
            <Image src={icon} width="40" height="32" className="h-7 w-auto" alt={title} />
          </a>
        ))}
    </nav>
  </div>

}

export default Navbar;
