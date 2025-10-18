import React from 'react';
import { Container, Card, Breadcrumb } from 'react-bootstrap';

const About = () => {
  return (
    <>
      
      <Container className="mt-4">
        <Card className="shadow">
          <Card.Body>
            <Card.Title className="text-success text-center">About Employee Management System</Card.Title>
            <Card.Text>
              <p>
                Welcome to our Employee Management System (EMS), a robust solution designed to streamline HR processes for businesses of all sizes. Our platform enables efficient management of employee data, including personal details, job titles, departments, and employment status.
              </p>
              <p>
                Built with cutting-edge technologies like React, Bootstrap, and GraphQL, EMS ensures a seamless user experience with a responsive and intuitive interface. Key features include:
              </p>
              <ul>
                <li>Easy employee data entry and updates</li>
                <li>Advanced filtering for employee types and upcoming retirements</li>
                <li>Retirement planning with precise time-to-retirement calculations</li>
                <li>Secure data handling with GraphQL APIs and MongoDB integration</li>
              </ul>
              <p>
                Our mission is to empower organizations to manage their workforce effectively, ensuring compliance and operational efficiency. Contact us at <a href="mailto:support@ems.com">support@ems.com</a> for more information.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default About;