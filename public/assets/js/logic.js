let options = [
    "Answer 1",
    "Answer 2",
    "Answer 3"
];

options.forEach((item, i) => {
    $("#poll").append(
        `<input type="radio" name="poll" id="poll-${i}" value = "${item}">
        <label for="poll-${i}">${item}</label>`
    );
});
