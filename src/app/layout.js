import "../app/globals.css"; // Global styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import Link from "next/link";

export const metadata = {
  title: "Smart Yoga Store",
  description: "Your one-stop shop for smart yoga products.",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>
        {/* Header */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link href="/" className="navbar-brand">
                Smart Yoga
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/products" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/admin" className="nav-link">
                      Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container my-5">{children}</main>

        {/* Footer */}
        <footer className="bg-light py-4">
          <div className="container text-center">
            <p>&copy; 2024 Smart Yoga. All Rights Reserved.</p>
            <div>
              <Link href="#" className="text-dark me-3">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="text-dark me-3">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="text-dark">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
