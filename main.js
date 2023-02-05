//
//Highlevel Goal:
//show page one
//click once to show new url in window location
//click again to change page two
//**for a better demo, possibly add "searching for dlp in params" 
//before changing to the 2nd page 
//
//
//Extra: test with two html pages..cleaner.

//Highlevel: create url
//show in console
    const href = document.getElementById('link');
    const firstHref = document.getElementById('firstLink');
    console.log(href)
    console.log(firstHref)

//Highlevel: show params in search in window.loocation--already showed in href console log beforhand
    //grab href
    //grab param from href
    //print querystring on page or console
    console.log("window.location", window.location);
    const dlpParam = href.search;
    console.log('My DLP Param:', dlpParam);

    const blockUrl = dlpParam;



//Highlevel: Bring everything together
    //hide block 2 on load
    // which url shows on load?? -- no params 'http://127.0.0.1:5500/'
    document.querySelector('.two').style.display = 'none';
    
    //first click- show params
    addEventListener('click', () => {

        window.location.search = blockUrl;
    })
    
    
    // document.querySelector('.two').style.display = 'block';
    // document.querySelector('.one').style.display = 'none';
    // console.log('switch');


