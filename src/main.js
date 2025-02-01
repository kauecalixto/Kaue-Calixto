"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_js_1 = require("./App.js");
require("./index.css");
var react_2 = require("react");
(0, client_1.createRoot)(document.getElementById('root')).render(<react_1.StrictMode>
    <App_js_1.default />
  </react_1.StrictMode>);
