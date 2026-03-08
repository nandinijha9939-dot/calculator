let userinput=document.querySelectorAll(".no");
let screen=document.querySelector(".result");

let expression="";
userinput.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice= choice.dataset.choice;
        calculate(userchoice);
    })
});

const calculate=(userchoice)=>{
    console.log(userchoice);
    if(userchoice==="C"){
        expression="";
        screen.innerText="";
    }
    else if (userchoice==="="){
        try{
        expression = eval(expression);
        screen.innerText = expression;
    }
    catch{
        screen.innerText = "Error";
        expression = "";
    }
    }
    else{
        expression += userchoice;
        screen.innerText=expression;
    }
};
