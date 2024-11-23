// src/app/components/ProductCard.js
"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./productCard.module.css"; // Import the styles

export default function ProductCard({ id, name, price, image, description }) {
  return (
    <div className={`card ${styles.card}`}>
      <Image
        src={image}
        alt={name}
        className={`card-img-top ${styles.cardImgTop}`}
        width={300}
        height={200}
      />
      <div className="card-body">
        <h5 className={`card-title ${styles.cardTitle}`}>{name}</h5>
        <p className={`card-text ${styles.cardText}`}>{description}</p>
        <p className={`card-text text-primary ${styles.cardText}`}>$ {price}</p>
        <Link
          href={`/products/${id}`}
          className={`btn btn-outline-primary ${styles.btnOutlinePrimary}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
