const inputHandler = document.querySelector("#inputHandler1");

const getRepos = () => {
    fetch(`https://api.github.com/repos/codeyourfuture/js-exercises/pulls`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            data.map(pullReq => {
                const ulList = document.querySelector("#pull-requests-list");
                const list = document.createElement('li');
                ulList.appendChild(list)
                const anchorTag = document.createElement('a');
                list.appendChild(anchorTag);
                anchorTag.innerText = pullReq.title;
                anchorTag.setAttribute("href", pullReq.html_url);

            })
        });
        
};


 getRepos()


inputHandler.addEventListener("click", (event) => {
          const value = event.target.value;
          console.log(value);

    fetch(`https://api.github.com/repos/codeyourfuture/js-exercises/pulls`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
        })
});