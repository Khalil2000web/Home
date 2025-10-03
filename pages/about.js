export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <div className="page-title">
        <h1>About Khaliil</h1>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <p>
          Welcome to Khaliil's official website! Here you'll find media, projects, and
          creative work from around the world. Khaliil is passionate about capturing
          moments and sharing them with you.
        </p>
        <p>
          This website showcases galleries, videos, and unique experiences from each journey.
          Stay tuned for new content and updates!
        </p>
      </div>

      {/* Page CSS */}
      <style jsx>{`
        .about-page {
          background-color: black;
          color: white;
          min-height: 100vh;
          padding: 50px 20px;
          font-family: Arial, sans-serif;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 50px;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        p {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
