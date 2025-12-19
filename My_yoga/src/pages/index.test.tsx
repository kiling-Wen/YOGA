import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IndexPage from './index';

describe('IndexPage', () => {
  it('answers the question 你是谁 by identifying as YOGA', () => {
    const html = ReactDOMServer.renderToString(<IndexPage />);
    expect(html).toContain('我是YOGA');
  });
});
