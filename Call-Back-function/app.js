// Callback
function appKaFunction(callback) {
//   ...

  console.log(
    "bartan dhore ho ammi ke dant sunrhe non extistent susraal ke tane sunrhe ho "
  );

  callback()
}

function dostKaFunction(){
    console.log("assignment chaap do mera dost nh ha yaar");

}

appKaFunction(dostKaFunction)