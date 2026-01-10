document.getElementById("loginform").addEventListener("submit",function(e){
    e.preventDefault();

    const email=document.getElementById("email").Value;
        const password=document.getElementById("password").Value;
            const errorMsg=document.getElementById("errorMsg");

        const ADMIN_EMAIL ="1234";
        const ADMIN_PASSWORS ="1234";

        if(email=== ADMIN_EMAIL && password===ADMIN_PASSWORD){
                // SAVE LOGIN SESSION
                sessionStorage.setItem("isadminloggedin","true";

                    //redirect to dashboard
                    window.location.href="dashboard.html";

                )
        } else {
            errorMsg.classlist.remove("d-done");
        }
})