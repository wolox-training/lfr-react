import React, { Component } from 'react';

import Board from '@board';

import styles from './styles.scss';
import { serialWin } from './constants';

class Game extends Component {
  playerOne = 'X';
  playerTwo = 'O';

  state = {
    moves: 0,
    gameEnd: false,
    turn: this.playerOne,
    turnWinner: '',
    history: [
      {
        board: Array(9).fill(''),
        id: 0
      }
    ]
  };

  mouseClick = place => {
    const { history, moves } = this.state;
    const newhistory = history.slice(0, moves + 1);
    const current = newhistory[newhistory.length - 1];
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
        turn: this.state.turn === this.playerOne ? this.playerTwo : this.playerOne,
        moves: ++this.state.moves
      });
    }
    const result = this.winner();
    if (result === this.playerOne) {
      this.setState({
        gameEnd: true,
        turnWinner: result
      });
    } else if (result === this.playerTwo) {
      this.setState({
        gameEnd: true,
        turnWinner: result
      });
    }
  };

  winner = () => {
    const { history } = this.state;
    const { moves } = this.state;
    const board = history[moves - 1].board;
    for (let i = 0; i < serialWin.length - 1; i++) {
      if (
        board[serialWin[i][0]] === board[serialWin[i][1]] &&
        board[serialWin[i][1]] === board[serialWin[i][2]] &&
        (board[serialWin[i][0]] === this.playerTwo || board[serialWin[i][0]] === this.playerOne)
      ) {
        return board[serialWin[i][0]];
      }
    }
  };

  newHistory = step => {
    const id = step.id;
    const gameTurn = id ? `Go to move # ${id}` : `Go to game start `;
    return (
      <li key={id}>
        <button onClick={() => this.jumpTo(id)}>{gameTurn}</button>
      </li>
    );
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

    const { history, moves } = this.state;
    const current = history[moves];

    return (
      <div className={styles.game}>
        <div className={styles.gameboard}>
          <Board mouse={this.mouseClick} board={current.board} />
        </div>
        <div className={styles.gameinfo}>
          <div>{status}</div>
          <ol>{history.map(this.newHistory)}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
