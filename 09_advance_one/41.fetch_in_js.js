//fetch() cames natively in node.js untime env ealrier we use Internet Explorere 5's XMLHttpRequest

//fetch() is a global method states the process of fetchingg a resourse from the network, returning a promise which is fullifed once the response is available

//interview question using promise when we get error 404 where we get resolve or reject. It is always as response. Error is found when it is not avail to request.

//fetch() is called first then rest promises as fetch() has a special readyqueue to excute based on priority also known as priority queue, fetch queue, microtask queue

//js engine diagram + fetch() diagram

fetch('https://jsonplaceholder.typicode.com/users')