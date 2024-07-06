
function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthChecker = document.getElementById("strength");
    let strength = " ";

    if (password.length < 7) {
        strength = "Too Short";
    } else {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const conditionsMet = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChars].filter(Boolean).length;
        console.log(conditionsMet);
        switch (conditionsMet) {
            case 0:
            case 1:
                strength = "Weak";
                break;
            case 2:
                strength = "Medium";
                break;
            case 3:
            case 4:
                strength = "Strong";
                break;
        }
    }

    strengthChecker.textContent = `Password Strength: ${strength}`;
}



// function checkPasswordStrength(){
//     const password = document.getElementById("password").value;
//     const strenghtchecker = document.getElementById("strength");
//     let strength = " ";

//     if(password.length>8){
//         const UpperCase = /[A-Z]/.test(password);
//         const LowerCase = /[a-z]/.test(password);
//         const Numbers = /[0-9]/.test(password);
//         const SpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//         const condition = [UpperCase,LowerCase,Numbers,SpecialChars].filter(Boolean).length;

//         switch(condition){
//             case 0:
//                 strength = "Weak";
//                 break;

//             case 1:
//                 strength = "Medium";
//                 break;

//             case 2:
//                 strength = "Strong";
//                 break;
//         }
//         strenghtchecker.textContent = ` ${strength}`;
//     }
// }