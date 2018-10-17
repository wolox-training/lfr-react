import React, { Component } from 'react';

import styles from './styles.scss';

class Square extends Component {
  handleClick = () => {
    this.props.handler(this.props.position);
  }

  render() {
    return (
      <button className={styles.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
