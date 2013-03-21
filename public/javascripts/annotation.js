Annotation = Class.extend({

    //element: null,
    text: null,
    position: null,
    //page: null, // todo: replace this coupling with event handling

    init: function(options) {

        //this.element = options.element;
        this.position = options.position;
        this.text = options.text;
        //this.id = options.id;
        //this.page = options.page;

        console.log("new annotation", this);

        //this.create();

    }

});