Annotation = Class.extend({

    element: null,
    inputField:null,
    page: null, // todo: replace this coupling with event handling

    init: function(options) {

        this.element = options.element;
        this.left = options.left;
        this.top = options.top;
        this.id = options.id;
        this.page = options.page;

        this.create();

    },

    create: function(mouseEvent) {
        var body = $j("#main-iframe").contents().find('body');
        var bubble = this.createBubble(this.left, this.top);
        body.append(bubble);
        this.inputField.focus();
        console.log(mouseEvent);
    },

    createBubble: function(left, top) {
        var bubble = $j("<div></div>");
        bubble.css({
            'background-color': 'white',
            'border': '1px solid black',
            'border-radius': '10px',
            'padding': '10px',
            'position': 'absolute',
            'left': left,
            'top': top
        });

        var me = this;


        this.form = $j("<form></form>");
        this.form.bind('submit', function() {
            me.text = $j(this).find('input[name="annotation-text"]').val();
            console.log("text", me.text);
            me.page.addAnnotation(me);
            me.page.saveAnnotations();
            return false;
        });

        this.inputField = $j("<input></input>");
        this.inputField.attr({
            'type': 'text',
            'name': 'test-annotation',
            'id': 'test-annotation',
            'value': 'Skriv en kommentar här'
        });
        this.inputField.css({
            'width': '200px',
            'height': '20px',
            'border': '1px solid black'
        });

        this.form.append(this.inputField);
        bubble.append(this.form);

        //bubble.html("Hej, här skriver man lite text");

        return bubble;
    }






});