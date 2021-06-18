import React, { Component } from 'react';
import SudokuGrid from './SudokuGrid';

class MainWindow extends Component {
  render() {
    let checkSolutionMessage;
    if (this.props.solved) {
      checkSolutionMessage = <p>Solution is Correct!</p>;
    } else if (this.props.solved === false) {
      checkSolutionMessage = <p>This is not correct</p>;
    }

    return (
      <div className="window">
        <SudokuGrid
          grid={this.props.grid}
          solved={this.props.solved}
          newGrid={this.props.newGrid}
          updateGrid={this.props.updateGrid}
        />
        <div className="check-sol-button">
          <button onClick={() => this.props.newGrid()}>Empty Grid</button>
          <button onClick={() => this.props.checkSolution()}>Check Solution</button>
          {checkSolutionMessage}
        </div>
      </div>
    );
  }
}


export default MainWindow;
