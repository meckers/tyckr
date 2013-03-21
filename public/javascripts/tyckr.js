Tyckr = {

    page: null,
    annotationHandler: null,
    globals: {},

    start: function() {
        //this.createIframes();
        this.bindEvents();
        this.page = new Page(document);

    },

    onLoad: function() {
        this.annotationHandler = new AnnotationHandler(this.page);

        this.annotationHandler.loadAnnotations();

        var me = this;
        var contents = $j("#main-iframe").contents();
        contents.bind('contextmenu', function(event) {
            me.annotationHandler.createAnnotation(event.pageX, event.pageY);
            return false;
        });


    },

    bindEvents: function () {

        Events.register("IFRAME_LOADED", this, this.onLoad);


    }
}