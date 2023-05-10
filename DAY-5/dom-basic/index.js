//document.querySelector('#test').innerHTML = "This is from <strong>Javascript</strong> "

//document.getElementById('test').innerHTML = "This is from <strong>Javascript</strong> "


// const h1 = document.createElement("h1");

// const h1text =      document.createTextNode("Welcome to this site");

// h1.append(h1text);

// const div = document.querySelector("div");

// div.append(h1);


const div = document.createElement("div");

const name = "siva";

div.innerHTML = `<h1>welcome to this site ${name}</h1>`;

const body = document.querySelector('body');

const i = document.createElement("i");
i.classList.add("fa-solid", "fa-folder-open");
i.style.fontSize='80px';
body.append(div);
body.append(i);