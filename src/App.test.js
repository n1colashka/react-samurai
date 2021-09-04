import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import SamuraiJSApp from "./App";
import {unmountComponentAtNode} from "react-dom";

test('renders page correct', () => {
  const div = document.createElement('div');
  render(<SamuraiJSApp />, div);
  unmountComponentAtNode(div);
});
