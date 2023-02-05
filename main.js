//
//Highlevel Goal:
//show page one
//click once to show new url in window location
//click again to change page two
//**for a better demo, possibly add "searching for dlp in params" 
//before changing to the 2nd page 
//

//Highlevel: create url
//show in console
    const href = document.getElementById('link');
    const firstHref = document.getElementById('firstLink');
    console.log(href)
    console.log(firstHref)

// test of switch page
//listen for click to hide one div
addEventListener('click', () => {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'block';
    console.log('switch');

})