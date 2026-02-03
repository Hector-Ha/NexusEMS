import React from "react";
import {
  BsPeople,
  BsShieldCheck,
  BsGraphUp,
  BsCalendarCheck,
} from "react-icons/bs";

const About = () => {
  const features = [
    {
      icon: <BsPeople />,
      title: "Employee Management",
      description:
        "Easily manage employee data including personal details, job titles, departments, and employment status.",
    },
    {
      icon: <BsCalendarCheck />,
      title: "Retirement Planning",
      description:
        "Track upcoming retirements with precise time-to-retirement calculations and advanced filtering.",
    },
    {
      icon: <BsGraphUp />,
      title: "Analytics Dashboard",
      description:
        "Get real-time insights into your workforce with intuitive stats and visual dashboards.",
    },
    {
      icon: <BsShieldCheck />,
      title: "Secure & Reliable",
      description:
        "Built with modern security practices using GraphQL APIs and MongoDB for data integrity.",
    },
  ];

  return (
    <div className="about-page">
      <div className="hero">
        <h1>About NexusEMS</h1>
        <p>
          A robust employee management solution designed to streamline HR processes
          for businesses of all sizes. Built with modern technologies for a seamless experience.
        </p>
      </div>

      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-body" style={{ textAlign: "center", padding: 40 }}>
          <h3 style={{ marginBottom: 16, color: "var(--gray-900)" }}>
            Built with Modern Technologies
          </h3>
          <p style={{ color: "var(--gray-500)", marginBottom: 24 }}>
            React, GraphQL, Node.js, Express, and MongoDB power NexusEMS to deliver
            a fast, reliable, and scalable employee management experience.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
              color: "var(--gray-400)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <span>React</span>
            <span>GraphQL</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 48, color: "var(--gray-500)", fontSize: "0.875rem" }}>
        <p>
          Questions or feedback? Contact us at{" "}
          <a href="mailto:support@nexusems.com" style={{ color: "var(--primary)" }}>
            support@nexusems.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
