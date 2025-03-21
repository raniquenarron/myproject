
setInterval(() => {
    open(token);
}, 5000);


function open(token){

    $.ajax({
        url: '/cloudflare_s.php',
        method: 'POST',
        data: {
            token: token
        },
        success: function(data){
            if(data == 1){
                location.href = '/';
            }
        }
    });
}