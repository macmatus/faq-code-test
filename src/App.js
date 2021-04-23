import "./App.scss";
import React, { useState, useEffect } from "react";
import faqData from "./faq-data";
import { FaBook } from "react-icons/fa";

function App() {
  // eslint-disable-next-line
  const [data, setData] = useState(faqData);
  const [currentData, setCurrentData] = useState(data);
  const [currentAnswer, setCurrentAnswer] = useState(
    data[0].sectionFaqs[0].answer
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    data[0].sectionFaqs[0].question
  );
  const [currentSection, setCurrentSection] = useState(data[0].sectionName);

  useEffect(() => {
    const allAnswers = document.querySelectorAll(".question");
    const allSections = document.querySelectorAll(".faq-section");
    allSections[0].classList.add("active");
    allAnswers.forEach((answer) => answer.classList.remove("active"));
    allAnswers[0].classList.add("active");
  }, []);

  const handleSectionClick = (e) => {
    let currentFaq = e.currentTarget;
    let newData = data.filter((faq) => parseInt(currentFaq.id) === faq.id);
    setCurrentData(newData);
    setCurrentAnswer(newData[0].sectionFaqs[0].answer);
    setCurrentQuestion(newData[0].sectionFaqs[0].question);
    setCurrentSection(newData[0].sectionName);

    if (currentFaq.id === e.currentTarget.id) {
      const allFaqs = document.querySelectorAll(".faq-section");
      const allQuestions = document.querySelectorAll(".question");
      allFaqs.forEach((faq) => faq.classList.remove("active"));
      allQuestions.forEach((question) => question.classList.remove("active"));
      allQuestions[0].classList.add("active");
      currentFaq.classList.add("active");
    }
  };

  const handleQuestionClick = (e) => {
    let currentQuestion = e.currentTarget;
    let answer = currentData[0].sectionFaqs.filter(
      (answer) => parseInt(currentQuestion.id) === answer.id
    );
    setCurrentAnswer(answer[0].answer);
    setCurrentQuestion(answer[0].question);
    setCurrentSection(currentData[0].sectionName);
    const allAnswers = document.querySelectorAll(".question");

    if (currentQuestion.id === e.currentTarget.id) {
      allAnswers.forEach((answer) => answer.classList.remove("active"));
      currentQuestion.classList.add("active");
    }
  };

  return (
    <div className="ruroc-faq">
      <h1>RUROC FAQS</h1>
      <p>What are you having issues with?</p>
      <section className="faq-section-wrap">
        {data.map((faq) => {
          return (
            <div
              className="faq-section"
              key={faq.id}
              id={faq.id}
              onClick={handleSectionClick}
            >
              <span className="faq-icon">{faq.sectionIcon}</span>
              <h2>{faq.sectionName}</h2>
              <p>{faq.sectionTagline}</p>
            </div>
          );
        })}
      </section>
      <section className="section-faqs">
        <div className="question-container">
          {currentData
            ? currentData[0].sectionFaqs.map((faqs) => {
                return (
                  <>
                    <div
                      key={faqs.id}
                      id={faqs.id}
                      className="question"
                      onClick={handleQuestionClick}
                    >
                      <FaBook />
                      <p>{faqs.question}</p>
                    </div>
                  </>
                );
              })
            : null}
        </div>
        {currentAnswer ? (
          <div className="answer-container">
            <span>{currentSection}</span>
            <h2>{currentQuestion}</h2>
            <p>{currentAnswer}</p>
            <div className="contact-options">
              <h3>Contact Options</h3>
              <div className="options">
                <div className="fb">
                  <h4>fb message us</h4>
                  <p>avg response time 1hr</p>
                </div>
                <div className="git">
                  <h4>get in touch</h4>
                  <p>with our contact form</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="answer-container hidden"></div>
        )}
      </section>
    </div>
  );
}

export default App;
