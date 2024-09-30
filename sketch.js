function setup() {
    createCanvas (600, 600); 
    noCursor(); 
    strokeWeight(20);
} 

function draw() { 
    background(100);
    fill(255)
    stroke(102)
    ellipse(mouseX, mouseY, 50); 

    if(mouseX > 200) {
        if(mouseY > 200) {
        fill(255, 200, 200);
     }
    }
    square(200, 200, 200); 
    if (mouseIsPressed == true) { 
        stroke(0)
    } 
    line(0, 70, width, 50);
}