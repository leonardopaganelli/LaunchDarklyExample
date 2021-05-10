const CURRENT_ENVIRONMENT = 'DEV'

/**
 * Returns resolveLaunchDarklyKey for env
 * @return {string} launchDarklyKey;
 */
const resolveLaunchDarklyKey = () => {
  const environments = {
    'DEV': 'XPTO_DEV',
    'HML': 'XPTO_HML',
    'PRD': 'XPTO_PRD',
  };

  return environments[CURRENT_ENVIRONMENT];
};

export default resolveLaunchDarklyKey;
