$(function () {
    //상단 알림 버튼
    $(".userbox .noti").on("click", function () {
        $(this).toggleClass("on");
        $(".noti-alert").toggleClass("active");
    });
    // $(document).mouseup(function (e) {
    //     if ($(".noti-alert").has(e.target).length == 0) {
    //         $(".noti-alert").removeClass("active");
    //     }
    // });

    //예약내역 팝업
    $(".userbox .rese").on("click", function () {
        $(this).toggleClass("on");
    });

    $(document).on("click", "[data-popup]", function (ev) {
        ev.preventDefault();

        var rel = $(this).data("popup"),
            $relBox = $('[data-layer="' + rel + '"]');

        if ($relBox.length) {
            layerOpen($relBox);
        }
    });

    /* layer open */
    $(document).on("click", "[data-popup]", function (ev) {
        ev.preventDefault();

        var rel = $(this).data("popup"),
            $relBox = $('[data-layer="' + rel + '"]');

        if ($relBox.length) {
            layerOpen($relBox);
        }
    });
    /* layer open */
    function layerOpen(obj) {
        if ($("[data-layer]:visible").length === 0) {
            winScroll = $(window).scrollTop();
        }
        dimmed(true);
        obj.show();
    }

    /* dimmed mask */
    function dimmed(state) {
        if (state) {
            $("body").addClass("body-hidden").css({
                top: -winScroll,
            });
        } else {
            $("body").removeClass("body-hidden").removeAttr("style");
            $(window).scrollTop(winScroll);
        }
    }

    /* layer close */
    function layerClose(obj) {
        dimmed(false);
        obj.hide();
    }
    /* layer close */
    $(document).on("click", "[data-close=layer]", function (ev) {
        layerClose($(this).closest("[data-layer]"));
        ev.preventDefault();
    });

    //건물 선택
    $(".floor__txt").on("click", function () {
        $(this).toggleClass("on");
        $(".floor__wrap").toggleClass("active");
    });

    //예약좌석선택
    $(".main-grid .reserv").on("click", function () {
        let $resR = $(this).children(".txts").children(".num");
        let $valR = $(this).val();
        let $sib = $(this).parent(".item").siblings().children(".btn");
        let $sibVal = $sib.val();
        let $sibNum = $sib.children(".txts").children(".num");

        $(".main-grid .reserv").removeClass("active");

        if (!matchMedia("(max-width: 420px)").matches) {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                // $resR.html($valR).css({ "font-size": "18px", "font-family": "Roboto", color: "#406eff" });
            } else {
                $(this).addClass("active");
                $resR.html("선택 좌석").css({ "font-size": "16px", "font-family": "NotoSansKR", color: "#fff" });
                $sib.removeClass("active");
                $sibNum.html($sibVal); //.css({ "font-size": "18px", "font-family": "Roboto", color: "#406eff" });
            }
        } else {
            $(this).toggleClass("active");
            $resR.html($valR);
            $sib.removeClass("active");
            $sibNum.html($sibVal);
        }
    });

    $(".main-grid .btn").hover(function () {
        $(this).toggleClass("hover");
        $(this).next(".detailsBox").toggleClass("active");
    });
});
