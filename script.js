let text = ['Text 1', 'Text 2', 'Text 3']
let duration = 8000
let autoNext = setTimeout(next, duration)
id = 0

// Initailize
document.getElementById("text").innerHTML = text[id];

//Event
document.getElementById("next").onclick = function() {next()}
document.getElementById("prev").onclick = function() {prev()}

function prev()
{
    id = (id + text.length - 1) % (text.length)
    update()
}

function next()
{
    id = (id + 1) % (text.length)
    update()
}

function update()
{
    document.getElementById("text").innerHTML = text[id]
    clearTimeout(autoNext)
    autoNext = setTimeout(next, duration)
}