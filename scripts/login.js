import { Auth, Logout } from '../services/auth/login.js';
import { ValidateForm } from '../utils/validator.js';
// import { GetInfo } from '../services/userServices.js';

Logout();

var errLabel = document.getElementById('errorText');

document.getElementById("loginForm").addEventListener('submit', function(){

    var formData = {
        username : document.getElementById('username').value,
        password : document.getElementById('password').value
    };

    if(ValidateForm()){
        Auth({
            username: formData.username,
            password: formData.password
        }, function(at){
            // console.log(at);
            if(!at.err){
                errLabel.innerText = "";
                console.log('Logged Successfully');

               /*GetInfo(at.sea.pub, function(val, key){
                    console.log(val);
                });*/

                document.location.href = 'index.html';

            }
            else{
                errLabel.innerText = at.err;
            }
        });
    }

});