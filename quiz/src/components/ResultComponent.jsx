import { Component } from "react";
import "./ResultComponent.css";
export default class ResultComponent extends Component {
  render() {
    return (
      <div className="container result">
        <h1>Result</h1>
        <div className="main-box">
          <h3 className="msg">Practice More!</h3>
          <h1 className="score">Score: 20%</h1>
          <div className="result-details">
            <div className="score-row">
              <div className="ld">Total number of questions</div>
              <div className="detailed-score">15</div>
            </div>
            <div className="score-row">
              <div className="ld">number of attempted questions</div>
              <div className="detailed-score">9</div>
            </div>
            <div className="score-row">
              <div className="ld">number of Correct answers</div>
              <div className="detailed-score">3</div>
            </div>
            <div className="score-row">
              <div className="ld">number of wrong answers</div>
              <div className="detailed-score">6</div>
            </div>
          </div>
        </div>
        <div className="end-buttons">
          <button className="end-btn play-again">Play Again</button>
          <button className="end-btn back-home">Back to Home</button>
        </div>
      </div>
    );
  }
}
