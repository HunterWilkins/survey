$.getJSON("/api/poll/1", function(data){
    console.log(data);
    const options = data.Options;
    const pollInfo = {
        title: data.title,
        date: data.createdAt
    };

    $("#title").text(pollInfo.title);
    options.forEach((item, i)=> {
        $("#poll").append(
            `
            <input id = "poll-item-${i}" name = "option" type = "radio" value = "${item.text}">
            <label for = "poll-item-${i}">${item.text}</label>
            `
        )
    })
});

function submitOption(choice) {
    $.post("/api/option/1", {vote: choice});
}