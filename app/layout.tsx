import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STPETEXO | Hypershell Exoskeleton Rentals',
  description: 'Rent a Hypershell Exoskeleton in Saint Petersburg, FL. Walk further, hike harder, explore more.',
  openGraph: {
    title: 'STPETEXO — Hypershell Exoskeleton Rentals',
    description: 'Rent a powered Hypershell Exoskeleton in Saint Petersburg, FL. Walk further, hike harder, explore more.',
    type: 'website',
    siteName: 'STPETEXO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" rel="stylesheet" />
      </head>
      <body>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">
              <i className="bi bi-lightning-charge-fill text-warning"></i> STPETEXO
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-warning btn-sm text-dark ms-2 px-3" href="/auth/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-warning btn-sm text-dark ms-2 px-3" href="/auth/register">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-dark text-light py-4 mt-5">
          <div className="container text-center">
            <p className="mb-1">
              <i className="bi bi-lightning-charge-fill text-warning"></i> STPETEXO &mdash; Hypershell Exoskeleton Rentals
            </p>
            <p className="mb-1 text-secondary">Saint Petersburg, Florida</p>
            <p className="mb-0 text-secondary small">
              &copy; 2026 STPETEXO. All rights reserved. &mdash;
              <a href="/contact" className="text-secondary"> Contact</a> &mdash;
              <a href="/terms" className="text-secondary"> Terms &amp; Conditions</a>
            </p>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
