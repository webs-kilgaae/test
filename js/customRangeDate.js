$(function () {
    let date = new Date();
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let picker = $('#daterangepicker').daterangepicker({
        "parentEl": ".calenderBox",
        "autoApply": true,
        "linkedCalendars": false,
        locale: {
            format: "MM/DD/YYYY",
            daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        },
        "minDate": FormatDate(new Date()),
        "maxDate": FormatDate(lastDay)
    });
    // range update listener
    picker.on('apply.daterangepicker', function (ev, picker) {
        $("#daterangepicker").val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
    });
    $(".input-mini").hide();
    // prevent hide after range selection
    picker.data('daterangepicker').hide = function () { };
    // show picker on load
    picker.data('daterangepicker').show();
    $('.calendar.right').hide();
    $('.calendar.left').addClass('single');
});

const FormatDate = (date) => {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return month + '/' + day + '/' + year;
}