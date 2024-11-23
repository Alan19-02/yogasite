import Link from "next/link";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      {/* Hero Section */}
      <div className="container text-center py-5">
        <div className={styles.heroContent}>
          <h1 className="display-4">Welcome to Smart Yoga Store</h1>
          <p className="lead mt-3">
            Experience the future of yoga with our innovative smart yoga
            products designed to elevate your practice.
          </p>
          <div className="mt-4">
            <Link href="/products" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/yoga-hero.jpg"
            alt="Smart Yoga Products"
            width={800}
            height={400}
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Key Features Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <Image
              src="/images/yoga-mat.jpg"
              alt="Smart Mats"
              width={200}
              height={200}
              className="rounded-circle"
            />
            <h5 className="mt-3">Smart Yoga Mats</h5>
            <p>Track your progress with our tech-enabled yoga mats.</p>
          </div>
          <div className="col-md-4 text-center">
            <Image
              src="/images/yoga-app.jpg"
              alt="Interactive App"
              width={190}
              height={190}
              className="rounded-circle"
            />
            <h5 className="mt-3">Interactive App</h5>
            <p>Get real-time feedback on your poses and flows.</p>
          </div>
          <div className="col-md-4 text-center">
            <Image
              src="/images/eco-yoga.jpg"
              alt="Sustainability"
              width={140}
              height={140}
              className="rounded-circle"
            />
            <h5 className="mt-3">Sustainable Materials</h5>
            <p>Eco-friendly products designed for mindful living.</p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/images/yoga-mat.jpg"
                alt="Yoga Mat Pro"
                width={400}
                height={300}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Yoga Mat Pro</h5>
                <p className="card-text">
                  The ultimate smart yoga mat for pros.
                </p>
                <Link href="/products/1" className="btn btn-outline-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image
                src="/images/yoga-watch.jpg"
                alt="Yoga Tracker Watch"
                width={400}
                height={300}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Yoga Tracker Watch</h5>
                <p className="card-text">Track every move with precision.</p>
                <Link href="/products/2" className="btn btn-outline-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container py-5 bg-light">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <blockquote className="blockquote text-center">
          <p>"The Smart Yoga Mat has completely transformed my practice!"</p>
          <footer className="blockquote-footer">Jane Doe</footer>
        </blockquote>
        <blockquote className="blockquote text-center">
          <p>
            "I love the sustainable materials and the app's interactive
            features."
          </p>
          <footer className="blockquote-footer">John Smith</footer>
        </blockquote>
      </div>

      {/* Newsletter Signup */}
      <div className="container text-center py-5">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for updates, tips, and exclusive offers.
        </p>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            className={styles.newsletterInput}
            placeholder="Enter your email"
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
