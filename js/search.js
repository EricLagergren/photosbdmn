var q = 'Insurance',
    regex = new RegExp(q, "i");
$.getJSON('industries.json', function (data) {
    $.each(data.sectors, function (i, sector) {
        $.each(sector.subsectors, function (i, subsector) {
            $.each(subsector.industries, function (i, industry) {
                if (industry.name.search(regex) != -1) {
                    $('<li />').html(industry.name).appendTo('body');
                }
            })
        });
    });
});