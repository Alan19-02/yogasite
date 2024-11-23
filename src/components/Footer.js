// src/app/components/Footer.js
import Link from "next/link";
import styles from "./footer.module.css"; // Assuming you'll add styles later

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <p>&copy; 2024 Smart Yoga. All rights reserved.</p>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
