import Image from "next/image";

export interface Props {
  href: string;
  title: string;
  icon?: string;
  bg?: string;
}

const Cta = ({ href, title, icon }: Props) => (
  <a href={href} className="flex flex-col text-white bg-green-400 rounded-full w-36 h-36 items-center justify-center text-center gap-2 shadow-2xl">{title}{icon && <Image src={icon} width="25" height="27" className="w-8 h-auto" alt={title} />}</a>
);
export default Cta;
