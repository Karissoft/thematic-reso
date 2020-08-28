import React from 'react';

const LocationMap = () => {
    return (
        <div className="location_wrapper">
         <iframe src="https://www.google.com/maps/d/embed?mid=1M-B_QUb9Mpu58uDs5X7kVZb9vGM"
         style={{borderRadius: '10px'}}
         title="/"
          width="100%"
           height="480"
           frameBorder="0"
           allowFullScreen
           >       
           </iframe>
           <div className="location_tag">
               <div>Location</div>
           </div>
        </div>
    );
};

export default LocationMap;