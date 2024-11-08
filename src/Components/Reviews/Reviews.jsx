import React from "react";
import img1 from "/assets/img/customer/img1.jpg";
import img2 from "/assets/img/customer/girl.jpg";
import img3 from "/assets/img/customer/ind.jpg";

const reviews = [
  {
    name: "David",
    image: img1, 
    review:"Travel with Sri Lanka provided an unforgettable experience! From the moment I booked my trip, their customer service was exceptional. The team was responsive and attentive to my needs, ensuring every detail was taken care of. Exploring the diverse landscapes and vibrant culture was a dream come true, and I felt completely supported throughout the journey. I highly recommend them to anyone looking to explore this beautiful country!",
    location: "USA",
  },
  {
    name: "Jenifer",
    image: img2, 
    review:"I had an amazing time with Travel with Sri Lanka! Their commitment to customer satisfaction truly set them apart. The itinerary was perfectly tailored to my interests, and the guides were knowledgeable and friendly, making each destination come alive. I especially appreciated their quick responses to my questions before and during the trip. The entire experience was seamless, and I can't wait to return!",
    location: "UK",
  },
  {
    name: "Sharma",
    image: img3, 
    review:
"Travel with Sri Lanka exceeded all my expectations! The attention to detail in planning my trip was remarkable. The staff went above and beyond to ensure I had a fantastic experience, from arranging unique activities to providing insider tips on local culture. Every moment was enjoyable, and I felt valued as a traveler. Thank you for an incredible journey—I’ll be recommending you to everyone!",    location: "India",
  },
];

const ReviewCard = () => {
  return (
    <section className="bg-white py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-amber-500 text-center mb-10">
          What Our Travelers Say
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border-2 border-amber-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{review.location}</p>
              <p className="text-gray-600 text-sm md:text-base">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCard;
