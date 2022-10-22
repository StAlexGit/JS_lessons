let accordeonList = document.getElementsByClassName("accordeon-status");
for (elem of accordeonList) {
    elem.addEventListener ('click', function (event) {      
        let body = this.nextElementSibling ;
        if (this.innerText == '-') {
            this.innerText = '+';
            body.className  = 'accordeon-body-hide';
            } else {
                this.innerText = '-';
                body.className  = 'accordeon-body-show';
        }    
    })
}


