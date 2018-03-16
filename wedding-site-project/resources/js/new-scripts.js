var Site;
!function(e) {
    "use strict";
    e(document).ready(function() {
        (Site = {
            initialized: !1,
            init: function() {
                var e = this;
                e.initialized || (e.initialized = !0,
                e.build())
            },
            build: function() {
                var t = this;
                t.curvedText(),
                t.bgImageGrid()
            },
            bgImageGrid: function() {
                if (e("#freewall").length) {
                    e("#freewall .item").each(function() {
                        var t = e(this);
                        t.width(Math.floor(260 + 200 * Math.random())),
                        t.css({
                            "background-image": "url(" + e(">img", t).attr("src") + ")"
                        }),
                        e(">img", t).remove()
                    }),
                    e("#freewall").appendTo("#wrapper");
                    var t = new Freewall("#freewall");
                    t.reset({
                        selector: ".item",
                        animate: !1,
                        cellW: 20,
                        gutterX: 0,
                        gutterY: 0,
                        onResize: function() {
                            t.fitWidth()
                        }
                    }),
                    t.fitWidth()
                }
            },
            curvedText: function() {
                e(".curve").length && (e(".curve").arctext({
                    radius: 1e3
                }),
                e(window).resize(function() {
                    e(".curve").arctext("set", {
                        radius: 1e3
                    })
                })),
                e(".curve2").length && (e(".curve2").arctext({
                    radius: 800,
                    dir: -1
                }),
                e(window).resize(function() {
                    e(".curve2").arctext("set", {
                        radius: 800,
                        dir: -1
                    })
                }))
            }
        }).init()
    })
}(jQuery);