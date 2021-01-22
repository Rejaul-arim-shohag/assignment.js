//Problem: 1 (Kilometer To Meter)
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}


//Problem: 2 (Budget calculator)
function budgetCalculator(watch, phone, laptop){
   if(watch/phone/laptop<0){
       return"Enter The Right Number";
   }else{
       var watchCost = watch * 50;
       var phoneCost = phone * 100;
       var laptopCost = laptop * 500;

       var totalCost = watchCost + phoneCost + laptopCost;
       return totalCost;
   }
}
var total = budgetCalculator(3, 3, 3);
console.log(total);


//Problem:3 (Hotel Cost)
function hotelCost(day){
    if(day < 0){ 
        return"What is Negative Day!!";
    } else{
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
        return cost;
    } else if(day <= 20){
        var firstTenDay = 10 * 100;
        var remainingDay = day - 10;
        var secendTenDay = remainingDay * 80;
        var cost = firstTenDay + secendTenDay;
        return cost;
    } else{
        var firstTenDay = 10 * 100;
        var secendTenDay = 10 * 80;
        var remainingDay = day - 20;
        var totalDay = remainingDay * 50;
        var cost = firstTenDay + secendTenDay + totalDay;
        return cost;

    }
  }
    
}
var mrRejaul = hotelCost(30);
console.log(mrRejaul);


//Problem:4 (Mega Friends)
function megaFriend(friends) {
    if (friends.length > 0) {
      var bigFirend = friends[0];
      for (var i = 0; i < friends.length; i++) {
        var newBigFirend = friends[i];
        if (typeof newBigFirend === "number") {
          return "please use a name";
        } else {
          if (newBigFirend.length > bigFirend.length) {
            bigFirend = newBigFirend;
          }
        }
      }
      return bigFirend;
    }
  }
  
  //My FriendsName Array
  var friendList = ["Mohammad", "Rejaul Karim", "Shohag"];
  var biggestName = megaFriend(friendList);
  console.log(biggestName);






