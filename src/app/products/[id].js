// src/app/pages/products/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query; // Extract the product ID from the route
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false); // State to track errors

  useEffect(() => {
    if (!id) return; // Prevent fetching before ID is available

    // Fetch product details from the API
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === parseInt(id));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(true); // Set error state if product is not found
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(true); // Set error state for API issues
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <h2>Product Not Found</h2>
        <p>We couldn't find the product you're looking for.</p>
        <Link href="/products" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">Price: ${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary">Add to Cart</button>
          <Link href="/products" className="btn btn-secondary ml-2">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
