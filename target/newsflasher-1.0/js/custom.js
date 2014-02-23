$('#logo').click(function(){
    $(location).attr('href', "browse.jsp");
});

$('#upload').click(function(){
    $(location).attr('href' , "upload.jsp");
});
var fb_token;
var fb_userId = null;
var fb_email;
window.fbAsyncInit = function() {
    FB.init({
        appId: '408193472649526',
        oauth: true,
        status: false, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true // parse XFBML
    });
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {

            FB.api('/me', function(response) {
                var picSrc = ("https://graph.facebook.com/" + response.id + "/picture?width=50");
                var parts = location.pathname.split('/');
                // document.getElementById("profilePic").src = picSrc;                            
                $(".fb-pic").attr('src', picSrc);
                $("#user-name").append(response.name);
                $("#sidebar-status-text").text("Sign out");
                /*if (parts[parts.length - 1] !== 'browse.jsp' || parts[parts.length - 1] === '') {
                 location.href = 'browse.jsp';
                 }*/
            }
            );
        } else {
            $("#fb-pic").prepend('<i class="fa fa-user fa-padding-15">');
            $("#user-name").append("Stranger");
            $("#sidebar-status-text").text("Sign in");
        }
    });
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
$('.fb-button').click(function() {
    fb_login();
});
$('#sidebar-status').click(function() {

    if ($('#sidebar-status-text').text() === "Sign out") {

        FB.api('/me/permissions', 'delete', function(response) {
            if (response) {
                $(location).attr('href', "index.jsp");
            }
        });
    } else {
        fb_login();
    }
});
/**
 * Calls on fb login when user clicks n fb_login button. Checks if user is in db? if yes,log the user in, if no, sign him up. <- Done with Ajax
 * @returns 
 */
function fb_login() {
    FB.login(function(response) {
        if (response.authResponse) {
            access_token = response.authResponse.accessToken;
            //  check if user has an account in it. If email is available (have not signed up),create a new user
            FB.api("/me", function(rsp) {
                if (rsp && !rsp.error) {
                    $(location).attr("href", "browse.jsp");
                    //$('.fb-button').hide();
                    /*         $.ajax({url: "/sports/processSignUp", type: 'POST',
                     data: {email: rsp.email},
                     success: function(suc) {
                     
                     if ($.trim(suc) === "available") {
                     $.ajax({url: "/sports/fbSignUp", type: 'POST',
                     data: {type: "fb", mSignup: "fb", email: rsp.email, name: rsp.first_name, gender: rsp.gender, dob: rsp.birthday}
                     });
                     $.cookie("user",rsp.email, { path: '/' });  
                     window.location.href = "../Admin/main.jsp";
                     } else {
                     $.cookie("user",rsp.email, { path: '/' }); 
                     
                     window.location.href = "../Admin/main.jsp";
                     }
                     ;
                     }
                     });*/
                }
                ;
            });
        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'publish_stream,email,read_stream,user_birthday'
    });
}
;
