let subscriberNum = document.getElementById('subscribers')
let followerNum = document.getElementById('followers')
let likesNum = document.getElementById('likes')
let connectionNum = document.getElementById('connections')

let subscriberCount = 0
let followerCount = 0
let likesCount = 0
let connectionCount = 0

let subscribers = setInterval(() => {
    subscriberCount++
    subscriberNum.innerText = subscriberCount

    if(subscriberCount === 1000){
        clearInterval(subscribers);
    }
}, 1000 % 2);


let followers = setInterval(() => {
    followerCount++
    followerNum.innerText = followerCount

    if(followerCount === 500){
        clearInterval(followers);
    }
}, 1000 % 2);


let likes = setInterval(() => {
    likesCount++
    likesNum.innerText = likesCount

    if(likesCount === 250){
        clearInterval(likes);
    }
}, 1000 % 2);

let connections = setInterval(() => {
    connectionCount++
    connectionNum.innerText = connectionCount

    if(connectionCount === 125){
        clearInterval(connections);
    }
}, 1000 % 2);
