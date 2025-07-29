import { Row, Col, Card, Typography, Form, Input, Button, message } from "antd";
import { LinkedinOutlined, GithubOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Paragraph, Link } = Typography;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    message.success("✅ Message sent successfully! (You can integrate EmailJS or backend here)");
    form.resetFields();
  };

  return (
    <section
      id="contact"
      style={{
        padding: "50px 15px", // smaller section padding
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <Title level={3} style={{ color: "#0077b6", marginBottom: "6px" }}>
          📫 Get in Touch
        </Title>
        <Paragraph style={{ fontSize: "13px", color: "#555" }}>
          Let’s connect! You can find me on social platforms or send me a direct message below.
        </Paragraph>
      </div>

      <Row gutter={[16, 16]} justify="center" align="top">
        {/* Left Side: Contact Info Cards */}
        <Col xs={24} md={10}>
          <Row gutter={[12, 12]}>
            {/* LinkedIn */}
            <Col span={24}>
              <Card
                hoverable
                style={{
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  minHeight: "100px",
                }}
              >
                <LinkedinOutlined style={{ fontSize: "22px", color: "#0a66c2" }} />
                <Title level={5} style={{ marginTop: "5px", fontSize: "14px" }}>
                  LinkedIn
                </Title>
                <Link href="https://www.linkedin.com/in/shivaraju-n-564091243" target="_blank" style={{ fontSize: "13px" }}>
                  View Profile
                </Link>
              </Card>
            </Col>

            {/* GitHub */}
            <Col span={24}>
              <Card
                hoverable
                style={{
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  minHeight: "100px",
                }}
              >
                <GithubOutlined style={{ fontSize: "22px", color: "#333" }} />
                <Title level={5} style={{ marginTop: "5px", fontSize: "14px" }}>
                  GitHub
                </Title>
                <Link href="https://github.com/shivaraj260" target="_blank" style={{ fontSize: "13px" }}>
                  shivaraj260
                </Link>
              </Card>
            </Col>

            {/* Email */}
            <Col span={24}>
              <Card
                hoverable
                style={{
                  borderRadius: "8px",
                  textAlign: "center",
                  padding: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  minHeight: "100px",
                }}
              >
                <MailOutlined style={{ fontSize: "22px", color: "#d93025" }} />
                <Title level={5} style={{ marginTop: "5px", fontSize: "14px" }}>
                  Email
                </Title>
                <Paragraph style={{ marginBottom: 0, fontSize: "13px" }}>
                  <a href="mailto:shivrajsenu123@gmail.com" style={{ color: "#0077b6" }}>
                    shivrajsenu123@gmail.com
                  </a>
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Side: Contact Form */}
        <Col xs={24} md={12}>
          <Card
            title="📩 Send Me a Message"
            headStyle={{ fontSize: "14px", padding: "6px 12px" }}
            style={{
              borderRadius: "8px",
              boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
              padding: "8px",
            }}
          >
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              style={{ fontSize: "13px" }}
            >
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input size="small" placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input size="small" placeholder="you@example.com" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea rows={3} placeholder="Type your message here..." />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="small">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
