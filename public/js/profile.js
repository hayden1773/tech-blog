document.querySelector("#newPost").addEventListener("submit",e=>{
    e.preventDefault()
    const PostObj = {
        title:document.querySelector("#title").value,
        body:document.querySelector("#body").value,
    }
    
    fetch("/api/Posts",{
        method:"POST",
        body:JSON.stringify(PostObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("not working")
        }
    })
}
)
const btn = document.querySelectorAll('.del');

btn.forEach(del =>{
    del.addEventListener('click',e=>{
        
        e.preventDefault()
        const deleteId = e.target.dataset.Post
        
        fetch(`/api/Posts/${deleteId}`,{
            method:"DELETE",
        }).then(res=>{
            if(res.ok){
                location.reload()
            } else {
                alert("not working")
            }

        })
    })
})