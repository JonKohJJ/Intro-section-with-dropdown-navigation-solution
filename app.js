// hamburger logic - open
let burger = document.getElementsByClassName('burger')[0];
let navlinks = document.getElementsByClassName('navlinks')[0];
burger.addEventListener('click', function(){
    if (navlinks.classList.contains('active')){
        navlinks.classList.remove('active');
        document.documentElement.style.setProperty('--body-before-opacity', '0');
    }else{
        navlinks.classList.add('active');
        document.documentElement.style.setProperty('--body-before-opacity', '0.5');
    }
});

// close logic - close
let closeIcon = document.getElementsByClassName('close')[0];
closeIcon.addEventListener('click', function(){
        navlinks.classList.remove('active');
        document.documentElement.style.setProperty('--body-before-opacity', '0');
});

// dropdown logic
let navitems = document.getElementsByClassName('navitem');

for (var i=0; i<navitems.length; i++){
    if (navitems[i].childNodes.length != 1){
        navitems[i].addEventListener('click', function(){

            if (this.nextElementSibling.classList.contains('expanded')){
                this.nextElementSibling.classList.remove('expanded');
                this.nextElementSibling.style.height = "0";
                this.nextElementSibling.style.opacity = "0";
                this.nextElementSibling.style.margin = "0 0 0 20px";
                this.childNodes[3].src = "./images/icon-arrow-down.svg";
            }else{
                this.nextElementSibling.classList.add('expanded');
                this.nextElementSibling.style.height = "100%";
                this.nextElementSibling.style.opacity = "100";
                this.nextElementSibling.style.margin = "5px 0 0 20px";
                this.childNodes[3].src = "./images/icon-arrow-up.svg";
            }   

        })
    }
}


// logic to change hero image
if (window.innerWidth >= 991){
    document.getElementsByClassName('hero-image')[0].src = "./images/image-hero-desktop.png";
}
