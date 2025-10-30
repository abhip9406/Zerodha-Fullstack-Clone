import React from "react";

const Apps = () => {
  const apps = [
    {
      name: "Console",
      description: "Analytics and reports for your trades and portfolio.",
      image: process.env.PUBLIC_URL + "/media/images/console.png",
    },
    {
      name: "Coin",
      description: "Direct mutual fund platform for long-term investments.",
      image: process.env.PUBLIC_URL + "/media/images/coin.png",
    },
    {
      name: "Kite Connect",
      description: "Trading APIs for developers and algo traders.",
      image: process.env.PUBLIC_URL + "/media/images/kite.png",
    },
    {
      name: "Varsity",
      description: "Market education platform with in-depth tutorials.",
      image: process.env.PUBLIC_URL + "/media/images/varsity.png",
    },
  ];

  return (
    <div className="p-5">
      <h2 className="fw-bold mb-4 text-center">Our Products</h2>
      <div className="row g-4 justify-content-center">
        {apps.map((app, index) => (
          <div key={index} className="col-md-5 col-lg-3">
            <div className="card shadow-sm border-0 h-100 text-center">
              <img
                src={app.image}
                alt={app.name}
                className="card-img-top p-3"
                style={{ height: "120px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{app.name}</h5>
                <p className="card-text text-muted small">{app.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
