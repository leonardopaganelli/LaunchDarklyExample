import React, { useEffect, useState, useContext } from "react";
import T from "prop-types";

const LDContext = React.createContext();

const LaunchDarklyUserIdentifier = ({ ldClient, user, children }) => {
  const [userIdentified, setUserIdentified] = useState(false);

  useEffect(() => {
    if (ldClient && user) {
      const launchDarklyUser = {
        key: user.id,
        email: user.email,
        country: user.country,
        custom: {
          host: window.location.hostname,
        },
      };

      ldClient
        .identify(launchDarklyUser)
        .then(() => setUserIdentified(true))
        .catch(() => setUserIdentified(true));
    }

    if (!user) {
      setUserIdentified(false);
    }
  }, [user, ldClient]);

  return (
    <LDContext.Provider value={userIdentified}>{children}</LDContext.Provider>
  );
};

LaunchDarklyUserIdentifier.propTypes = {
  ldClient: T.object,
  user: T.object,
  children: T.node.isRequired,
};

LaunchDarklyUserIdentifier.defaultProps = {
  ldClient: undefined,
};

export default LaunchDarklyUserIdentifier;

export const useWithLDUserIdentified = () => {
  const context = useContext(LDContext);

  if (context === undefined) {
    throw new Error(
      "useWithLDUserIdentified must be used within LaunchDarklyUserIdentifier"
    );
  }

  return context;
};
