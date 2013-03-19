Page = Class.extend({

    address: null,
    annotations: [],

    init: function(address) {
        this.address = address;
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
        console.log("saving annotations...");
        if (localStorage) {
            localStorage.setItem(this.address, annotations);
        }
        else {
            console.log("Local storage not supported!");
        }
    }



});