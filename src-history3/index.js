import React from "react";
import { render } from "react-dom";
import Counter from "./component/counter";
import { Provider } from "./react-redux";
import store from "./store";
render(<Provider store={store}><Counter /></Provider>, window.root);
