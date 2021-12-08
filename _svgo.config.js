/* eslint-env node */

'use strict';

module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeUnknownsAndDefaults: {
            keepRoleAttr: true
          },
          removeViewBox: false
        }
      }
    },
    // The next plugins are included in svgo but are not part of preset-default,
    // so we need to enable them separately
    'cleanupListOfValues',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'data-name'
        ]
      }
    }
  ]
};
