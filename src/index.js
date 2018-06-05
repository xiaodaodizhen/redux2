import React from 'react';
import { render } from 'react-dom';

import Cart from "./component/cart";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./store";
render(<Provider store={store}><Cart /></Provider>, window.root);