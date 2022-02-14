
document.querySelector("#loginsubmit").addEventListener("click",checkUserdata);

function checkUserdata(event){
    event.preventDefault();
    var login = false;
    let check = JSON.parse(localStorage.getItem("UserdataArr"));
    let checkemail = document.querySelector("#loginemail").value;
    let checkpass = document.querySelector("#loginpass").value;

    for(let i = 0; i < check.length; i++){
        if(checkemail === check[i].useremail){
            if(checkpass === check[i].userpass){
                alert(check[i].username + " " + "Loged in Successfully" );
                document.querySelector("#loginemail").value = "";
                document.querySelector("#loginpass").value = "";
                window.location.href = "index.html"
                login = true;
                localStorage.setItem("checklogggedin",login);
            }
            else{
                alert("Enter Valid Password");
            }
        }
        else{
            alert("Enter Valid Email");
        }
    }
}


function storeImages(){
    let ImagesArr = slideImages;
    localStorage.setItem("ImagesData",JSON.stringify(ImagesArr));
}