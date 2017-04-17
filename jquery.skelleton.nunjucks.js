var Content = {
    init: function() {
        nunjucks.configure({ autoescape: true });
        $("[data-content-parse]").each(function() {
            Content.parse($(this), eval($(this).data("content-parse")));
        });
    },
    parse: function(object, values) {
        var body = $(object).html();
        var rendered = nunjucks.renderString(body, values);
        $(object).html(rendered)
    },
    loop: function(object, values) {
        var body = $(object).html();
        var rendered = nunjucks.renderString(body, values);
        $(object).html(rendered)
    }
}

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/nunjucks/3.0.0/nunjucks.min.js", function() {
    Content.init();
})
