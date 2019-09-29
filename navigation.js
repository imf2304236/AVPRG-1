function init(current) {
    let list = document.createElement('ul');

    let numbers = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13',
        '14a','14b','14c','14d','Bonus1','Bonus2','Bonus3','Bonus4'];

for (let i=0; i<22; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');

    if (i == 0) {
        link.setAttribute('href','../../index.html');
        link.innerHTML = 'Home';
    } else if (i == current) {
        link.setAttribute('href','index.html');
        link.className = 'active';
        if (i < 18) {
            link.innerHTML = numbers[i] + '. Aufgabe';
        } else {
            link.innerHTML = numbers[i];
        }
    } else if (i < 18) {
        link.setAttribute('href','../Aufgabe' + numbers[i] +'/index.html');
        link.innerHTML = numbers[i] + '. Aufgabe';
    } else {
        link.setAttribute('href','../' + numbers[i] +'/index.html');
        link.innerHTML = numbers[i];
    }

    li.appendChild(link);
    list.appendChild(li);
}

var ss = document.createElement("link");
ss.type = "text/css";
ss.rel = "stylesheet";
ss.href = "../../navigationStyle.css";
document.getElementsByTagName("head")[0].appendChild(ss);

document.body.appendChild(list);
}