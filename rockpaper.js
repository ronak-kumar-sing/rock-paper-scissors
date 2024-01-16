let usersr=0;
let compsor=0;
let usersocor=document.querySelector(".users");
let compsocor=document.querySelector(".comps");
let choies=document.querySelectorAll(".choies");
let msg=document.querySelector(".msg");
let userid=document.querySelector("#users");
let comprid=document.querySelector("#comps");
let resbtm=document.querySelector("button")
const compchoies=()=>{
    const options=['Rock','Paper','Scissors'];
    const reIdx=Math.floor(Math.random()*3);
    return options[reIdx]
}
const playgame=(userchoies)=>{
    console.log(`player choies ${userchoies}`)
    //Generate computer choice
    const computerchoies=compchoies()
    console.log(`computer choies ${computerchoies}`);
    if (userchoies===computerchoies){
        let msg=document.querySelector(".msg")
        msg.innerText="It's a draw!"
    }else{
        userwin=true
        if (userchoies==='Rock'){
            userwin=computerchoies==='Scissors'? true : false
        }else if(userchoies==='Paper'){
            userwin=computerchoies==='Rock'? true : false
        }else{
            userwin=computerchoies==='Paper' ? true : false
        }
        if(userwin==true) {
            // let msg=document.querySelector(".msg")
            // let userid=document.querySelector("#users")
            usersr++
            userid.innerText=usersr
            msg.innerText=`You win! Your ${userchoies} > Computer ${computerchoies}`
        }else{
            // let comprid=document.querySelector("#comps")
            // let msg=document.querySelector(".msg")
            compsor++
            comprid.innerText=compsor
            msg.innerText=`You lose! Your ${userchoies} < Computer ${computerchoies}` 
        }
    }
    

}
choies.forEach((choie)=>{
    choie.addEventListener("click",()=>{
        const userchoies=choie.getAttribute('id')
        playgame(userchoies)

    })
})
const restbtm=()=>{
    usersr=0;
    userid.innerText="0";
    compsor=0;
    comprid.innerText="0";
    msg.innerText="Play Game Again!"
}
resbtm.addEventListener("click",()=>{
    restbtm();
})