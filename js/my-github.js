// Write code here to communicate with Github
const getRepos = (repo) => {
    fetch(`https://api.github.com/users/${repo}/repos`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            return data.map(function (rep) {
                console.log(rep.name);
                var myElement = document.querySelector("#repos-list");
                var unorderList = document.createElement("ul");
                var anchorTag   = document.createElement('a')
                myElement.appendChild(unorderList);
                unorderList.appendChild(anchorTag)
                anchorTag.innerText = rep.name
                anchorTag.setAttribute("href", rep.html_url)
            });
        });
        
};

const RaminRepos = getRepos('Raminkeshavarzi');

// Number of public_repos

const getNumber = (repo) => {
    fetch(`https://api.github.com/users/${repo}`)
    .then((res) => res.json())
    .then((data) => {
        const spanTag = document.getElementById('repos-count')
        spanTag.innerHTML = data.public_repos
    })
}

const RaminReposNumber = getNumber('Raminkeshavarzi')

