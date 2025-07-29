import { Row, Col, Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #e6f7ff 0%, #f9f0ff 100%)", // Light blue → lavender gradient
        color: "#222",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2} style={{ color: "#722ed1" }}> {/* Purple title */}
          🚀 Projects
        </Title>
        <Paragraph style={{ color: "#434343", fontSize: "16px" }}>
          Some of the applications I’ve worked on.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {/* Project 1 */}
        <Col xs={24} md={12}>
          <Card
            title="🔹 All-in-One Billing Software"
            bordered={false}
            style={{
              background: "#ffffff", // White card
              color: "#222222",
              borderRadius: "12px",
              minHeight: "220px",
              boxShadow: "0 6px 16px rgba(114, 46, 209, 0.15)", // Soft purple shadow
            }}
            headStyle={{ color: "#722ed1" }} // Purple heading
          >
            <Paragraph>
              A desktop billing & invoicing software built with{" "}
              <b>VB.NET + SQL Server</b>, designed for multiple industries.
            </Paragraph>
            <ul style={{ color: "#595959", paddingLeft: "20px" }}>
              <li>Supports inventory, discounts, and reporting</li>
              <li>Customer & supplier management</li>
              <li>Invoice & receipt generation</li>
            </ul>
          </Card>
        </Col>

        {/* Project 2 */}
        <Col xs={24} md={12}>
          <Card
            title="🔹 B-Trac Billing Software"
            bordered={false}
            style={{
              background: "#ffffff",
              color: "#222222",
              borderRadius: "12px",
              minHeight: "220px",
              boxShadow: "0 6px 16px rgba(24, 144, 255, 0.15)", // Soft blue shadow
            }}
            headStyle={{ color: "#722ed1" }} // Blue heading
          >
            <Paragraph>
              A billing system developed using{" "}
              <b>PHP, Java, Apache Server, and SQL</b>.
            </Paragraph>
            <ul style={{ color: "#595959", paddingLeft: "20px" }}>
              <li>Multi-user billing system</li>
              <li>Role-based access control</li>
              <li>Real-time reporting</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
