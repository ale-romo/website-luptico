import Image from "next/image";

export interface Props {
  href: string;
  title: string;
  icon?: string;
  bg1?: string;
  bg2?: string;
}

const Cta = ({ href, title, icon, bg1, bg2 }: Props) => (
  <div className={`${bg1 ? bg1 : 'bg-green-300'} rounded-full`}>
    <a href={href} className={`flex flex-col text-white ${bg2 ? bg2 : 'bg-green-400 hover:bg-green-400/80'}  p-3 rounded-full w-24 h-24 sm:w-32 sm:h-32 items-center justify-center text-center gap-2 shadow-2xl text-sm sm:text-base font-bold`}>{title}{icon && <Image src={icon} width="25" height="27" className="w-5 sm:w-7 h-auto" alt={title} />}</a>
  </div>
);
export default Cta;
