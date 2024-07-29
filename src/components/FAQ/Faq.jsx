import React, { useState } from 'react';
import './Faq.css'; // Import CSS for styling if needed

const faqData = [
  {
    question: "What amenities are included in the resort stay?",
    answer: "Our resort offers a range of amenities including a swimming pool, spa, fitness center, complimentary breakfast, and free Wi-Fi. For more details, please visit our amenities page."
  },
  {
    question: "Is there a shuttle service available?",
    answer: "Yes, we offer complimentary shuttle service to and from the airport. Please inform us of your flight details in advance to arrange the pickup."
  },
  {
    question: "Can I bring my pet to the resort?",
    answer: "Pets are welcome at our resort. We have designated pet-friendly rooms and areas. Please let us know in advance if you are bringing a pet."
  },
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in time is from 3:00 PM, and check-out time is by 11:00 AM. If you require early check-in or late check-out, please contact our front desk."
  },
  {
    question: "Do you offer special packages or discounts?",
    answer: "Yes, we offer various packages and discounts throughout the year. Check our special offers page or contact our reservations team for current deals."
  }
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h3>{item.question}</h3>
              <span className="toggle-icon">
                {expandedIndex === index ? '-' : '+'}
              </span>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
