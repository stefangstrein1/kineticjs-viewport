/*
 * VariableTimeStepLoop - Allows easy creation of variable time step loops for your games or applications.
 *
 * Copyright (c) 2012 Andrew Lundgren (http://grovebranch.net)
 * Licensed under the MIT License
 *
 * http://code.google.com/p/variable-time-step-loop
 *
 * Version: 1.0.0
 */

function VariableTimeStepLoop( /* optional */ onUpdateHandler) {
	
	// used to track the time elapsed since previous update
	this.lastUpdateTime = null;
	
	// delay between one update completing and the next beginning
	this.updateDelay = 0;
	
	this.onUpdate = function(secondsElapsed) {
		// update everything in this method, based on the number of seconds elapsed
		throw "The 'onUpdate' event must be assigned a handler.";
	}
	
	if( typeof( onUpdateHandler ) == "function" ) {
		// an update handler was supplied via the constructor -- store the ref
		this.onUpdate = onUpdateHandler;
	}
	
	// controls whether the loop is running
	this.isOn == false;
	
	// on start event stub
	this.onStop = function() {};
	
	// on stop event stub
	this.onStart = function() {};
}
VariableTimeStepLoop.prototype.start = function() {

	// turn on the loop
	this.isOn = true;

	// fire start event, incase anyone cares
	this.onStart();

	// set the last update time to now
	this.lastUpdateTime = new Date();
	
	// begin update loop by manually calling the update tick
	this.onUpdateTick();
}
VariableTimeStepLoop.prototype.stop = function() {

	// turn off the loop
	this.isOn = false;
}
VariableTimeStepLoop.prototype.onUpdateTick = function() {

	// get current time
	var now = new Date();

	// get seconds elapsed
	var secondsElapsed = (now - this.lastUpdateTime) / 1000;

	// call update function w/ elapsed seconds
	this.onUpdate( secondsElapsed );

	// store new update time
	this.lastUpdateTime = now;
	
	if( this.isOn == true ) 
	{
		// call this method again
		var self = this;
		setTimeout( function() { self.onUpdateTick(); }, this.updateDelay );
	} 
	else 
	{
		// the loop is stopped now -- fire stop event, incase anyone cares
		this.onStop();
	}
}


/*********** USAGE ***********

	function myUpdateHandler(secondsElapsed) {
		// update everything in this method, based on the number of seconds elapsed
	}

	// declare the loop
	var myGameLoop = new VariableTimeStepLoop(myUpdateHandler);

	// start the loop
	myGameLoop.start();



**** UPDATE HANDLER ALTERNATIVE 1 ****

Supply an anonymous delegate, e.g.

	var myGameLoop = new VariableTimeStepLoop(function myUpdateHandler(secondsElapsed) { ... } );



**** UPDATE HANDLER ALTERNATIVE 2 **** 

Assign update handler after declaring, e.g.

	var myGameLoop = new VariableTimeStepLoop();
	
	myGameLoop.onUpdate = function myUpdateHandler(secondsElapsed) { ... } 

*****************************/
