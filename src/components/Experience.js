import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <h2 className="experience-title">
          Professional Experience
        </h2>

        <div className="experience-card">

          <div className="role-title">
            Software Engineer – Frontend
          </div>

          <div className="company-duration">
            TECHVERVE SOLUTIONS PVT LTD | Dec 2022 – Present | Bangalore, India
          </div>

          <ul className="responsibility-list">

            <li className="responsibility-item">
              Developed and maintained large-scale React.js and React Native applications using TypeScript and Redux.
            </li>

            <li className="responsibility-item">
              Built reusable, modular UI components following clean architecture and best practices.
            </li>

            <li className="responsibility-item">
              Implemented authentication, authorization, and role-based access control (RBAC).
            </li>

            <li className="responsibility-item">
              Integrated REST APIs and optimized frontend-backend communication.
            </li>

            <li className="responsibility-item">
              Implemented real-time updates and notifications using Firebase.
            </li>

            <li className="responsibility-item">
              Improved application performance using memoization, lazy loading, and optimized state management.
            </li>

            <li className="responsibility-item">
              Delivered responsive and cross-browser compatible production applications.
            </li>

            <li className="responsibility-item">
              Collaborated with backend and QA teams in Agile / Scrum environments.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
}
