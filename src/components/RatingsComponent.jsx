import React, { useState, useEffect } from 'react';

const RatingsComponent = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    // Make a GET request to your custom API endpoint
    fetch('https://your-wordpress-site.com/wp-json/your-custom-endpoint')
      .then((response) => response.json())
      .then((data) => setRatings(data))
      .catch((error) => console.error('Error fetching ratings data: ', error));
  }, []);

  return (
    <div>
      <h2>Ratings</h2>
      <ul>
        {ratings.map((rating) => (
          <li key={rating.post_id}>
            <strong>{rating.post_title}</strong>: {rating.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingsComponent;