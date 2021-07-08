function requestComponent(URIComponent, replace) {
    $.get(`${URIComponent}`, function(data, status){
        if(status === "success") {
            insertHTML(data, replace);
        }
    });
}

function insertHTML(htmlComponent, replace) {
    const htmlStructure = $("#root").html();
    const htmlReplace = htmlStructure.replace(replace, htmlComponent);
    $("#root").html(htmlReplace);
}
