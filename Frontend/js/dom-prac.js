const heading=document.getElementById("heading");
const message=document.getElementById('message');
heading.textContent="Welcome, Adminstrator";
message.textContent="you have five pending complaitns";
heading.style.color="green";
const newHeading =document.createElement("h2");
newHeading.textContent="Welcome to CivicResolve";
console.log(newHeading);
container.appendChild(newHeading);
// const Container=document.getElementById("complaintContainer");
// const card =document.createElement("div");
// const title =document.createElement("h2");
// title.textContent="Road Damage";
// const description = document.createElement("p");
// description.textContent="A large pothole near main road";
// const complaintStatus = document.createElement("span");
// complaintStatus.textContent = "pending";
// card.appendChild(title);
// card.appendChild(description);
// card.appendChild(complaintStatus);
// Container.appendChild(card);
const complaints=[
    {
        title:"Road Damage",
        status:"pending",
    },
    {
        title:"Water Leakage",
        status:"in-progress",
    },
    {
        title:"Street Light Not Working",
        status:"resolved",
    }

];
const Container=document.getElementById("complaintContainer");
complaints.forEach((complaint)=>{
    const card =document.createElement("div");
    const title=document.createElement("h2");
    title.textContent=complaint.title;
    const complaintStatus=document.createElement("p");
    complaintStatus.textContent=complaint.status;
    card.append(title,complaintStatus);
    Container.append(card);
    const updateBtn=document.getElementById("updateButton");
    
    updateBtn.addEventListener("click",function(){
        complaintStatus.textContent="status resolved";
    })
})
const nameInput =document.getElementById("citizen");
const msg =document.getElementById("message");
nameInput.addEventListener("input",()=>{
    msg.textContent="hello," + nameInput.value;
})
const action=document.getElementById("actions");    
action.addEventListener("click",(event)=>{
    if(event.target.classList.contains("deletButton")){
        console.log("complaint deleted");
    }
});