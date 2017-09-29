(function ($) {

    $.fn.popUpAppPlugin = function (settings) {

        var options = $.extend({
            background: "true",
            title: "Header",
            animation: "middle",
            escButton: "true"
        }, settings);

        return this.click(function (e) {

            var content = getContent(this);
            buildPopUpBox(content);
            setBackground();
            animation.call(this, options.animation);
            close.call(this, options.escButton);
        });

        function getContent(thisButton) {
            var contentCopy = $(thisButton).next('.modal-window__content:first').clone();
            return contentCopy.addClass("inner");
        }

        function setBackground() {
            if (options.background === "true") {
                $('.modal-window--background').css({
                    'background-color': '#000'
                });
            }
        }

        function buildPopUpBox(content) {
            var backgroundBlock = $('<div class="modal-window--background"></div>');
            $(backgroundBlock).appendTo('body');

            var modalWindow = $('<div class="modal-window__box modal-window--position"></div>');
            var header = $('<header class="modal-window__header"><h2 class="modal-window__title">' + options.title + '</h2><button class="modal-window__button-header button__modal-window--close">X</button></header>');
            var footer = $('<footer class="modal-window__footer"><button class="modal-window__button-footerr button__modal-window--close">Close</button></footer>');

            var popUpBox = $(modalWindow)
                .append(header)
                .append(content)
                .append(footer);
            
            popUpBox.insertAfter(backgroundBlock);
        }

        function animation(type) {
            var popUpBox = $('.modal-window__box');

            if (type === "right") {
                popUpBox.css({
                    'left': '200%'
                });
                popUpBox.animate({'left': '50%'}, 600);
            }
            else if (type === 'top') {
                popUpBox.css({
                    'top': '-100%',
                    'left': '50%'
                });
                popUpBox.animate({'top': '50%'}, 600);
            }
        }

        function close(esc) {
            $('.button__modal-window--close').click(function () {
                $(this).parent().parent().remove();
                $('.modal-window--background').remove();

            });
            $('.modal-window--background').click(function () {
                $(".modal-window__box").remove();
                $('.modal-window--background').remove();

            });
            if (esc === "true") {
                $(this).keydown(function (eventObject) {
                    if (eventObject.which == 27)
                        $(".button__modal-window--close").parent().parent().remove();
                    $('.modal-window--background').remove();
                });
                return;
            }
        }
        return this;
    };
})(jQuery);