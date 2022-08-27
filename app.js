function loginArea(){
    const loginButton = document.getElementById('pai-submit');
    loginButton.addEventListener('click',(event) => {
        let inputName = document.getElementById("name").value;
        let inputpassword = document.getElementById("Password").value;
        if(inputName === "" || inputpassword === ""){
            alert("please fill the form")
        }else{
            const loginArea = document.getElementById('login-area');
            const loginDashBoard = document.getElementById('login-dashboard');
            loginArea.style.display = "none";
            loginDashBoard.style.display = "block";
        }
    
    })
}
loginArea();
// Login Area Code Finish


// Login Dashboard Area Start
// Deposit Function
function deposit(balance){
    const dipSubmit = document.getElementById('dipSubmit');
    dipSubmit.addEventListener('click', () => {
        let depositInput = document.getElementById('depositInput').value;
        if(depositInput === ""){
            alert("please add your deposit amount");
        }else{
            let depositInput = document.getElementById('depositInput').value;    
            let parsDepsit = parseFloat(depositInput)
            balance('depositeValue', parsDepsit)
            balance('balanceValue', parsDepsit)
            document.getElementById('depositInput').value = "";
        }
    
    })
}
deposit(balance);

// withdraw Function
function withdraw(balance){
    let withdrawButton = document.getElementById('withdrawsubmit');
    withdrawButton.addEventListener('click', () => {
        
    let withdrawInput = document.getElementById('withdraw').value;
    if(withdrawInput === ""){
        alert("please add your withdraw amount");
    }else{
        let withdrawInput = document.getElementById('withdraw').value;
        let withdrawPar = parseFloat(withdrawInput);
        balance('withdrawValue', withdrawPar);
        balance('balanceValue', -1 * withdrawPar);
        document.getElementById('withdraw').value = "";
    }
        
    })
}
withdraw(balance)

// Balance Common Function
function balance(id, parsDepsit){
    let balanceValue = document.getElementById(id).innerText;
    let parvalue = parseFloat(balanceValue);
    let balTotal = parsDepsit + parvalue;
    document.getElementById(id).innerText = balTotal;
    
}
