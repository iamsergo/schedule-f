import React from 'react';
import ReactDOM from 'react-dom';

import bridge from '@vkontakte/vk-bridge'
import '@vkontakte/vkui/dist/vkui.css'

import store from './store'
import { Provider } from 'react-redux'

import './index.sass';

import App from './App';

bridge.send('VKWebAppInit')
bridge.subscribe(e => {
  if(e.detail.type === 'VKWebAppUpdateConfig')
    document.body.setAttribute('scheme', e.detail.data.scheme)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
