export default function Home() {
  const slots = [
    { name: '1 Hour', price: 25, duration_minutes: 60 },
    { name: '2 Hours', price: 45, duration_minutes: 120 },
    { name: 'Half Day', price: 80, duration_minutes: 240 },
    { name: 'Full Day', price: 140, duration_minutes: 480 },
  ];

  const features = [
    'Reduces fatigue by up to 60%',
    'Lightweight and easy to wear',
    'Perfect for tours, trails, and exploration',
    'No experience needed — 5 minute fitting* (38" max waist restriction)',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Experience the Future of Mobility</h1>
          <p className="lead mb-4">
            Rent a Hypershell Exoskeleton in Saint Petersburg, FL. Walk further, hike harder, explore more.
          </p>
          <a href="/auth/register" className="btn btn-warning btn-lg px-5 fw-bold">
            <i className="bi bi-lightning-charge-fill"></i> Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">What is Hypershell?</h2>
              <p className="text-secondary">
                The Hypershell Exoskeleton is a wearable powered device that augments your natural walking and hiking
                ability. Whether you're exploring the Pinellas Trail, touring downtown St. Pete, or tackling an outdoor
                adventure, the Hypershell gives you extra power and endurance.
              </p>
              <ul className="list-unstyled">
                {features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    <i className="bi bi-check-circle-fill text-success"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/images/X_GO_1_480x.webp"
                alt="Hypershell Exoskeleton"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Rental Pricing</h2>
          <div className="row g-4 justify-content-center">
            {slots.map((slot, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="card h-100 text-center shadow-sm border-0 pricing-card">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{slot.name}</h5>
                    <p className="display-5 fw-bold text-warning my-3">${slot.price.toFixed(2)}</p>
                    <p className="text-secondary">{slot.duration_minutes} minutes</p>
                    <div className="mt-auto">
                      <a href="/auth/register" className="btn btn-outline-dark">
                        Sign Up to Book
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">How It Works</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mb-3">
                <i className="bi bi-person-plus-fill display-4 text-warning"></i>
              </div>
              <h5 className="fw-bold">1. Create an Account</h5>
              <p className="text-secondary">Sign up in seconds with your name, email, and phone number.</p>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <i className="bi bi-calendar-event display-4 text-warning"></i>
              </div>
              <h5 className="fw-bold">2. Pick a Date & Time</h5>
              <p className="text-secondary">Choose your preferred date, rental duration, and start time.</p>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <i className="bi bi-lightning-charge display-4 text-warning"></i>
              </div>
              <h5 className="fw-bold">3. Gear Up & Go</h5>
              <p className="text-secondary">Show up, get fitted in 5 minutes, and start your powered adventure.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
