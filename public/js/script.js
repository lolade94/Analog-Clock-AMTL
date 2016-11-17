window.onload = function () {
       setInterval(showClock, 1000);

       function showClock() {

           // DEFINE CANVAS AND ITS CONTEXT.
           var canvas = document.getElementById('canvas');
           var ctx = canvas.getContext('2d');

           var date = new Date();

           document.getElementById('date').innerHTML = date.getHours() + ":" + date.getMinutes() +":" + date.getSeconds();
           var angle;
           var secHandLength = 60;

           // CLEAR EVERYTHING ON THE CANVAS. RE-DRAW NEW ELEMENTS EVERY SECOND.
           ctx.clearRect(0, 0, canvas.width, canvas.height);

          outerDial2();
          centerDial();
          markHours();
          markSeconds();
          showSeconds();
          showMinutes();
          showHours();


          function outerDial2(){
            ctx.beginPath();
            ctx.arc(canvas.width/2, canvas.height/2, secHandLength + 17, 0, Math.PI * 2);
            ctx.strokeStyle='#fff';
            var r_a = 0.3;
            ctx.fillStyle = "rgba(255, 255, 255, " + r_a + ")"
            ctx.stroke();
          }

          function centerDial(){
             ctx.beginPath();
             ctx.arc(canvas.width/2, canvas.height/2, 2, 0, Math.PI * 2);
             ctx.lineWidth = 3;
             ctx.fillStyle ='#1E2749';
             ctx.strokeStyle ='#828A95';
             ctx.stroke();
          }

          function markHours(){
            for (var i = 0; i < 12; i++) {
                    angle = (i - 3) * (Math.PI * 2) / 12;       // THE ANGLE TO MARK.
                    ctx.lineWidth = 2;            // HAND WIDTH.
                    ctx.beginPath();

                    var x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
                    var y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                    var x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 10));
                    var y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 10));

                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);

                    ctx.strokeStyle = '#828A95';
                    ctx.stroke();
          }
        }

          function markSeconds(){
            for (var i=0; i<60; i++){
              angle = (i-3) * (Math.PI * 2)/60; //the angle to mark
              ctx.lineWidth =1; //Hand width
              ctx.beginPath();

              var x1 = (canvas.width/2) + Math.cos(angle) * (secHandLength);
              var y1 = (canvas.height/2) + Math.sin(angle) * (secHandLength);
              var x2 = (canvas.width/2) + Math.cos(angle) * (secHandLength -(secHandLength/30));
              var y2 =(canvas.width/2) + Math.sin(angle) * (secHandLength - (secHandLength/30));

              ctx.moveTo(x1,y1);
              ctx.lineTo(x2,y2);

              ctx.strokeStyle ='#E4D9FF';
              ctx.stroke();

            }
          }

          function showSeconds (){
            var sec = date.getSeconds();
            angle = ((Math.PI * 2) * (sec/60)) - ((Math.PI * 2)/4);
            ctx.lineWidth= 0.5; //Hand width

            ctx.beginPath();
            //Start from center of the clock
            ctx.moveTo(canvas.width/2, canvas.height/2);

            //draw the length
            ctx.lineTo((canvas.width/2 +  Math.cos(angle) * secHandLength),
             canvas.height/2 + Math.sin(angle)  *  secHandLength);

             //draw the tail of the second Hand
             ctx.moveTo(canvas.width/2, canvas.height/2);//start from the center

             //draw length
             ctx.lineTo((canvas.width/2 - Math.cos(angle)* 20),
              canvas.height/2 - Math.sin(angle) * 20);

              ctx.strokeStyle = '#fff';
              ctx.stroke();
          }

          function showMinutes(){
            var min = date.getMinutes();
            angle = ((Math.PI * 2) * (min/60)) - ((Math.PI * 2)/4);
            ctx.lineWidth = 1.5;  //handWidth

            ctx.beginPath();
            ctx.moveTo(canvas.width/2, canvas.height/2); //start from the center

            //Draw the length
            ctx.lineTo((canvas.width/2 + Math.cos(angle) * secHandLength/1.1),
                      canvas.height/2 + Math.sin(angle) * secHandLength/1.1);

            ctx.strokeStyle="grey";
            ctx.stroke();

          }

          function showHours(){
            var hour = date.getHours();
            var min = date.getMinutes();
            angle = ((Math.PI * 2) * ((hour * 5 + (min/60)  * 5)/60)) - ((Math.PI * 2)/4);
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            ctx.moveTo(canvas.width/2, canvas.height/2); //start from center;

            //draw the length
            ctx.lineTo((canvas.width/2 + Math.cos(angle) * secHandLength/1.5),
            canvas.height/2  + Math.sin(angle) * secHandLength / 1.5);


           ctx.strokeStyle= "#1E2749";//color of the hand
           ctx.stroke();


          }

       }
   };
