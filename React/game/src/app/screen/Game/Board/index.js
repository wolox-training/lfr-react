import React, { Component } from 'react';

import Square from '~square';

import styles from './styles.scss';

class Board extends Component {
  renderSquare = place => {
    const { board, mouse } = this.props;
    return <Square position={place} value={board[place]} handler={mouse} />;
  };

  render() {
    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
