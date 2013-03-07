var $j = null;

var JqueryLoader = {
    wanted_jqversion: "1.5.2",
    current_jqversion: window.jQuery !== undefined ? window.jQuery().jquery : null,
    callback: null,

    load: function(callback) {

        this.callback = callback || function() { console.log('load finished.'); };

        if (this.current_jqversion !== null) {
            var ojq = $.noConflict(true);
        }

        if (this.current_jqversion !== this.wanted_jqversion) {
            this.loadJquery();
            console.log("checking");
            this.checkJquery();
        }
        else {
            this.callback();
        }
    },

    loadJquery: function() {
        var jqueryScript = document.createElement("script");
        jqueryScript.setAttribute("src", "http://localhost:9564/public/javascripts/jquery-1.5.2.min.js");
        document.head.appendChild(jqueryScript);
    },

    checkJquery: function() {
        console.log("...");
        if (window.jQuery && window.jQuery().jquery === JqueryLoader.wanted_jqversion) {
            console.log("OK");
            JqueryLoader.callback();
        } else {
            console.log("not loaded, checking again...");
            window.setTimeout(JqueryLoader.checkJquery, 500);
        }
    }
};







