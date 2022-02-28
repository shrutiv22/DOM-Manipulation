showTable();
let btn=document.getElementById('btn');
btn.addEventListener("click", function(e) {
  const username=document.getElementById('username').value;
  const dob=document.getElementById('dob').value;
  const contact=document.getElementById('contact').value;
  const city =document.getElementById('city').value;
  const deg=document.getElementById('deg').value;
  const email=document.getElementById('email').value;
  
  smallData=[]
  //console.log(username,dob,contact,city,deg,email);
  let data=localStorage.getItem("data");
  if (data==null){
    dataObj=[];
  }
  else{
    dataObj=JSON.parse(data);
  }
  
  smallData.push(username);
  smallData.push(dob);
  smallData.push(contact);
  smallData.push(city)
  smallData.push(deg);
  smallData.push(email);

  dataObj.push(smallData);
  localStorage.setItem("data",JSON.stringify(dataObj));

  username.value="";
  dob.value="";
  contact.value="";
  city.value="";
  deg.value="";
  email.value="";
// console.log(dataObj);
  e.preventDefault();
  showTable();
});

function showTable() {
  console.log("showTable is running");
  let data=localStorage.getItem("data");
  if(data==null){
    dataObj=[];
  }else{
    dataObj=JSON.parse(data);
  }
  let html = "";
  dataObj.forEach(function(element, index) {
    html += `
    <tr>
    <th >${element[0]}</th>
    <th >${element[1]}</th>
    <th >${element[2]}</th>
    <th >${element[3]}</th>
    <th >${element[4]}</th>
    <th >${element[5]}</th>
    <th><button id="del" class="${index}" onclick="deleteNote(this.class)">Delete </button></th>
</tr>`;
//console.log(html)
  });
  let dataElm = document.getElementById("d");
  if (dataObj.length != 0) {
    dataElm.innerHTML = html;
  } 
  else{
    dataElm.innerHTML=`<p>Nothing to show! Add your details here!!</p>`
  };
  username.value="";
  dob.value="";
  contact.value="";
  city.value="";
  deg.value="";
  email.value="";
}
function deleteNote(index) {
  //   console.log("I am deleting", index);
  
    let data = localStorage.getItem("data");
    if (data == null) {
      dataObj = [];
    } 
    else {
      dataObj = JSON.parse(data);
    }
  
    dataObj.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(dataObj));
    showTable();
  }

  
