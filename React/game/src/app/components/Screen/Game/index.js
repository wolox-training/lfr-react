import React, { Component } from 'react';

import Board from './Board';
import styles from './styles.scss';

class Game extends Component {
  state = {
    moves: 0,
    gameEnd: false,
    turn: 'X',
    turnWinner: '',
    history: [
      {
        board: Array(9).fill(''),
        id: 0
      }
    ]
  };

  mouseClick = place => {
    const history = this.state.history.slice(0, this.state.moves + 1);
    const current = history[history.length - 1];
    const board = current.board.slice();

    if (board[place] === '' && !this.state.gameEnd) {
      board[place] = this.state.turn;
      this.setState({
        history: history.concat([
          {
            board,
            id: history.length
          }
        ]),
        turn: this.state.turn == 'X' ? 'O' : 'X',
        moves: ++this.state.moves
      });
    }

    const result = this.winner();

    if (result === 'X') {
      this.setState({
        gameEnd: true,
        turnWinner: result
      });
    } else if (result === 'O') {
      this.setState({
        gameEnd: true,
        turnWinner: result
      });
    }
  };

  winner = () => {
    const serialWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 5, 8],
      [2, 5, 7],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const board = this.state.history[this.state.moves - 1].board;
    for (let i = 0; i < serialWin.length; i++) {
      if (
        board[serialWin[i][0]] === board[serialWin[i][1]] &&
        board[serialWin[i][1]] === board[serialWin[i][2]] &&
        (board[serialWin[i][0]] === 'O' || board[serialWin[i][0]] === 'X')
      ) {
        return board[serialWin[i][0]];
      }
    }
  };

  jumpTo = step => {
    this.setState({
      moves: step
    });
  };

  render() {
    let status;
    if (this.state.gameEnd) {
      status = `Winner: ${this.state.turnWinner}`;
    } else {
      status = `Next player: ${this.state.turn}`;
    }

    const history = this.state.history;
    const current = history[this.state.moves];

    const moves = history.map(step => {
      const gameTurn = step.id ? `Go to game start ${step.id}` : `Go to move # $`;
      return (
        <li key={step.id}>
          <button onClick={() => this.jumpTo(step.id)}>{gameTurn}</button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <div className={styles.gameboard}>
          <Board mouse={this.mouseClick} board={current.board} />
        </div>
        <div className={styles.gameinfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
