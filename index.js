// code your solution here


function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();


function mondayWork(monActivity = "go to the office"){
    return `This Monday, I will ${monActivity}.`
}


function wrapAdjective(flare = "*"){
    return function (compliment = "special"){
        return `You are ${flare}${compliment}${flare}!`
    }

}

wrapAdjective("%")("a dedicated programmer");
