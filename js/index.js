const randomFolks = document.querySelector(".random-peeps");
const getData = async function () {
    const usersRequest = await fetch ("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    const usersResults = data.results;
};

getData();
console.log(getData);