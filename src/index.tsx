import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import { text } from './data.json';
import './index.less';

class Main extends Component {
  render = () => {
    return <Button>{text}</Button>;
  };
}

ReactDOM.render(
  <Main />,
  document.getElementById('container'),
);