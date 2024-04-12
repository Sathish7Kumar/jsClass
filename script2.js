// document.write("Hello")

// document.body.innerHTML = "<h6>Hello JS</h6>"

const obj = {
    name : "Msd",
    age : 42
}
// console.log(obj.name);

// document.body.innerHTML = `<li>${obj.name}</li>`

// selectors - id class tagname qweryselector qweryselectorAll  

let first = document.getElementById("first")
let last = document.getElementById("last")

let btn = document.getElementById("btn")

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")

btn.addEventListener("click",()=>{

    // alert("hi !  u Clicked d btn")
    // prompt("what is 6+7")
    // confirm("Are u sure ? ")

   
    fname.innerText = first.value
    lname.innerText= last.value

})

function add(){
    alert("add div")
}





