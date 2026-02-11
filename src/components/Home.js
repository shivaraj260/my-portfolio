import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">

        <div className="home-text">
          <h1>Shivaraju N</h1>

          <h2>
            React.js Application Developer | Frontend Engineer
          </h2>

          <p>
            React.js Application Developer with 3+ years of experience building
            scalable, high-performance web and mobile applications using
            React.js, TypeScript, Redux, React Native, and REST APIs.
            Specialized in role-based access control, real-time Firebase
            integrations, and performance optimization.
          </p>

          <div className="button-group">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>
        </div>

        <div className="home-image">
          <img src="/profile.jpg" alt="Shivaraju N" />
        </div>

      </div>
    </section>
  );
}
