var websiteName = document.getElementById("websiteName")
var websiteURL = document.getElementById("websiteURL")
var url = websiteURL.value



var websitList;

if (localStorage.getItem("Websits") == null) {
    websitList = []
} else {
    websitList = JSON.parse(localStorage.getItem("Websits"))  
    display()
}




// function isValid(url) {
//     var regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/i;
//     return regex.test(url);
// }





function addWebsit() {

    if(websiteName.classList.contains("is-valid") &&
    websiteURL.classList.contains("is-valid")
)
    {
        
            var website = {
                siteName : websiteName.value,
                siteLink : websiteURL.value,
            };
        
        
            websitList.push(website)
            display()
            localStorage.setItem("Websits", JSON.stringify(websitList));
            clear()
    }

    else{
        // alert("Not valid Data")
        Swal.fire({
            icon: "error",
            title: "Site Name or Url is not valid, Please follow the rules below :",
            text: ">>> Site name must contain at least 3 characters >>> Site URL must be a valid one",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          
    }


}


function clear(){
    websiteName.value = null
    websiteURL.value = null
}


function display (){
    var cartona = ""
    for (var i = 0 ; i < websitList.length ; i++) {
        cartona += `            <tr>
            <td>${i+1}</td>
            <td>${websitList[i].siteName}</td>
            <td><button onclick="" class="btn btn-success"><i class="fa-solid fa-eye me-2"></i><a target="_blank" href="${websitList[i].siteLink}">Visit</a></button></td>
            <td><button onclick="Delete(${i})" class="btn btn-danger"><i class="fa-solid fa-trash me-2"></i>Delete</button></td>
            </tr>`
    }
    
    document.getElementById("table").innerHTML = cartona
}


function Delete(deleted){
    websitList.splice(deleted, 1)
    display ()
    localStorage.setItem("Websits", JSON.stringify(websitList))

}



function validatInputs(element) {
  
    var regex = {
      websiteName: /^[A-Z]{3,20}$/i,
      websiteURL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i,

    };
  
    if (regex[element.id].test(element.value) == true) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      }

  }


