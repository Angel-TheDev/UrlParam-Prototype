const firstHref = document.getElementById('firstLink');
let param1 = firstHref.search;
const categoryParam = param1.includes('davis');


if (categoryParam) {
    document.querySelector('#one').style.display = 'block';
} else {
    document.querySelector('#two').style.display = 'block';
}



