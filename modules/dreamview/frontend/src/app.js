/* import "whatwg-fetch";
 * import "font-awesome-webpack";*/

import * as ReactDOM from "react-dom";
import React from "react";
import { Provider } from "mobx-react";

import "styles/main.scss";
import STORE from "store";
import WS from "store/websocket";
import Dreamview from "components/Dreamview";

ReactDOM.render(
    <Provider store={STORE}>
        <Dreamview />
    </Provider>,
    document.getElementById("root")
);