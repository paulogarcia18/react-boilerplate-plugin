import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App/App';

function findElement(isready, success, error, count, interval) {
  if (count === undefined) {
    count = 300;
  }
  if (interval === undefined) {
    interval = 20;
  }
  if (isready()) {
    success();
    return;
  }
  setTimeout(() => {
    if (!count) {
      if (error !== undefined) {
        error();
      }
    } else {
      findElement(isready, success, error, count - 1, interval);
    }
  }, interval);
}

iPlugins(plugin => {
  findElement(
    () => {
      const target = '#main';
      return document.querySelectorAll(target).length > 0;
    },
    () => {
      plugin.elementReady('#main').then(() => {
        ReactDOM.render(<App pluginvariable={plugin} />, document.getElementById('allContent'));
      });
    },
    () => {
      console.log('element does not exist');
    },
  );
});
