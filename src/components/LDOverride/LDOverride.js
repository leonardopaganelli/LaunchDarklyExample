import React from "react";
import T from "prop-types";
import withLDConsumer from "launchdarkly-react-client-sdk/lib/withLDConsumer";
import { Provider } from "launchdarkly-react-client-sdk/lib/context";

const isProduction = false;
const featureFlagKey = "feature-flag-override";

function overrideHoc(WrappedComponent) {
  if (isProduction) {
    return WrappedComponent;
  }

  class LDOverride extends React.Component {
    static propTypes = {
      flags: T.object.isRequired,
      ldClient: T.object,
    };

    static defaultProps = {
      ldClient: null,
    };

    state = {
      overrideFlags: JSON.parse(localStorage.getItem(featureFlagKey)) || {},
    };

    componentDidMount() {
      window._ldOverride = {
        set: (flag, value) => {
          const { overrideFlags } = this.state;
          this.setState(
            { overrideFlags: { ...overrideFlags, [flag]: value } },
            this.persist
          );
        },
        reset: () => {
          this.setState({ overrideFlags: {} }, this.persist);
        },
      };
    }

    componentWillUnmount() {
      window._ldOverride = null;
    }

    persist() {
      const { overrideFlags } = this.state;

      localStorage.setItem(featureFlagKey, JSON.stringify(overrideFlags));
    }

    render() {
      const { overrideFlags } = this.state;
      const { flags, ldClient } = this.props;
      const effectiveFlags = { ...flags, ...overrideFlags };

      return (
        <Provider value={{ flags: effectiveFlags, ldClient }}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  }

  return withLDConsumer()(LDOverride);
}

export default overrideHoc;
