interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const maxRating = 5;
  const ratingFloor = Math.floor(rating)
  const decimal = (rating - ratingFloor) * 70 + 15;

  const getWidth = (i: number, decimal: number) => {
    if(i > ratingFloor) return 0;
    if(i < ratingFloor) return '100%';
    return `${decimal}%`
  }

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
          <clipPath id={`star-clip-${index}`}>
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6 0z" fill="none" stroke="#FFF" />
          </clipPath>
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6 0z" fill="none" stroke="#FFF" />
          <rect width={getWidth(index, decimal)} height="100%" fill="#FFF"clipPath={`url(#star-clip-${index})`} />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
