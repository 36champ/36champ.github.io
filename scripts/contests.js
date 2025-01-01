let contest_data = [
    {
        'name' : 'ICPC',
        'desc' : 'All of my participation in The International Collegiate Programming Contest',
        'img' : '../asset/contests/ICPC/Thumbnail.png',
        'link' : 'ICPC.html'
    },
    {
        'name' : 'Meta Hacker Cup',
        'desc' : 'All of my participation in Meta Hacker Cup',
        'img' : '../asset/contests/Meta-Hacker-Cup/Thumbnail.jpg',
        'link' : '#'
    },
    {
        'name' : 'Other Competition',
        'desc' : 'Some contests I have joined throughout the years such as IEEExtreme, EOlymp Cup, and more',
        'img' : '../asset/Placeholder.png',
        'link' : '#'
    },
]

let s = `
<div class="d-grid container-fluid p-5">
    <div class="row py-3">
        <div class="col text-bold text-center text-36px">
            Contests
        </div>
    </div>
`

for(let row = 0; 3 * row < contest_data.length; row++)
{
    s += `<div class="row py-3">`

    for(let column = 0; column < 3; column++)
    {
        s += `<div class="col px-4">`

        console.log(contest_data[row * 3 + column])
        if(contest_data[row * 3 + column] !== undefined)
        {
            s += `
            <div class="card">
                <img src="`+ contest_data[row * 3 + column].img + `" class="card-img-top" alt="Error">
                <div class="card-body">
                    <h5 class="card-title">` + contest_data[row * 3 + column].name + `</h5>
                    <p class="card-text">` + contest_data[row * 3 + column].desc + `</p>
                    <a href="` + contest_data[row * 3 + column].link + `" class="btn btn-primary">View</a>
                </div>
            </div>
            `
        }

        s += `</div>`
    }

    s += `</div>`
}

console.log('OK')
s += `</div>`;

console.log(s)

document.getElementById("contests-placeholder").innerHTML = s

// https://summergeometry.org/sgi2024/the-3d-art-gallery-problem/
// https://summergeometry.org/sgi2024/pseudo-rendering-a-novel-deep-learning-approach-for-2d-cortical-mesh-segmentation/
// https://summergeometry.org/sgi2024/voronoi-tessellations/