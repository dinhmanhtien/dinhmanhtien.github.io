$(()=>{
    getData = (res) =>{
        return res.text();
    }
    successFunc = (res) => {
        console.log(res);
        $("#body").append("<pre>"+res+"</pre>");
    }
    errorFunc = (res) =>{
        console.log("error");
    }
    finalFunc = (res) =>{
        console.log("finalFunc");
    }
    fetch('/js/mycontact.txt',{
        method: "get"
    })
    .then(getData).then(successFunc).catch(errorFunc).finally(finalFunc);
});