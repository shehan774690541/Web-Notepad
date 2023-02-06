function txtCopy(tt) {
    // Get the text field

    var copyText = document.getElementById("cmtBox");

    if (document.getElementById('cmtBox').value == ""){
        document.getElementById("stts").innerHTML = " > Note Book Is Empty!";
        alert('Notepad Is Empty');
    }
    else{
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        const d = new Date();
        document.getElementById("stts").innerHTML = " > Texts Are Copied!";
    }

}

//