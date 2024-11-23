// src/app/components/HeroSection.js
import Link from "next/link";
import Image from "next/image";
import styles from "./heroSection.module.css"; // Assuming you'll add styles later

export default function HeroSection() {
  return (
    <section className={`hero ${styles.hero}`}>
      <div className="container text-center">
        <div className="heroContent">
          <h1>Welcome to Smart Yoga</h1>
          <p>Your journey to a smarter, healthier practice begins here.</p>
          <Link href="/products" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
        <div className="heroImage">
          <Image
            src="/images/hero-image.jpg" // Add a suitable image
            alt="Hero Image"
            width={800}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
