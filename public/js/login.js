document.querySelector("#login").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    console.log(userObj)
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/dashboard"
        } else {
            alert("Please try again")
        }
    })
})
document.querySelector("#signup").addEventListener("submit",e=>{
    e.preventDefault();
    const userObj = {
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
    }
    console.log(userObj)
    fetch("/api/users/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})