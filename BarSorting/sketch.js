

let chart = [];
let slider;
let ordenar;
let Npeople = 3;

function setup() {
   createCanvas(windowWidth, windowHeight);
   //slider:
   slider = createSlider(5, 100, 5);
   slider.position(50, 50);
   slider.style('width', '80px');
   ordenar = createButton('Ordenar');
   ordenar.position(19, 19);
   ordenar.mousePressed(BubbleSort);
   Npeople = slider.value();
   for (let i = 0; i < Npeople; i++) {
      chart[i] = new bar();
   }
   fillarray();
   fill(155, 195, 217);
   rect(200, 200, 500, 500);
   drawarray();
} //end setup


function draw() {
   if (slider.value() != Npeople) {
      Npeople = slider.value();
      fillarray();

      drawarray();
      // print( Npeople, slider.value() );
   }
   ordenar.mousePressed(BubbleSort);
}
/////////////////////
function fillarray() {
   chart = [];
   //Fill array with new val
   for (let i = 0; i < Npeople; i++) {
      chart[i] = new bar();
      chart[i].info(Npeople, random(0, 100));
   }
}//End fill array

function drawarray() {
   fill(155, 195, 217);
   rect(200, 200, 500, 500);
   for (let i = 0; i < chart.length; i++) { chart[i].show(i); }
}

//////
class bar {
   Constructor() {
      print("Bar Constructed");
      this.wid = 1;
      this.val = 1;
   }
   info(npeople, v) { this.wid = 500 / npeople; this.val = v; }

   show(i) {
      fill(50, 200, 200);
      rect(200 + i * this.wid, 700, this.wid, -this.val * 5);
   }
}
///////
function BubbleSort() {
   print("button pressed");
   let aux = 0;

   for (let i = 1; i < chart.length; i++) {
      for (let j = 1; j < chart.length; j++) {
         if (chart[i - 1].val < chart[i].val) {
            aux = chart[i - 1].val;
            chart[i - 1].val = chart[i].val;
            chart[i].val = aux;  
            
            drawarray();

         // print(chart[i-1].val,"now is greater than",chart[i].val);
         }
      }
   }
   
   print("All sorted");

}
/////////////////
function mousePressed() {
}
