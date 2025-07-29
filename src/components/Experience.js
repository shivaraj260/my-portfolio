import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Experience() {
  const experiences = [
    {
      title: "🚀 Worked on multiple enterprise-level applications",
      description:
        "Using React, Node.js, SQL, and Flutter for scalable, high-performance solutions.",
      color: "#1890ff",
    },
    {
      title: "⚡ Designed and deployed apps",
      description:
        "Hands-on experience with frontend & backend architecture, delivering production-ready software.",
      color: "#52c41a",
    },
    {
      title: "🌍 Cross-platform development",
      description:
        "Built responsive web & mobile applications for real-world use cases.",
      color: "#722ed1",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "80px 20px",
         background: "linear-gradient(135deg, #e0eafc, #cfdef3)", // light gradient
        color: "#333",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#1890ff" }}>
          💼 Professional Experience
        </Title>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {experiences.map((exp, index) => (
          <Col xs={24} md={8} key={index}>
            <div
              style={{
                background: "#ffffffff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Paragraph
                strong
                style={{ fontSize: "16px", color: exp.color, marginBottom: 10 }}
              >
                {exp.title}
              </Paragraph>
              <Paragraph style={{ fontSize: "14px", color: "#555" }}>
                {exp.description}
              </Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
