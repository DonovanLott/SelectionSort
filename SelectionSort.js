"use strict";



var canvas;
var gl;



var input;
var inputs;
var size;
var max;
var output;



window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WEBGL isn't available"); }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    

    document.getElementById("textval").onchange =
        function (event) {
            input = event.target.value;
            inputs = input.split(' ');
        };

    document.getElementById("sort").onclick =
        function (event) {
            printArray(inputs);
            selectionSort(inputs);
            //printArray(inputs);
        };


   

    render();
}

function findMax(inputArr) {
    let n = inputArr.length;
    max = inputArr[0];

    for (let i = 0; i < n; i++) {
        if (inputArr[i] > inputArr[max]) {
            max = inputArr[min];
        }
    }
}

function selectionSort(inputArr) {
    let n = inputArr.length;
    

    for (let i = 0; i < n; i++) {
        document.write("on iteration: " + (i+1) + " <br>");
        // Finding the smallest number
        
        let min = i;
        document.write("current value: " + Number(inputArr[i]) + " <br>");

        for (let j = i + 1; j < n; j++) {
            document.write("current value: " + Number(inputArr[j]) + " <br>");

            if (Number(inputArr[j]) < Number(inputArr[min])) {
                min = j;
                document.write("new min: " + inputArr[min] + " <br>");
            }
        }
        if (min != i) {
            // Swapping the elements
            document.write("swapping " + inputArr[i] + " and " + inputArr[min] + " <br>");
            let temp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = temp;
        }
        printArray(inputs);
    }
    return inputArr;
}

function swap(inputArr, xp, yp) {
    var temp = inputArr[xp];
    inputArr[xp] = inputArr[yp];
    inputArr[yp] = temp;
}

function printArray(arr) {
    var i;
    var size = arr.length;
    for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
    document.write(" <br>");
}



function render() {

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    

    window.requestAnimFrame(render);
}