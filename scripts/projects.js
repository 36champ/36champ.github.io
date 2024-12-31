let project_data = [
    {
        'name' : '3D Art Gallery Problem',
        'desc' : 'An Extension of a NP-Hard Art Gallery Problem<br>My First Group Project with SGI 2024',
        'img' : '../asset/projects/3D-Art-Gallery-Problem/Thumbnail.png',
        'link' : '3D-Art-Gallery-Problem.html'
    },
    {
        'name' : 'Cortical mesh parcellation as a 2D segmentation via Pseudo-Rendering',
        'desc' : 'How to do 3D mesh segmentation by segmenting its 2D projections and projecting them back<br>My Second Group Project with SGI 2024',
        'img' : '../asset/projects/2D-Segmentation/Thumbnail.png',
        'link' : 'https://summergeometry.org/sgi2024/pseudo-rendering-a-novel-deep-learning-approach-for-2d-cortical-mesh-segmentation/'
    },
    {
        'name' : 'High-dimensional integration with Voronoi Piecewise Surrogates',
        'desc' : 'Monte Carlo Integration with a Voronoi Twist<br>My Third Group Project with SGI 2024',
        'img' : '../asset/projects/Voronoi-Integration/Thumbnail.png',
        'link' : 'Voronoi-Integration.html'
    },
    // {
    //     'name' : 'Slime Tamer',
    //     'desc' : 'A short 2048-style games where you try to move all slime out of the board.<br>Made in 3 days for Winter MelonJam 2023',
    //     'img' : '../asset/placeholder.png',
    //     'link' : '3D-Art-Gallery-Problem.html'
    // },
    // {
    //     'name' : '3D Vivarium',
    //     'desc' : 'Simulating Prey-Predator Interactions using Potential Function in 3D Space',
    //     'img' : '../asset/placeholder.png',
    //     'link' : '3D-Art-Gallery-Problem.html'
    // }
]

let s = `
<div class="d-grid container-fluid p-5">
    <div class="row py-3">
        <div class="col text-bold text-center text-36px">
            Projects
        </div>
    </div>
`

for(let row = 0; 3 * row < project_data.length; row++)
{
    s += `<div class="row py-3">`

    for(let column = 0; column < 3; column++)
    {
        s += `<div class="col px-4">`

        console.log(project_data[row * 3 + column])
        if(project_data[row * 3 + column] !== undefined)
        {
            s += `
            <div class="card">
                <img src="`+ project_data[row * 3 + column].img + `" class="card-img-top" alt="Error">
                <div class="card-body">
                    <h5 class="card-title">` + project_data[row * 3 + column].name + `</h5>
                    <p class="card-text">` + project_data[row * 3 + column].desc + `</p>
                    <a href="` + project_data[row * 3 + column].link + `" class="btn btn-primary">View</a>
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

document.getElementById("projects-placeholder").innerHTML = s

// https://summergeometry.org/sgi2024/the-3d-art-gallery-problem/
// https://summergeometry.org/sgi2024/pseudo-rendering-a-novel-deep-learning-approach-for-2d-cortical-mesh-segmentation/
// https://summergeometry.org/sgi2024/voronoi-tessellations/