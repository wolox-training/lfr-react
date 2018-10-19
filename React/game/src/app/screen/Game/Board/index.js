import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '~square';

import styles from './styles.scss';

class Board extends Component {
  renderSquare = place => {
    const board = this.props.board;
    const mouse = this.props.mouse;
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

Square.propTypes = {
  board: PropTypes.array,
  mouse: PropTypes.func.isRequired,
  position: PropTypes.number
};

export default Board;
