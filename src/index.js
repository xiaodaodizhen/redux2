import React from "react";
import { render } from "react-dom";
import store from "./store";
import Counter from "./component/counter";
import { Provider } from "react-redux";
render(<Provider store={store}><Counter /></Provider>, window.root);