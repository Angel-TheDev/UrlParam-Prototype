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
    const param2 = href.search;
    const param1 = firstHref.search;

    const blockTwoUrl = param2;
    const blockOneUrl = param1;

//Highlevel: Bring everything together
    //hide block 2 on load
    // which url shows on load?? -- no params 'http://127.0.0.1:5500/'
    showBlockOne();
    //document.querySelector('.two').style.display = 'none';
    //document.querySelector('.searching').style.display = 'none';

    //showParam();

    //first click- show params
    //add button
    //on click of button switch pages if angel
    // ORR set timeout with searching param string
    //
    //grab button in a var
    //add var to showParam function
    //
    //on click of button show new url in window location
    //AND show searching params 2 secs later
    
    //let clickedTwice = 0;
    function showParam() {
        const showsearch = document.querySelector('.searching');
        
        if(showsearch.style.display = 'none'){
           // window.location.search = blockUrl;
           showsearch.style.display = 'block';
        }
    }
    
    
    //setTimeout(hideSearchingParam, 5000);
    
    
    
    
    //LEFT OFF: 
    //separating the params and div blocks into functions for cleaner code
    //BUG: block 2 keeps flickering!!  --
  
    
    
    
    
    
    
    function showBlockOne(){
        window.location.search = blockOneUrl;
        document.querySelector('.one').style.display = 'block';
        const one = document.querySelector('.one');

        if(one.style.display = 'block'){
            document.querySelector('.two').style.display = 'none';
            document.querySelector('.searching').style.display = 'none';
        }
    }






    
    
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