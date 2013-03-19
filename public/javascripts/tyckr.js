Tyckr = {

    start: function() {
        this.createIframes();
        //this.bindEvents();
    },

    createIframes: function() {
        this.location = document.location.href;

        document.removeChild(document.documentElement);
        document.appendChild(document.createElement("body"));

        var iframe = $j("<iframe></iframe>");
        iframe.attr('id', 'main-iframe');
        iframe.attr('src', location);
        iframe.css({
            'width': '100%',
            'height': '100%',
            'position': 'absolute'
        });

        iframe.bind('load', function() {
            var links = $j("#main-iframe").contents().find('body').find('a');
            links.attr('target', '_self');
            Tyckr.bindEvents();
        });

        this.page = new Page(location);

        $j("body").append(iframe);
    },

    bindEvents: function () {
        var contents = $j("#main-iframe").contents();
        /*
        contents.bind('mousedown', function(event) {
            console.log("mouse down");
            switch (event.which) {
                case 3:
                    event.preventDefault();
                    console.log("right mouse button", event);
                    Tyckr.createAnnotation(event);
                    break;
                default:
                    alert('You have a strange mouse');
            }
        });*/

        contents.bind('contextmenu', function(event) {
            var annotation = new Annotation({
                element: event.target,
                left: event.pageX,
                top: event.pageY,
                id: this.location,
                page: this.page
            });

            return false;
        })


    }

}