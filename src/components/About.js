import { Row, Col, Avatar, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "80px 20px", background: "#f9fafb" }}
    >
      <Row justify="center" align="middle" gutter={[40, 40]}>
        {/* Profile Image */}
        <Col xs={24} md={8} style={{ textAlign: "center" }}>
          <Avatar
            size={200}
            src="/images/download.jfif"
            style={{
              border: "4px solid #1890ff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            }}
          />
        </Col>

        {/* About Content */}
        <Col xs={24} md={12}>
          <div>
            {/* <Title level={2} style={{ color: "#1890ff", marginBottom: "20px" }}>
              Hi, I'm Shivaraj N
            </Title> */}
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.8", color: "#374151" }}>
              Passionate <b>Full-Stack Developer</b> with experience in building{" "}
              <b>desktop, web, and mobile applications</b>.  
              I enjoy solving real-world problems using modern technologies and 
              creating efficient, scalable solutions.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </section>
  );
}
