function changeNumber(identifiant, numero){
    if(numero == 0){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        hideSegment(identifiant, "g");
    }
    if(numero == 1){
        this.afficheur = document.getElementById(identifiant);
        hideSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        hideSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        hideSegment(identifiant, "g");
    }
    if(numero == 2){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        hideSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == 3){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == 4){
        this.afficheur = document.getElementById(identifiant);
        hideSegment(identifiant, "a");
        showSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        hideSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == 5){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        showSegment(identifiant, "d");
        hideSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == 6){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        hideSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == 7){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        hideSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        hideSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        hideSegment(identifiant, "g");
    }
    if(numero == 8){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        showSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
    if(numero == 9){
        this.afficheur = document.getElementById(identifiant);
        showSegment(identifiant, "a");
        showSegment(identifiant, "b");
        hideSegment(identifiant, "c");
        showSegment(identifiant, "d");
        showSegment(identifiant, "e");
        showSegment(identifiant, "f");
        showSegment(identifiant, "g");
    }
}



function hideSegment(identifiant, lettre){
    this.afficheur = document.getElementById(identifiant);
    a = this.afficheur.querySelector('.' + lettre);
    this.a.className = lettre + " remove";
}

function showSegment(identifiant, lettre){
    this.afficheur = document.getElementById(identifiant);
    a = this.afficheur.querySelector('.' + lettre);
    this.a.className = lettre + "";
}
