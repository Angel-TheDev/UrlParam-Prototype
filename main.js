//
//Highlevel Goal:
//show page one
//onclick of button once - show new url in window location
//AND show searching params 2 secs later
//After 5 secs, hide block one and searching params- 
//AND SHOW block2 -if mycode include angel- switch

//**for a better demo, possibly add "searching for angel in params"
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
    const param = href.search;

    const blockUrl = param;



//Highlevel: Bring everything together
    //hide block 2 on load
    // which url shows on load?? -- no params 'http://127.0.0.1:5500/'
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.searching').style.display = 'none';

    //first click- show params
    //add button
    //on click of button switch pages if angel
    // ORR set timeout with searching param string
    let clickedTwice = 0;
   // const searching = document.querySelector('.searching');

    function showParam() {
        window.location.search = blockUrl;
        showSearchingParam();
        console.log('param')
        clickedTwice = 1;
  
    }
    setTimeout(hideSearchingParam, 5000);


    
    














    
    
    function showSearchingParam(){
        document.querySelector('.searching').style.display = 'block';
 
    }
 
    function hideSearchingParam(){
     document.querySelector('.searching').style.display = 'none';
 
 }
     function showBlockTwo(){
  
         console.log('does anything')
         if(blockUrl.includes('angel')){
             document.querySelector('.one').style.display = 'none';
             document.querySelector('.two').style.display = 'block';
             console.log('switch');
 
         }
     }