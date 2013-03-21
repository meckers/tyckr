Page = Class.extend({

    address: null,
    iframe: null,
    annotations: [],

    init: function(document) {
        this.address = document.location.href;
        this.createIframes(document);
    },

    createIframes: function(document) {

        document.removeChild(document.documentElement);
        document.appendChild(document.createElement("body"));

        this.iframe = $j("<iframe></iframe>");
        this.iframe.attr('id', 'main-iframe');
        this.iframe.attr('src', location);
        this.iframe.css({
            'width': '100%',
            'height': '100%',
            'position': 'absolute'
        });

        this.iframe.bind('load', function() {
            var links = $j(this).contents().find('body').find('a');
            links.attr('target', '_self');
            Events.trigger("IFRAME_LOADED");
        });

        $j("body").append(this.iframe);
    },

    getContents: function() {
        return this.iframe.contents()
    },

    getBody: function() {
        return this.getContents().find('body');
    },

    addAnnotation: function(annotation) {
        this.annotations.push({
            text: annotation.text,
            element: annotation.element,
            left: annotation.left,
            top: annotation.top
        });
    },

    saveAnnotations: function() {
        console.log("saving annotations...", this.annotations);
        if (localStorage) {
            localStorage.setItem(this.address, this.annotations);
        }
        else {
            console.log("Local storage not supported!");
        }
    },

    loadAnnotations: function() {
        this.annotations = localStorage.getItem(this.address);
        console.log("loaded annoatations", this.annotations);
        return this.annotations !== null;
    }



});