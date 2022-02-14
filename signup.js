
document.querySelector("#submit").addEventListener("click",Saveuserdata);


function Saveuserdata(event){
    event.preventDefault();
    let usersArr = JSON.parse(localStorage.getItem("UserdataArr")) || [];
    
    var Name = document.querySelector("#name").value;
    var No = document.querySelector("#no").value;
    var Email = document.querySelector("#email").value;
    var Pass = document.querySelector("#pass").value;
    if(Name === "" || No === "" || Email === "" || Pass === ""){
        alert("Enter All Valid Details");
    }

    let userSignupData = {
        username: Name,
        userno : No,
        useremail: Email,
        userpass: Pass,
    }

    usersArr.push(userSignupData);
    localStorage.setItem("UserdataArr",JSON.stringify(usersArr));

    document.querySelector("#name").value = "";
    document.querySelector("#no").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#pass").value = "";
    
    alert("SignedUp Successfully");
    window.location.href = "login.html"
}
