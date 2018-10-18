import React, { Component } from 'react';

import styles from './styles.scss';

class Square extends Component {
  handleClick = () => {
    const handler = this.props.handler;
    const position = this.props.position;
    const turn = handler(position);
    return turn;
  };

  render() {
    const value = this.props.value;
    return (
      <button className={styles.square} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

export default Square;
