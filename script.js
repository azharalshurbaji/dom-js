
//The sentence in <h1> will be printed in <p>
document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML

function myFunction() {
    
    // the Text color and BackgroundColor will change
    document.getElementById("myDemo").setAttribute("class" , "democlass")
    document.getElementById("myDemo").style.backgroundColor = "yellow"
    
    // When the button is pressed a new text will appear
    document.getElementById("addNewItem").style.color = "red"
    document.getElementById("addNewItem").innerHTML = "Hi I'm New Item （￣︶￣）↗";


    // the link will be activated
    let addAnchor = document.getElementById("myAnchor")
    addAnchor.setAttribute("href" , "https://www.facebook.com")
    // // document.getElementById("myAnchor").setAttribute("href" , "https://www.facebook.com")
    

    // a new item will be added
    const item =document.createElement("li")
    const itemText = document.createTextNode("Tea")
    item.appendChild(itemText)
    document.getElementById("listItems").appendChild(item)


    // Replace and Change Color an HTML element
    const replaceElement = document.getElementById("listItemsReplace").children[0]
    var newElement = document.createTextNode("Water")
    replaceElement.replaceChild(newElement , replaceElement.childNodes[0])
    var newElement = document.querySelector("li.changeColor").style.color = "red"
    
    
}

function myFunctionRemove() {

    const itemRemove = document.getElementById("listItemsRemove")
    itemRemove.removeChild(itemRemove.firstElementChild)
    if(itemRemove) {
        document.getElementById("hideButton").style.display = "none"  
    }
}

function validateForm() {
    var fullName = document.myForm.fullName.value
    var email = document.myForm.email.value
    var password = document.myForm.password.value
    
    if(fullName == '' || !email) {
        document.getElementById("messageError").innerHTML = "❌ Field Can't be Blank"
        document.getElementById("messageError").style.backgroundColor = "#ff9f9f"
        return false
    }
    else if(password.length < 8) {
        document.getElementById("messageError").innerHTML = "❌ Password must be at least 8 characters long"
        document.getElementById("messageError").style.backgroundColor = "#ff9f9f"
        return false
    }
}
