var c_canvas = document.getElementById("chart");
var context = c_canvas.getContext("2d");

class Grid {

    drawGreyNet() {
        for (var x = 0.5; x < 1070; x += 10) {
            context.moveTo(x, 0);
            context.lineTo(x, 500);
        }
        for (var y = 0.5; y < 500; y += 10) {
            context.moveTo(0, y);
            context.lineTo(1070, y);
        }
        context.strokeStyle = "#eee";
        context.stroke();
    }

    drawXandY() {
        //--------
        //X and Y lines
        context.beginPath();
        //x
        context.moveTo(10, 450);
        context.lineTo(1070, 450);
        //y
        context.moveTo(70, 20);
        context.lineTo(70, 490);
        context.strokeStyle = "#000";
        context.stroke();
        //--------------------
        context.font = "bold 12px sans-serif";
        context.textBaseline = "bottom";
        context.fillText("Time", 10, 470);
        context.textBaseline = "top";
        context.fillText("Number", 10, 40);
    };
}

let coordNet = new Grid();
coordNet.drawGreyNet();
coordNet.drawXandY();