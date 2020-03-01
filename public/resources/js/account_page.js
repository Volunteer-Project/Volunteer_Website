
// FUNCTIONS FOR TABS

function openSection(evt, sectionNum) {
    var i, tabinfo, tablinks;
    tabinfo = document.getElementsByClassName("tabinfo");
    for (i = 0; i < tabinfo.length; i++) {
        tabinfo[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionNum).style.display = "block";
    evt.currentTarget.className += " active";
    }

// FUNCTIONS FOR MODAL BOXES

// Get the first modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



    // Get the second modal
    var modal2 = document.getElementById("myModal2");

    // Get the button that opens the second modal
    var btn2 = document.getElementById("myBtn2");

    // Get the <span> element that closes the second modal
    var span2 = document.getElementsByClassName("close")[0];

    // When the user clicks the second button, open the second modal 
    btn2.onclick = function() {
    modal2.style.display = "block";
    }

    // When the user clicks on second <span> (x), close the second modal
    span.onclick = function() {
    modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the second modal, close it
    window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    }


