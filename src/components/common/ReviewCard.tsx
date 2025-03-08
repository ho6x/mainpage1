interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userImage?: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-OM', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={review.userImage || 'https://via.placeholder.com/100?text=User'}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900">{review.userName}</h4>
            <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
          </div>
          
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-xl ${
                  index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          
          <p className="text-gray-700">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
