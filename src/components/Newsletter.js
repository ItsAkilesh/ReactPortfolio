import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
              <h3>Oh yes, I can tell you're looking for it.<br/> Find my resume below 👇<br/><br/> 
              </h3>        
              <div className="resume-button">
                <a href="#">
                  <button type="button">Resume</button>
                </a>
              </div>
          </Row>
        </div>
      </Col>
  )
}
