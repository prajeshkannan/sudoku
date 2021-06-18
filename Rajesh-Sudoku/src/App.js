import React, { Component } from 'react';
import './App.css';
import MainWindow from './components/MainWindow';
import IsSolutionCorrect from './components/IsSolutionCorrect';
import { grid_templates } from './common/grid_templates';

class App extends Component {

  constructor() {
    super();
    this.newGrid = this.newGrid.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.attemptFullSolve = this.attemptFullSolve.bind(this);
    this.checkSolution = this.checkSolution.bind(this);

    this.isSolutionCorrect = new IsSolutionCorrect();
    //get initial state
    this.state = {
      grid: grid_templates.grid_empty,
      gridOptions: [],
      uniqueOptions: [],
      solved: null
    };
  }

  // clones 81 len array from grid_templates file
  newGrid(grid_id = 'grid_empty') {
    
    const grid = [...grid_templates[grid_id]];

    let solved;

    this.setState({ grid });
    this.setState({ solved });
  }

  updateGrid(vert, horiz, value) {
    const grid = [...this.state.grid];
    if (value === "") grid[vert*9 + horiz] = value;
    else grid[vert*9 + horiz] = 1 * value;

    let solved;

    this.setState({ grid });
    this.setState({ solved });
  }

  attemptFullSolve(iterations) {
    for (let i = 0; i < iterations; i++) {
      this.solveSol1(10);
      this.solveSol2(10);
    };
  }

  checkSolution() {
    let solved = false;
    if (this.isSolutionCorrect.checkGrid(this.state.grid)) {
      console.log("The solution is correct!")
      solved = true;
    } else {
      console.log("This is not the correct solution!")
    }
    this.setState({ solved });
  }

  render() {
    return (
      <div className="App">
        <div className="body">
          <MainWindow
            grid={this.state.grid}
            solved={this.state.solved}
            updateGrid={this.updateGrid}
            newGrid={this.newGrid}
            checkSolution={this.checkSolution}
          />
        </div>
      </div>
    );
  }
}

export default App;
