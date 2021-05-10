import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import resolveLaunchDarklyKey from "./config/resolveLaunchDarklyKey";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: resolveLaunchDarklyKey(),
    options: {
      fetchGoals: false,
    },
  });

  ReactDOM.render(
    <LDProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
