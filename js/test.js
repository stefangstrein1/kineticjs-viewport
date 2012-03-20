
var svgXml = '<svg><path style="stroke-width:1;fill:rgb(246,127,0);stroke:none" d="M204.33 139.83 C196.33 133.33 206.68 132.82 206.58 132.58 C192.33 97.08 169.35 81.41 167.58 80.58 C162.12 78.02 159.48 78.26 160.45 76.97 C161.41 75.68 167.72 79.72 168.58 80.33 C193.83 98.33 207.58 132.33 207.58 132.33 C207.58 132.33 209.33 133.33 209.58 132.58 C219.58 103.08 239.58 87.58 246.33 81.33 C253.08 75.08 256.63 74.47 247.33 81.58 C218.58 103.58 210.34 132.23 210.83 132.33 C222.33 134.83 211.33 140.33 211.83 139.83 C214.85 136.81 214.83 145.83 214.83 145.83 C214.83 145.83 231.83 110.83 298.33 66.33 C302.43 63.59 445.83 -14.67 395.83 80.83 C393.24 85.79 375.83 105.83 375.83 105.83 C375.83 105.83 377.33 114.33 371.33 121.33 C370.3 122.53 367.83 134.33 361.83 140.83 C360.14 142.67 361.81 139.25 361.83 140.83 C362.33 170.83 337.76 170.17 339.33 170.33 C348.83 171.33 350.19 183.66 350.33 183.83 C355.83 190.33 353.83 191.83 355.83 194.83 C366.63 211.02 355.24 210.05 356.83 212.83 C360.83 219.83 355.99 222.72 357.33 224.83 C360.83 230.33 354.75 233.84 354.83 235.33 C355.33 243.83 349.67 240.73 349.83 244.33 C350.33 255.33 346.33 250.83 343.83 254.83 C336.33 266.83 333.46 262.38 332.83 263.83 C329.83 270.83 325.81 269.15 324.33 270.83 C320.83 274.83 317.33 274.83 315.83 276.33 C308.83 283.33 304.86 278.39 303.83 278.83 C287.83 285.83 280.33 280.17 277.83 280.33 C270.33 280.83 271.48 279.67 269.33 277.83 C237.83 250.83 219.33 211.83 215.83 206.83 C214.4 204.79 211.35 193.12 212.33 195.83 C214.33 201.33 213.33 250.33 207.83 250.33 C202.33 250.33 201.83 204.33 205.33 195.83 C206.43 193.16 204.4 203.72 201.79 206.83 C196.33 213.33 179.5 250.83 147.59 277.83 C145.42 279.67 146.58 280.83 138.98 280.33 C136.46 280.17 128.85 285.83 112.65 278.83 C111.61 278.39 107.58 283.33 100.49 276.33 C98.97 274.83 95.43 274.83 91.88 270.83 C90.39 269.15 86.31 270.83 83.27 263.83 C82.64 262.38 79.73 266.83 72.13 254.83 C69.6 250.83 65.54 255.33 66.05 244.33 C66.22 240.73 60.48 243.83 60.99 235.33 C61.08 233.84 54.91 230.33 58.45 224.83 C59.81 222.72 54.91 219.83 58.96 212.83 C60.57 210.05 49.04 211.02 59.97 194.83 C62 191.83 59.97 190.33 65.54 183.83 C65.69 183.66 67.06 171.33 76.69 170.33 C78.28 170.17 53.39 170.83 53.9 140.83 C53.92 139.25 55.61 142.67 53.9 140.83 C47.82 134.33 45.32 122.53 44.27 121.33 C38.19 114.33 39.71 105.83 39.71 105.83 C39.71 105.83 22.08 85.79 19.46 80.83 C-31.19 -14.67 114.07 63.59 118.22 66.33 C185.58 110.83 202 145.83 202 145.83 C202 145.83 202.36 143.28 203 141.83 C203.64 140.39 204.56 140.02 204.33 139.83 z"/></svg>';


function log(message) {
	if( console && console.log ) {
		console.log(message);
	}	
}

/*
currently this moves the objects on add to the view-space coords, and never records the game-world coords... i guess this is ok... alternatively, could store the game-coord positions and calc view-space coords off them each loop... it would be more accurate... feels like it would be slower tho

"variable timestep" panning
*/

function Viewport(stage) {
	
	// begin scale at 100%
    this.scale = 1.0;
    this.minimumScale = 0.5;
    this.maximumScale = 1.5;
    this.scaleRate = 0.03;

	// the view starts w/ stage size (bc we start at 1.0 scale)
	this.viewLeft = 0;
	this.viewTop = 0;
	this.viewWidth = stage.width;
	this.viewHeight = stage.height;
	
	this.panRate = 10.0;
	
	// nodes can be anything which inherits Node, such as Groups, Shapes, except Layers.
	this.nodes = {};
	
	// create layer
	this.layer = new Kinetic.Layer();
		
	// add layer to stage
	stage.add(this.layer);
	
	// set initial zoom
	this.setZoom(this.scale);
}

/// <summary>
/// Returns the ID to be used when adding the next node.
/// </summary>
Viewport.prototype.getNewNodeID = function() {
	if( typeof(this.nextNodeID) == "undefined" ) {
		// init to 1
		this.nextNodeID = 1;
	}
	else
	{
		// increment by 1
		this.nextNodeID++;
	}
	// return next ID value
	return this.nextNodeID;
}

Viewport.prototype.setNodeX = function( nodeID, cir2PosX ) {
	var node = this.nodes[nodeID];
	
	var viewSpaceX = node.x;
	//var gameSpaceX = node.x / this.scale;
	
	log( "viewSpaceX=" + viewSpaceX );
		//log( "gameSpaceX=" + gameSpaceX );
			log( "cir2PosX=" + cir2PosX );
			
	var newViewSpaceX = cir2PosX + this.viewLeft; //* this.scale;
	log( "newViewSpaceX=" + newViewSpaceX );
	node.x = newViewSpaceX;
	log( "node.x=" + node.x );
	this.draw();
	
}

/// <summary>
/// Adds the node to the viewport and returns the ID.
/// </summary>
Viewport.prototype.add = function(node) {

	// get the new node ID and store in node
	node.ID = this.getNewNodeID();

	// store node in hashmap by node ID
	this.nodes[node.ID] = node;
	
	// apply view-space position adjustment
	node.x += this.viewLeft;
	node.y += this.viewTop;
	
	// add node to layer
	this.layer.add(node);
	
	// log event
	log( "added a new node with ID = " + node.ID );
	
	// reurn node ID
	return node.ID;
}

Viewport.prototype.draw = function() {
	// TODO
	// call a method in here which calcs the viewport dimensions, position. then loops thru all nodes and calcs whether they are visible. if they are visible and not shown, then shown, and visa-versa. flag accordingly.

	// re-render the layer
	this.layer.draw();
}
Viewport.prototype.panX = function(amount) {
		
	var panChange = amount * ( 1 / this.scale);
	
	for( var nodeID in this.nodes ) {
		// move node position by given amount
		this.nodes[nodeID].x += panChange;
	}
	
	// record new view left
	this.viewLeft += panChange;
	
	// re-draw
	this.layer.draw();
}
Viewport.prototype.panY = function(amount) {
		
	var panChange = amount * ( 1 / this.scale);
	
	for( var nodeID in this.nodes ) {
		// move node position by given amount
		this.nodes[nodeID].y += panChange;
	}
	
	// record new view top
	this.viewTop += panChange;
	
	// re-draw
	this.layer.draw();
}
Viewport.prototype.zoomIn = function() {
	this.setZoom(this.scale + this.scaleRate);
}
Viewport.prototype.zoomOut = function() {
	this.setZoom(this.scale - this.scaleRate);
}
Viewport.prototype.setZoom = function(scale) {
	
	// store new scale
	this.scale = scale;
	
	if( this.scale < this.minimumScale ) {
		// the scale is below the minimum - set to minimum
		this.scale = this.minimumScale;
	}
	else if( this.scale > this.maximumScale ) {
		// the scale is above the maximum - set to maximum
		this.scale = this.maximumScale;
	}
	
	// apply new scale
	this.layer.setScale(this.scale);
	
	// re-render
	this.draw();
	
	// log event
	log( "zoom set to " + this.scale );
}




$(document).ready( function() {

	// create stage
	var stage = new Kinetic.Stage("viewport", 500, 500);

    var butterfly = new Kinetic.Shape({
        drawFunc: function(){
            var context = this.getContext();

            var x = -200;
            var y = -200;
            var w = 10;
            var h = 100;
            context.drawSvg(svgXml, x, y, 0, 0);
           
            //context.lineWidth = 4;
            //context.strokeStyle = "Red";
          
            context.stroke();
        }
    });
    butterfly.x = 200; 
    butterfly.y = 200; 
 
    var shields = new Kinetic.Circle({
        x: 200,
        y: 200,
        fill: "blue",
        stroke: "blue",
        strokeWidth: 1,
        radius: 100
    });
    shields.setAlpha( 0.5 );
    
    
    var circle = new Kinetic.Circle({
        x: 380,
        y: stage.height / 2,
        fill: "red",
        stroke: "black",
        strokeWidth: 4,
        radius: 70
    });
    
    var viewport = new Viewport( stage );
    viewport.add( circle );
    viewport.add( shields );
    viewport.add( butterfly );
    
    
    // add a ton of circles
    for( var xPos = 0; xPos <= 800; xPos = xPos+100 ) {
        for( var yPos = 0; yPos <= 800;  yPos = yPos+100 ) {
			var circle = new Kinetic.Circle({
				x: xPos,
				y: yPos,
				fill: "green",
				stroke: "black",
				strokeWidth: 1,
				radius: 25
			});
			
			viewport.add( circle );
			
			circle.on("mousemove", function(e){	
                this.fill = "red";
                viewport.draw();
            });
 
            circle.on("mouseout", function(e){
                this.fill = "green";
                viewport.draw();
            });
        }
    }
    
    
    
    viewport.draw();


    // bind mouse wheel to affect scale
	$('#viewport').bind('mousewheel', function(event, delta) {
		
		// (delta will be 1 or -1)
		
		switch( delta ) {
			case -1:
				viewport.zoomOut();
				break;
			case 1:
				viewport.zoomIn();
				break;
		}
		
		// oh yeah, cancel the scroll!
		event.preventDefault();
	});
	
	var ArrowLeft = 37;
	var ArrowRight = 39;
	var ArrowUp = 38;
	var ArrowDown = 40;
	
	//var xOffset = 0;
	//var yOffset = 0;
	$(document).keydown(function(event){
		
		var keyCode = event.keyCode;
		
		log("key pressed: " + keyCode );
		
		//var stageMoveX = 0;
		//var stageMoveY = 0;
		switch( keyCode ) {
			case ArrowLeft:
				//stageMoveX--;
				viewport.panX(10);
				break;
				
			case ArrowRight:
				viewport.panX(-10);
				break;
				
			case ArrowUp:
				viewport.panY(10);
				break;
				
			case ArrowDown:
				viewport.panY(-10);
				break;
				
			case 65:
				// a pressed
				var cir2PosX = 800;
				var circle2 = new Kinetic.Circle({
					x: cir2PosX,
					y: 800,
					fill: "orange",
					stroke: "black",
					strokeWidth: 1,
					radius: 50
				});
			
				var nodeID = viewport.add( circle2 );
				viewport.draw();
				
				setInterval(function() {
					cir2PosX = cir2PosX - 100;
					viewport.setNodeX( nodeID, cir2PosX );
				}, 1000);
				break;
		}
			
		// oh yeah, cancel the click!
		event.preventDefault();
	});

	
});
