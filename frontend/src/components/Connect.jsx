import React from 'react';

const Connect = () => {
  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Any where, Any City, 4521</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>+91-9482453xxx</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>nivfeb19@gmail.com</p>
        </div>
      </div>
    </div> // ✅ This was missing
  );
};

export default Connect;