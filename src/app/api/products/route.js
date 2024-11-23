// src/app/api/products/route.js

export async function GET(req) {
  const mockProducts = [
    {
      id: 1,
      name: "Smart Yoga Mat",
      price: 120,
      image: "/images/yoga-mat.jpg",
      description: "A smart yoga mat with posture detection.",
    },
    {
      id: 2,
      name: "Yoga Tracker Watch",
      price: 150,
      image: "/images/yoga-watch.jpg",
      description: "Tracks your yoga sessions and health metrics.",
    },
    {
      id: 3,
      name: "Posture Corrector",
      price: 50,
      image: "/images/posture-corrector.jpg",
      description: "Improves posture during yoga practices.",
    },
  ];

  return new Response(JSON.stringify(mockProducts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
