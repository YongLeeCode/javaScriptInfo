
fetch("https://byuifriendserver.onrender.com/course")
    .then(res=>res.json())
    .then(data=> console.log(data));