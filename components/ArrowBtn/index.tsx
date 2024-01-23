"use client"

interface Props {
  direction: 'up' | 'down' | 'left' | 'right';
  color?: string;
  cb?: () => void;
}

const ArrowBtn = ({ direction, color = 'black', cb = ()=> null }: Props) => {
  const getRotation = (direction: string) => {
    switch (direction) {
      case 'up':
        return '-rotate-90';
      case 'right':
        return '';
      case 'down':
        return 'rotate-90';
      case 'left':
        return 'rotate-180';
      default:
        return '';
    }
  };

  return (
    <div className={`w-8 h-10 flex items-center justify-center ${getRotation(direction)}`} onClick={() => cb()}  role="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="14" viewBox="0 0 4 14">
        <path d="M0 0 L4 7 L0 14" fill="none" stroke={color} strokeWidth="1" />
      </svg>
    </div>
  );
};

export default ArrowBtn;
