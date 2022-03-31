define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            tracks: {
                result: true
            }
        },
        /**
         * Initialize
         */
        initialize: function () {
            this.result = { data: "dumy"};
        }
    });
});
