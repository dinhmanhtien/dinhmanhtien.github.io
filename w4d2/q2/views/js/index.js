$(() => {
    const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
    
    const addedSuccess = () =>{
        let answer = answers[Math.floor(Math.random()*answers.length)];
        $("#question").val(answer);
        $("#question").focus();
    }
    const noSuccess = () => {
        $("#msg").text("unable reach to server")  ;
    }
    $("#8ball").submit(()=>{
       /*  $.get("/8ball").done(addedSuccess)
          .fail(noSuccess); */
          fetch("/8ball")
        //  .then(res => res.json())
          .then(addedSuccess)
          .catch(noSuccess);
        return false;
    });


});