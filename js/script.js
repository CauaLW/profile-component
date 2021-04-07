getProjects = () => {
    const projects = document.querySelector('#projects h1')

    fetch('https://api.github.com/users/caualw/repos')
        .then(resp => resp.text())
        .then(resp => JSON.parse(resp))
        .then(resp => projects.innerHTML = resp.length)
}

getStars = () => {
    const starsCard = document.querySelector('#stars h1')
    let starsCount = 0

    fetch('https://api.github.com/users/caualw/repos')
    .then(resp => resp.text())
    .then(resp => JSON.parse(resp))
    .then(resp => resp.forEach(repo => {
        starsCount += repo.stargazers_count
    }))
    .then(resp => starsCard.innerHTML = starsCount)
}

getFollowers = () => {
    const followers = document.querySelector('#followers h1')

    fetch('https://api.github.com/users/caualw/followers')
        .then(resp => resp.text())
        .then(resp => JSON.parse(resp))
        .then(resp => followers.innerHTML = resp.length)
}

getInfo = () => {
    getProjects()
    getStars()
    getFollowers()
}

getInfo()