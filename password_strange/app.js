function checkStrength(){
    const password = document.getElementById("password").value;
    const strengthDiv = document.getElementById("strength");

    let strength  = 0;
    if(password.length >=6) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[^a-zA-Z0-9]/.test(password)) strength++;

    strengthDiv.style.display = "block";

    if(strength <= 1){
        strengthDiv.textContent = "weak";
        strengthDiv.classList.add('weak');
    }else if(strength == 2 || strength == 3){
        strengthDiv.textContent = "medium"
        strengthDiv.className = "strength medium"
    }else{
        strengthDiv.textContent = "strong"
        strengthDiv.className = "strength strong"
    }





}


