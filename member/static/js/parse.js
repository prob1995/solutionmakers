
function newAccount(){
  Parse.initialize("DOCFRQzHNP4zxWW8S1QfyQ7l8pAsfzPcr8U9r1qe", "AX7yzCEAWZRFiceDVupx1aqjW1OqYbNYnNp16dej");  
  var nickname = document.getElementById('newname').value;
  var password = document.getElementById('newpassword').value;
  var email = document.getElementById('newemail').value;
  var major = document.getElementById('newmajor').value;
  var interest =  document.getElementById('interest').value;
  var user = new Parse.User();
  //let user name equal to email because PARSE need to use username to login. 
  //However, email is much easier to remember.
  user.set("username", email);
  user.set("nickname", nickname)
  user.set("password", password);
  user.set("email", email);
  
  // other fields can be set just like with Parse.Object
  user.set("major", major);
  user.set("interest", interest);
  
  
  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      alert('耶！註冊成功!')
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
};

function logIn(){
  Parse.initialize("DOCFRQzHNP4zxWW8S1QfyQ7l8pAsfzPcr8U9r1qe", "AX7yzCEAWZRFiceDVupx1aqjW1OqYbNYnNp16dej");
  var Lusername = document.getElementById('loginemail').value;
  var Lpassword = document.getElementById('loginpassword').value;
  Parse.User.logIn(Lusername, Lpassword, {
    success: function(user) {
    // Do stuff after successful login.
    alert('耶！登入成功!');
    //Redirect
    window.location = "/account";
    },
    error: function(user, error) {
    // The login failed. Check error to see why.
    alert("嗚！"+ error.code + " " + error.message)
    }
  });
};

function logOut(){
  alert("已登出");
  Parse.initialize("DOCFRQzHNP4zxWW8S1QfyQ7l8pAsfzPcr8U9r1qe", "AX7yzCEAWZRFiceDVupx1aqjW1OqYbNYnNp16dej");
  Parse.User.logOut();
  window.location = "../"

};

function account(){
  Parse.initialize("DOCFRQzHNP4zxWW8S1QfyQ7l8pAsfzPcr8U9r1qe", "AX7yzCEAWZRFiceDVupx1aqjW1OqYbNYnNp16dej");
  var c = Parse.User.current();
  var name = c.get("nickname");
  var email = c.getEmail();
  var major = c.get("major");
  $(document).ready(function(){
  $("#name").after("<dd>"+name+"</dd>");
  $("#email").after("<dd>"+email+"</dd>");
  $("#major").after("<dd>"+major+"</dd>");
  })
}




function goMain(){
  window.location = "../"
};

function logged(){
  Parse.initialize("DOCFRQzHNP4zxWW8S1QfyQ7l8pAsfzPcr8U9r1qe", "AX7yzCEAWZRFiceDVupx1aqjW1OqYbNYnNp16dej");
  var currentUser = Parse.User.current();
  if (currentUser) {
  // do stuff with the user
  window.location = "/account";
  } 
  else {
  // show the signup or login page
  window.location = "/login";
  }
};

function resetpw(){
  Parse.initialize("DOCFRQzHNP4zxWW8S1QfyQ7l8pAsfzPcr8U9r1qe", "AX7yzCEAWZRFiceDVupx1aqjW1OqYbNYnNp16dej");
  var email = document.getElementById('newemail').value;
  Parse.User.requestPasswordReset(email, {
  success: function() {
  // Password reset request was sent successfully
  alert('請查看email來重設密碼');
  },
  error: function(error) {
    // Show the error message somewhere
    alert("Error: " + error.code + " " + error.message);
  }
});
}