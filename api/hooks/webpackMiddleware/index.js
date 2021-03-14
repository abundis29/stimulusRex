/**
 * webMiddleware hook
 *
 * @description :: A hook definition.  Extends Sails by adding shadow routes, implicit actions, and/or initialization logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../../../webpack.config");
const webpack = require("webpack");

module.exports = function defineWebMiddlewareHook(sails) {

  return {

    /**
     * Runs when this Sails app loads/lifts.
     */
    initialize: async function () {
      sails.hooks.http.app.use(webpackMiddleware(webpack(webpackConfig)))
      sails.log.info('Initializing custom hook (`webMiddleware`)');
    }

  };

};
