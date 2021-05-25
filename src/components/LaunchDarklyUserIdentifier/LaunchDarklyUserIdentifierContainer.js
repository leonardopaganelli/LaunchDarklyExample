import { compose } from "redux";
import { connect } from "react-redux";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

import LaunchDarklyUserIdentifier from "./LaunchDarklyUserIdentifier";

const mapStateToProps = ({ auth: user }) => user;

export default compose(
  withLDConsumer(),
  connect(mapStateToProps)
)(LaunchDarklyUserIdentifier);
