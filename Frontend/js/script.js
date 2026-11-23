console.log("Welcome to Civic Resolve");
const citizenName="Nilesh";
const complaintId=1001;
let complaintStatus ;
// complaintStatus="In-progress";
const municipality="chennai";
console.log(citizenName);
console.log(complaintId);
console.log(complaintStatus);
console.log(municipality);
let isResolved=false;
let assignedOfficer=null;
console.log(isResolved);
console.log(assignedOfficer);
console.log(typeof citizenName);
console.log(typeof complaintId);
console.log(typeof isResolved);
console.log(typeof assignedOfficer);
console.log(typeof complaintStatus);
for(let i=0;i<5;i++){
    console.log(i)

}
let complaintCount =10;
while (complaintCount <=15){
    console.log(complaintCount);
    complaintCount++;
}
let count =20;
do{
    console.log(count);
    count++;
}while(count<=25);
function getComplaintDetails() {
    return {
        id: 1001,
        category: "Road Damage",
        status: "Pending"
    };
}

const complaint = getComplaintDetails();

console.log(complaint.id);
console.log(complaint.category);
console.log(complaint.status);
function calculateTotal(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(calculateTotal(10, 20, 30));
console.log(calculateTotal(5, 10, 15, 20));
function greetCitizen(name) {
    console.log("Welcome, " + name);
}

function processUser(callback) {
    callback("Nilesh");
}

processUser(greetCitizen);