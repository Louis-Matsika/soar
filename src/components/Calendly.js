import React from 'react';

const Calendly = () => {
  return (
    <div style={{ height: "800px" }}>
      <iframe title="calendly embed"
        src="https://calendly.com/free-flo/growth-demo?hide_gdpr_banner=1"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;