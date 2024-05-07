import { Component } from "react";
import HomeComponent from "./components/HomeComponent.jsx";
import QuizComponent from "./components/QuizComponent.jsx";
//import ResultComponent from "./components/ResultComponent.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home" // Initialize currentPage state to "home"
    };
  }

  navigateToQuiz = () => {
    this.setState({ currentPage: "quiz" }); // Change the state to navigate
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        {currentPage === "home" && <HomeComponent playCallback={this.navigateToQuiz} />}
        {currentPage === "quiz" && <QuizComponent />}
      </div>
    );
  }
}

export default App;
