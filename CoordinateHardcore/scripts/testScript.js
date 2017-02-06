﻿var pointY = function () {
    min = 70;
    max = 449;
    return +(Math.floor(Math.random() * (max - min)) + min);
};
var numberOfPoints = prompt("Enter the starting number of points", 3);

var x = 40;
context.beginPath();
var arr = [];

function drawGraph(numberOfPoints) {

    for (var i = 0; i <= numberOfPoints; i++) {
        x = x + 60;
        y = pointY();
        arr[i] = { x, y };
        context.arc(x, y, 5, 0, Math.PI * 2);
    }
    context.stroke();
};
drawGraph(numberOfPoints);

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

var interval = 500;
setInterval(function SendRequest() {
    $.ajax("http://localhost:52138/api/values", { success: SendRequest_Success });
        }, interval)
//function SendRequest() {
//    $.ajax("http://localhost:52138/api/values", { success: SendRequest_Success });
//};

function SendRequest_Success(result) {
    for (var i = (arr.length - 1) ;  ;) { 
        x = arr[i].x + 60;
        y = result;
        i++;
        arr[i] = { x, y };
        context.arc(x, y, 5, 0, Math.PI * 2);       
        if(i >= (arr.length - 1))
        {
            break;
        }
    }
    context.stroke();
    if (arr.length > 15) {
        reWrite();
    }
}