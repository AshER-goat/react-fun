import React from 'react';
import './index.css';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  export class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  export class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        if (desc === 'Go to move #' + move) {
            return (
                <div key={move}>
                    <button className="btn bg-cornflowerblue btn-sm rounded m-2" onClick={() => this.jumpTo(move)}>{desc}</button>
                </div> 
            );
        }

        if (desc === 'Go to game start') {
            return (
                <div key={move}>
                  <button className="btn bg-lightgreen btn-sm rounded m-2" onClick={() => this.jumpTo(move)}>{desc}</button>
                </div> 
            );      
        }


      });
  
      let status;
      if (winner) {
        //status = `Winner: ${winner}!`; //"Winner: " + winner
        if (winner === "X") {
            status = <button className="btn btn-success rounded">Winner: X! Sorry O &#128577;</button>;
        }

        if (winner === "O") {
            status = <button className="btn btn-success rounded">Winner: O! Sorry X &#128577;</button>;
        }
        
        //change color of winning squares here...
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (  
        <div className="game">
            <div className="col-sm-6 col-md-4 col-lg-4 bg-goldenrod p-4">
                <div className="game-board">
                    <Board
                    squares={current.squares}
                    onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="my-3">{status}</div>
                </div>              
            </div>
            <div className="col-sm-6 col-md-8 col-lg-8 bg-linen p-4 d-flex justify-content-center">
                <div className="game-moves">{moves}</div> 
            </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  //ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }