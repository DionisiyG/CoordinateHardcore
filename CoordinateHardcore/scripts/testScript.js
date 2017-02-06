var pointY = function () {
    min = 70;
    max = 449;
    return +(Math.floor(Math.random() * (max - min)) + min);
};

var x = 40;
context.beginPath();
var arr = [];
function getPoint() {
    var numberOfPoints = document.getElementById("countId").value;
    return numberOfPoints;
}
function drawGraph(numberOfPoints) {

    for (var i = 0; i <= numberOfPoints; i++) {
        x = x + 60;
        y = pointY();
        arr[i] = { x, y };
        context.arc(x, y, 5, 0, Math.PI * 2);
    }
    context.stroke();
};
drawGraph(getPoint());

function reDraw() {
    context.clearRect(0, 0, 1200, 500);
    coordNet.drawGreyNet();
    coordNet.drawXandY();
}

function deleteFromArr() {
    arr.splice(0, 1);
}

function reWrite() {
    reDraw();
    deleteFromArr();
    context.beginPath();
    for (var i = 0; i < arr.length; i++) {
        arr[i].x = arr[i].x - 60;
        var y = arr[i].y;
        context.arc(arr[i].x, y, 5, 0, Math.PI * 2);
    }
    context.stroke();
}

function getInterval() {
    var interval_ = document.getElementById("delayId").value;
    interval_ = interval_ * 1000;
    return interval_;
}


function Interval(interval_) {
    setInterval(function SendRequest() {
        $.ajax("http://localhost:52138/api/values", { success: SendRequest_Success });
    }, interval_)
}
//function SendRequest() {
//    $.ajax("http://localhost:52138/api/values", { success: SendRequest_Success });
//};

function SendRequest_Success(result) {
    for (var i = (arr.length - 1) ; ;) {
        x = arr[i].x + 60;
        y = result;
        i++;
        arr[i] = { x, y };
        context.arc(x, y, 5, 0, Math.PI * 2);
        if (i >= (arr.length - 1)) {
            break;
        }
    }
    context.stroke();
    if (arr.length > 16) {
        reWrite();
    }
}
