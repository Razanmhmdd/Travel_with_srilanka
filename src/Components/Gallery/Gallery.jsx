import React from 'react';


const Gallery = () => {
  const images = [
    { id: 1, url: '/assets/img/na1.jpeg', alt: 'Image 1' },
    { id: 2, url: '/assets/img/na2.jpeg', alt: 'Image 2' },
    { id: 3, url: '/assets/img/na3.jpeg', alt: 'Image 3' },
    { id: 4, url: '/assets/img/na4.jpeg', alt: 'Image 4' },
    { id: 5, url: '/assets/img/na5.jpeg', alt: 'Image 5' },
    { id: 6, url: '/assets/img/na6.jpeg', alt: 'Image 6' },
    { id: 7, url: '/assets/img/na7.jpg', alt: 'Image 7' },
    { id: 8, url: '/assets/img/na8.jpg', alt: 'Image 8' },
    { id: 9, url: '/assets/img/na9.jpeg', alt: 'Image 8' },
    { id: 10, url: '/assets/img/na10.jpeg', alt: 'Image 8' },
    { id: 11, url: '/assets/img/11.jpeg', alt: 'Image 8' },
    { id: 12, url: '/assets/img/12.jpeg', alt: 'Image 8' },
    { id: 13, url: '/assets/img/13.jpeg', alt: 'Image 8' },
    { id: 14, url: '/assets/img/14.jpeg', alt: 'Image 8' },
    { id: 15, url: '/assets/img/15.jpeg', alt: 'Image 8' },
    { id: 16, url: '/assets/img/16.jpeg', alt: 'Image 8' },
    { id: 17, url: '/assets/img/17.jpeg', alt: 'Image 8' },
    // Add more images as needed
  ];

  return (
    <section className="px-6 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-amber-500">GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image,index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-amber-200">
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

