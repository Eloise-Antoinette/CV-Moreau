				var c=document.getElementById('demo');
										var cc=c.getContext("2d");
										
										//it's a good idea to adapt the canvas' dimensions to the width of the screen
										//it gives a responsive feel to the canvas
										//this function is executed when the document loads AND when it's resized
										window.addEventListener("load",setDimensions);
										window.addEventListener("resize",setDimensions);
										
										setInterval(draw,1000/20); 	//25 frames/second is often referred to as a good framerate for animations
										
										function setDimensions() {
											c.width=window.innerWidth;
											c.height=window.innerHeight;	
											};							
										
										var blobarray = [ ];
										
										//array of colors
										var colors = ["#8cb0bc","#f2d4b3","#dda15e","#4c6a74","#BC6C25","#88b8c9"];
										
										async function draw() {
										
											//if you uncomment the following line, only in the left half of the animation, the balls will leave traces
											//cc.clearRect(c.width/2,0,c.width/2,c.height) //removing this line will cause all balls to leave traces
										
											//create a JS object with some properties of the balls we will be drawing
											
											var blob = {
												
												x:Math.floor(Math.random() * c.width), // random location on x
												y:0, //start at the top
												color:colors[Math.floor(Math.random()*colors.length)], // random color from array "colors"
												size:5, //size of the radius of the drops
												ySpeed:Math.floor(Math.random() * 5) + 2  //speed at which the balls will fall down
												
											};
										
											//add the object to a JS array
											blobarray.push(blob);	
												
											//loop through the array of balls
											for (var i=0;i<blobarray.length;i++) {	
											
												blob=blobarray[i];	
										
												if (blob.y>c.height)		
												{
													//eventually, the browser will crash as we'll be adding balls, and never delete them
													//so, let's delete the ball when he's out of sight, that is: when his y-position is lower
													//than the screen's height
													blobarray.splice(1);
													return;
												}
												else
												{
											
													//draw the ball
													cc.beginPath();			
													cc.arc(blob.x, blob.y, blob.size, 0, 2 * Math.PI);
													cc.fillStyle = blob.color;
													cc.fill();

													
													//make sure that in the next iteration, the ball will be drawn a little lower on the screen
													blob.y+=blob.ySpeed;			
												
												};		
											};
											
										
											
										};
