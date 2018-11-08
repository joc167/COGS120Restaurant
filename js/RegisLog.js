//user class
Class User{

  constructor(userid, key){
    this.userid = userid;
    this.key = key;
  }

  CompareUser(u1){

    if(u1.userid == this.userid){
      if(u1.key == this.key)
        return true;
    }

    return false;
  }
}

//function for Register
function RegisterPrompt(){

  var userid = null;
  var userkey = null;

  while(userid == null && userkey == null){
    userid = prompt("Please enter the User ID", "Gary Gillespie");
    userkey = prompt("Please enter the password for your account");
  }

  return new User(userid, userkey);
}

//function for login
function LoginCheck(userArr){
  var userid = null;
  var userkey = null;

  while(userid == null && userkey == null){
    userid = prompt("Please enter the User ID:");
    userkey = prompt("Please enter your password");
  }

  var user = new User(userid, userkey);
  var flag = false;

  for(var i = 0; i < userArr.length; i++){
      flag = userArr[i].CompareUser(user);
      if(flag) break;
  }

  if(flag){
    return user;
  }
  else{
    return null;
  }
}

//helper function to store to local
function storeUserArray(userArr){
  localStorage.setItem('userArray', JSON.stringify(userArr));
}

//helper function to pull from local
function getUserArray(){
  return localStorage.getItem('userArray');
}
