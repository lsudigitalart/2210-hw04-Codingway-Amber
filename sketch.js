function setup() {
    createCanvas (600, 600) 
    noCursor();
} 

function draw() { 
    background(0);
    fill(255)
    
    ellipse(mouseX, mouseY, 50); 

    if(mouseX > 200) {
        if(mouseY > 200) {
        fill(255, 200, 200);
     }
    }
    square(200, 200, 200); 
}