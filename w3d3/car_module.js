module.exports.drive = function(){
    console.log('The car is moving forward');
}

module.exports.turn = function(degree){
    console.log(`The car turns ${degree}`);
}

module.exports.break = function(){
    console.log('The car stops');
}