$(document).ready(function() {
    $("#image1").click(function(){
        $("#description-service1").show()
        $("#image1").hide()
    });
    $("#description-service1").click(function(){
        $("#image1").show()
        $("#description-service1").hide()
    })
    $("#image2").click(function(){
        $("#description-service2").show()
        $("#image2").hide()
    });
    $("#description-service2").click(function(){
        $("#image2").show()
        $("#description-service2").hide()
    })
    $("#image3").click(function(){
        $("#description-service3").show()
        $("#image3").hide()
    });
    $("#description-service3").click(function(){
        $("#image3").show()
        $("#description-service3").hide()
    })

    //text when hovered
    
        $("#img1").hover(function(){
            $("#news").toggle()
        });
        $("#img2").hover(function(){
            $("#photography").toggle()
        });
        $("#img3").hover(function(){
            $("#security").toggle()
        });
        $("#img4").hover(function(){
            $("#grocery").toggle()
        });
        $("#img5").hover(function(){
            $("#music").toggle()
        });
        $("#img6").hover(function(){
            $
            $("#ecommerce").toggle()
        });
        $("#img7").hover(function(){
            $("#design").toggle()
        });
        $("#img8").hover(function(){
            $("#restaurant").toggle()
        });

        //portfolio background when hovered

        $(".portfolio-image").hover(function () {
            $(this).toggleClass("portfolio-background");
        });

        //Button submitted
        $("#embedded-subscribe").click(function() {
            var name = document.getElementById("FNAME").value;
            var email = document.getElementById("EMAIL").value;
            var message = document.getElementById("subject").value;

            //if user didn't fill the required field error message
            if(name === "" || email === "" || message ==="") {
                swal(
                    {
                        title: "Error!",
                        text: "Please fill in the required fields!",
                        icon: "error",
                        button: "OK!",
                    }
                );
            }
            //if user filled out all the fields return succesful message
            else {
                swal(
                    {
                        title: "Success!",
                        text: `${name} your message has been recieved!`,
                        icon: "success",
                        button: "OK!",
                    }
                );
            }
        })
})