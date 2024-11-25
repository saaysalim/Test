import React, { useState } from 'react';
// Define the ImageGallery component using TypeScript
const ImageGallery: React.FC = () => {
  // useState hook to manage the current index of the displayed image
  const [index, setIndex] = useState(0);
  // An array of image URLs for the gallery
  const images = [
    './Background.png',
    './OSPF.png',
    './Slide3.PNG',
    // Add more image URLs as needed
  ];
  // Function to go to the next image in the gallery
  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  // Function to go to the previous image in the gallery
  const goToPreviousImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <div>
      {/* Display the current image */}
      <img src={images[index]} alt="Gallery" style={{ maxWidth: '100%', maxHeight: '500px' }} />
      {/* Navigation buttons */}
      <button onClick={goToPreviousImage}>Previous</button>
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
}
export default ImageGallery;
