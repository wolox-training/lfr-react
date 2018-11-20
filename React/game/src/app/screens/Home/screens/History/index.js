import React from 'react';

import styles from './styles.scss';

function HistoryGame() {
  return (
    <div className={styles.history}>
      <h1 className={styles.title}> History Game</h1>
      <p className={styles.text}>
        An early variation of the game was played in the Roman Empire, around the 1st century B.C. It was
        called terni lapilli, which means "three pebbles at a time." The game's grid markings have been found
        chalked all over Roman ruins.
      </p>
      <p className={styles.text}>
        The first print reference to "noughts and crosses," the British name for the game, appeared in 1864.
        The first print reference to a game called "tick-tack-toe" occurred in 1884 but referred to a
        children's game played on a slate.
      </p>
    </div>
  );
}

export default HistoryGame;
