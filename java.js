function saveData(){
    let clubs,name,mobile,reg_number,email,Branch,des,tech,btn;
    clubs=document.getElementById("clubs").value;
    name=document.getElementById("name").value;
    mobile=document.getElementById("mobile").value;
    reg_number=document.getElementById("reg_number").value;
    email=document.getElementById("email").value;
    Branch=document.getElementById("Branch").value;
    reason=document.getElementById("des").value;
    tech=document.getElementById("tech").value;
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    user_records.push({
        "clubs":clubs,
        "name":name,
        "reg_number":reg_number,
        "mobile":mobile,
        "email":email,
        "Branch":Branch,
        "reason":reason,
        "skills":tech,
    
    
    })
    localStorage.setItem("users",JSON.stringify(user_records));
    
    }