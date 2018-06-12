import React from "react";
import { render } from "react-dom";
import store from "./store";
import Counter from "./component/counter";
import { Provider } from "react-redux";
import Modal from "./component/Modal";
// render(<Provider store={store}><Counter /></Provider>, window.root);

render(<Modal/>,window.root);