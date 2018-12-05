import React from 'react';
import ReactDOM from 'react-dom';
import './common/React.css';
import Rout from './router/router';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/lib/date-picker/style/css';
import './common/iconfont.css';

import configStore from './store';
import {Provider} from 'react-redux';
let store = configStore()
console.log(store)
ReactDOM.render(<Provider store={store}><Rout /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
