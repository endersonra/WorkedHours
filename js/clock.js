$("#btnCalculate").click(function () {
    //validating check-in
    if (document.getElementById("checkIn").value == "") {       
        $("#checkIn").notify(
            "The Check-In is required", 
            { position:"right" }
          );
          document.getElementById("checkIn").focus();
    }
    else {
        var checkIn = $('#checkIn').val();

        if (document.getElementById("checkOut").value == "") {
            $("#checkOut").notify(
                "The Check-Out is required", 
                { position:"right" }
              );
            
            document.getElementById("checkOut").focus();
        }
        else {
            var checkOut = $('#checkOut').val();

            if (document.getElementById("lunch").value == "") {
                $("#lunch").notify(
                    "The Lunch is required", 
                    { position:"right" }
                  );
            document.getElementById("checkOut").focus();
            } else {
                var lunch = $("#lunch").val();

                var hourCheckIn = $("#checkIn").val().split(':').map(Number);
                var hourCheckOut = $("#checkOut").val().split(':').map(Number);
                var hourLunch = $("#lunch").val().split(':').map(Number);
                var dif = (hourCheckOut[0]*60+hourCheckOut[1])-(hourCheckIn[0]*60+hourCheckIn[1])-(hourLunch[0]*60+hourLunch[1]);
                var MM = dif%60;MM.toString().length==1?MM="0"+MM:0;
                if(isNaN(dif)) return;
                var resultado = Math.floor((dif)/60) +":"+ MM;
                
                $.notify("The Hours Worked Were " + resultado, "success");

            }
           
        }
    }
});

