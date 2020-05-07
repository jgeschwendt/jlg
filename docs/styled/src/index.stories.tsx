/* eslint eslint-comments/disable-enable-pair: off */
/* eslint eslint-comments/no-unlimited-disable: off */
/* eslint-disable */
import React from 'react';

export default { title: 'Button' };

export const withText = (): JSX.Element => <button>Hello Button</button>;

export const withEmoji = (): JSX.Element => (
  <button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);
