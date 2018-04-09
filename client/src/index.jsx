import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import data from '../../data/data.json';
import './styles.css';

render(<App data={data} />, document.getElementById('app'));
