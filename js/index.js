document.addEventListener ('DOMContentLoaded', ()=> {
    gitFetch ()
})

function gitFetch () {
    fetch ('https://api.github.com/users/octocat/repos', {
        method: 'GET',
        headers:{
            Accept: 'application/vnd.github.v3+json'
        }
    })
    .then ((response)=> response.json ())
    .then (dataFun)
}

function dataFun (data) {
    data.forEach (githubFun)
}
function githubFun (data) {
    const githubFom = document.getElementById ('github-form')
    githubFom.addEventListener ('submit', (e)=> {
        e.preventDefault ()

        const userLIst = document.getElementById ('user-list')
        const search = document.getElementById ('search').value 
        if (search === data.login) {
            userLIst.innerHTML = search
        }
        // userLIst.style.cursor = 'pointer'
        // const attemptSearch = userLIst.value
        // userLIst.addEventListener ('click', ()=> {
        //     if (attemptSearch === data.login) {
        //         console.log ()
        //     }
            
        // })

    })
}