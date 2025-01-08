$(document).ready(function(){
    $('#signup').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
            },
            mob:{
                required:true,
                
            },
            mail:{
                required:true,
            },
            txt:{
                required:true
            },
        },

    });
});