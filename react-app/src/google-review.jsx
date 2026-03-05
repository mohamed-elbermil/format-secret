import React, { useEffect, useState } from "react";

const API_KEY = "AIzaSyDPGetBdyuEx-Z5eJA_6ARFexSb8nMcJFM";
const PLACE_ID = "ChIJZcoj47TB9EcRUnQZgVDfTuA";

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  componentDidCatch(error) { this.setState({ error: error.message }); }
  render() {
    if (this.state.error) return <pre style={{color:"red", padding:"20px"}}>{this.state.error}</pre>;
    return this.props.children;
  }
}

function StarRating({ rating }) {
  return (
    <div style={{ color: "#FBBC04", fontSize: "18px" }}>
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </div>
  );
}

function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `/api/places/details/json?place_id=${PLACE_ID}&fields=name,reviews,rating,user_ratings_total&language=fr&key=${API_KEY}`;

    fetch(url)
      .then((res) => {
        console.log("Status:", res.status); // 👈 vérifie le code HTTP
        return res.json();
      })
      .then((data) => {
        console.log("Status API:", data.status);
        console.log("Result:", data.result);
        console.log("Reviews:", data.result?.reviews);
        setReviews(data.result?.reviews || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Impossible de charger les avis : " + err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Chargement des avis...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  if (reviews.length === 0) return <p style={{ textAlign: "center" }}>Aucun avis trouvé.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "sans-serif", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>⭐ Avis clients Google</h2>
      {reviews.map((review, index) => (
        <div key={index} style={{ border: "1px solid #e0e0e0", padding: "20px", marginBottom: "15px", borderRadius: "12px", background: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img src={review.profile_photo_url} alt={review.author_name} style={{ width: "44px", height: "44px", borderRadius: "50%", marginRight: "12px" }} />
            <div>
              <strong style={{ display: "block" }}>{review.author_name}</strong>
              <span style={{ fontSize: "12px", color: "#888" }}>{review.relative_time_description}</span>
            </div>
          </div>
          <StarRating rating={review.rating} />
          <p style={{ marginTop: "10px", color: "#333", lineHeight: "1.6" }}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <GoogleReviews />
    </ErrorBoundary>
  );
}

