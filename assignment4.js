


let password = "DEVE/1@$^&:45;";

let pattern = /^[a-zA-Z0-9\.\-\,\+\(\)@#$^&\*~><;:_ /]{8,20}$/;

console.log(pattern.test(password));