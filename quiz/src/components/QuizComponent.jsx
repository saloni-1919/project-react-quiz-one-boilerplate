import { Component } from "react";
import "./QuizComponent.css";

export default class QuizComponent extends Component {
  render() {
    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <div className="quiz-counter">Question 1 of 15</div>
          <h1 className="quiz-title">Question</h1>
          <p className="quiz-question">Which is the only mammal that can jump?</p>
          <div className="quiz-options">
            <button className="quiz-option btn" id="a">
              Dog
            </button>
            <button className="quiz-option btn" id="b">
              Cat
            </button>
            <button className="quiz-option btn" id="c">
              Goat
            </button>
            <button className="quiz-option btn" id="d">
              Buffalo
            </button>
          </div>
          <div className="quiz-controllers">
            <button className="quiz-btn prev">Previous</button>
            <button className="quiz-btn next">Next</button>
            <button className="quiz-btn quit">Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
