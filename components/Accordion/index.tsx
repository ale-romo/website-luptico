import { useRef, useState } from "react";
import ArrowBtn from "../ArrowBtn";

interface Item {
  title: string;
  content: string;
}

interface Props {
  items: Item[];
}

interface ItemProps {
  content: string;
  isOpen: boolean;
}

const AccordionItem = ({ content, isOpen }: ItemProps) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={contentHeight}
      className={`transition-all duration-300 ease-in-out overflow-hidden`}
      style={{ height: isOpen ? contentHeight?.current?.scrollHeight : 0 }}
    >
      <p className="mb-8">{content}</p>
    </div>
  );
};

const Accordion = ({ items }: Props) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  return (
    <>
      {items.map(({ title, content }, i) => {
        return (
        <div key={i} className="border-b-blue-800 border-b-2 first:border-t-blue-800 first:border-t-2">
          <button onClick={() => setIsOpen(isOpen !== i ? i : null)} className="w-full flex justify-between items-center">
            <h3>{title}</h3><ArrowBtn direction={isOpen === i ? 'up' : 'down'} />
          </button>
          <AccordionItem content={content} isOpen={isOpen === i}/>
        </div>
      )})}
    </>
  );
};

export default Accordion;
