AnnotationHandler = Class.extend({

    page: null,
    annotations: [],

    init: function(page) {
        this.page = page;
        this.registerEvents();
    },

    createAnnotation: function(left, top) {
        this.createAnnotationElement(left, top);
    },

    createAnnotationElement: function(left, top) {
        var body = this.page.getBody();
        var bubble = this.createBubble(left, top);
        body.append(bubble);
        bubble.find("input[name='annotation-text']").focus();
    },

    createBubble: function(left, top) {

        var bubble = $j("<div></div>");
        bubble.css(CSS.Bubble);
        bubble.css({
            'left': left,
            'top': top
        });

        var me = this;

        var form = $j("<form></form>");
        form.bind('submit', this.onFormSubmit);

        var inputField = $j("<input></input>");
        inputField.attr({
            'type': 'text',
            'name': 'annotation-text',
            'id': 'test-annotation',
            'value': 'Skriv en kommentar här'
        });
        inputField.css(CSS.BubbleTextInput);

        form.append(inputField);
        bubble.append(form);

        return bubble;
    },

    onFormSubmit: function() {

        var element =  $j(this).parent();
        var text = $j(this).find("input[name='annotation-text']").val();
        var position = element.position();

        var annotation = {
            //element: element,
            text: text,
            position: position
        };

        Events.trigger("ANNOTATION_EDIT_COMPLETE", annotation);

        return false;
    },

    onEditComplete: function(annotation) {
        this.annotations.push(annotation);
        this.saveAnnotations();
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
            localStorage.setItem(this.page.address, JSON.stringify(this.annotations));
        }
        else {
            console.log("Local storage not supported!");
        }
    },

    loadAnnotations: function() {
        console.log(this.page.address);
        annotationJSON = localStorage.getItem(this.page.address);
        console.log(annotationJSON);
        this.annotations = JSON.parse(annotationJSON);
        this.placeAnnotations(this.annotations);
    },

    placeAnnotations: function(annotations) {
        var me = this;
        console.log("ANNOTATISOTEsnpfoisn", annotations);
        $j(annotations).each(function(i,e) {
            me.placeAnnotation(e);
        });
    },

    placeAnnotation: function(annotation) {
        //this.page.getBody().append(annotation.element);
        console.log("this would place an annotation with the text", annotation.text, "on position", annotation.position);
    },

    registerEvents: function() {
        Events.register("ANNOTATION_EDIT_COMPLETE", this, this.onEditComplete);
    }

});

