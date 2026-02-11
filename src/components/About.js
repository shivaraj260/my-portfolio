import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <h2 className="about-title">About Me</h2>

        <div className="about-grid">

          {/* LEFT SIDE TEXT */}
          <div className="about-text">
            <p>
              I am a React.js Application Developer with over 3 years of
              professional experience building scalable, high-performance
              web and mobile applications. Currently working as a
              Software Engineer – Frontend at TECHVERVE SOLUTIONS PVT LTD.
            </p>

            <p>
              My expertise includes developing modular and reusable UI
              components using React.js, TypeScript, and Redux,
              implementing secure authentication and role-based access
              control (RBAC), and integrating real-time updates using Firebase.
            </p>

            <p>
              I specialize in performance optimization, efficient state
              management, and delivering responsive, production-ready
              applications while collaborating in Agile / Scrum environments.
            </p>
          </div>

          {/* RIGHT SIDE HIGHLIGHTS */}
          <div className="about-highlights">
            <div className="highlight-card">

              <div className="highlight-item">
                3+ Years of Professional Experience
              </div>

              <div className="highlight-item">
                React.js & TypeScript Expertise
              </div>

              <div className="highlight-item">
                Redux State Management
              </div>

              <div className="highlight-item">
                React Native (Production Experience)
              </div>

              <div className="highlight-item">
                Role-Based Access Control (RBAC)
              </div>

              <div className="highlight-item">
                Firebase Real-Time Integration
              </div>

              <div className="highlight-item">
                Performance Optimization
              </div>

              <div className="highlight-item">
                Agile / Scrum Collaboration
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
