import React, { useState } from 'react';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Feedback from ${name || 'Anonymous'}`);
        const body = encodeURIComponent(feedback);
        
        // Gmail compose URL
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=codrin.emilian.g@gmail.com&su=${subject}&body=${body}`;
        
        window.open(gmailLink, '_blank'); 
    };
      return (
        <div className="contact-page">
          <div className="row">
            <div className="column">
              {/* Contact Card 1 */}
              <div className="contact-card">
                <h2>Rascanu Dragos</h2>
                <p><strong>Phone:</strong> +40 46 406 401</p>
                <p><strong>Email:</strong> rascanu.dragos@example.com</p>
                <p><strong>Address:</strong> Splaiul Independetei 11</p>
              </div>
              
              {/* Contact Card 2 */}
              <div className="contact-card">
                <h2>Grapinoiu Codrin</h2>
                <p><strong>Phone:</strong> +40 45 405 401</p>
                <p><strong>Email:</strong> codrin.grapinoiu@example.com</p>
                <p><strong>Address:</strong> Splaiul Independetei 11</p>
              </div>
            </div>
    
            {/* Feedback Form */}
            <div className="column">
              <div className="feedback-form">
                <h2>Submit Your Feedback</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Enter your name (optional)"
                    />
                  </div>
                  <div>
                    <textarea
                      id="feedback"
                      value={feedback}
                      onChange={handleFeedbackChange}
                      placeholder="Enter your feedback here!"
                      required
                    />
                  </div>
                  <button type="submit">Submit Feedback</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ContactPage;
    