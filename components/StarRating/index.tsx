interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const maxRating = 5;

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={index < rating ? '#FFD700' : 'none'} stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
