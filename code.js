if (document.getElementById("homepage")) {			// Exclusive code for the main page, so it still work for the other subpages
	MainCode()
}
else {
	Scode()
}

function MainCode() {
	Skinsemj.textContent = `Skins \u{1f9d0}`
	Achemj.textContent = `Achievements \u{1f929}`
	FGemj.textContent = `Green Dragon \u{1f432}`;
	SGemj.textContent = `Second Game \u{1f43a}`;
	TGemj.textContent = `Third Game \u{1f988}`;
	FoGemj.textContent = `Fourth Game \u{1faa8}`;
	let character = `\u{1f600}`;
	let hurtcharacter = `\u{1f635}\u{200d}\u{1f4ab}`;
	let deadcharacter = `\u{1f480}`;
	let wincharacter = `\u{1f973}`;
	let heartcontainer = `\u{1fa77}`; 
	let damageheart = `\u{fe0f}\u{1f494}`;
	localStorage.setItem("character", character);
	localStorage.setItem("hurtcharacter", hurtcharacter);
	localStorage.setItem("deadcharacter", deadcharacter);
	localStorage.setItem("wincharacter", wincharacter);
	localStorage.setItem("heartcontainer", heartcontainer);
	localStorage.setItem("damageheart", damageheart);
}


function Scode() {
		
	let time = 90;	 										// Initial time
	let timeid;
	let StarterTime;
	let StoredTime = 0;
	const hitelm = [Char, meteor1, meteor11, meteor2, meteor21, meteor3, meteor31];
	let pas = "false"																			// checks if the game is paused or no
	let won = "true"																			// checks if the player have won or no
	let over = "false"																			// checks if the player have died or no
	let inv = "false";																			// inv controls whenever the player is invunerable
	let meteorspeed = 6;
	let changehitbox = "false";																	// To change the hitbox depending if the meteor is going up or down (as it rotates 180	deegres)
	let cnt = 0;																				// A countdown (in this case used to count the hits that the player have recieved)
	let hit = localStorage.getItem("hit");														// Save the show hitbox setting, so the player dont have to put it on every time the page get reloaded
	let cnthit = 0;																				// A countdown to know if the hitbox setting is on/off
	let character = localStorage.getItem("character") || `\u{1f600}`;							// Can be changed in the main page (So players can select differents skins), I there is no emoji saved it will change into the default one 
	let hurtcharacter = localStorage.getItem("hurtcharacter") || `\u{1f635}\u{200d}\u{1f4ab}`;
	let deadcharacter = localStorage.getItem("deadcharacter") || `\u{1f480}`;
	let wincharacter = localStorage.getItem("wincharacter") || `\u{1f973}`;
	let heartcontainer = localStorage.getItem("heartcontainer") || `\u{1fa77}`;
	let damageheart = localStorage.getItem("damageheart") || `\u{fe0f}\u{1f494}`;

	three.classList.remove("hidden")
	setTimeout(() => {
		three.classList.add("hidden")
		two.classList.remove("hidden")
		setTimeout(() => {
			two.classList.add("hidden")
			one.classList.remove("hidden")
			setTimeout(() => {
				one.classList.add("hidden")
				start.classList.remove("hidden")
				startTime();																		// Stars the timer after the 3,2,1,start
				won = "false"
			}, 1000)
		}, 1000)
	}, 1000)

	function startTime() { 
		setTimeout(() => start.classList.add("hidden"), 1000);
		StarterTime = Date.now()
		timeid = setInterval(() => {						// setInterval starts the process, and the ID its store in the const timeid, to make sure it can be stopped
			const elapsed = Math.floor((Date.now() - StarterTime) / 1000);
			const total = StoredTime + elapsed
			time = 90 - total

			if (time <= 0) {
				time = 0;
				Winner();
				clearInterval(timeid);
			}
			else {
				drattack();										// call the drattack fuction every second
			}
			if (time <= 60) {									// After 30 seconds, meteors will go faster to increase a bit the difficulty and make the game more exciting
				meteorspeed = 4;
			}
			let minutes = Math.floor(time / 60); 
			let seconds = time % 60;							// if its multiple of 60, it will give 0
			seconds = seconds < 10 ? '0' + seconds : seconds;	// if its below 10 seconds a 0 will appear (10, 09, 08,...)
			timer.innerHTML = `${minutes}:${seconds}`;			// to upload the timer of the html
		}, 1000);											// 1000ms = 1 second
	}
	
	// emojis shown in game
	Char.textContent = `${character}`
	heartcontainer1.textContent = `${heartcontainer}`
	heartcontainer2.textContent = `${heartcontainer}`
	heartcontainer3.textContent = `${heartcontainer}`
	pause.textContent = `\u{23f8}\u{fe0f}`;			
	dragon.textContent = `\u{1f409}`;
	meteor1.textContent = `\u{2604}\u{fe0f}`;
	meteor11.textContent = `\u{2604}\u{fe0f}`;
	meteor2.textContent = `\u{2604}\u{fe0f}`;
	meteor21.textContent = `\u{2604}\u{fe0f}`;
	meteor3.textContent = `\u{2604}\u{fe0f}`;
	meteor31.textContent = `\u{2604}\u{fe0f}`;
	
	// variables for the function Move
	let x = 0;
	let y = 0;
	let up = false;
	let right = false;
	let left = false;
	let down = false;

	if (hit === "true") {
		ShowHitbox();
	}
	//function that give a random number in the range of the number passed as argument (3 -> 0, 1, 2)
	function getRandomInt(max) {
		return Math.floor(Math.random() * max)
	}

	//function that check whenever the player get hit by obstacles
	function checkCollision(obj1, obj2) {
    	const rect1 = obj1.getBoundingClientRect(); // Personaje
    	const rect2 = obj2.getBoundingClientRect(); // Meteorito
    	const w = rect2.width;
    	const h = rect2.height;
    	
    	// padding to delete the irrelevant part of the object hitbox
    	let paddingTop = h * 0.50; 
    	let paddingRight = w * 0.40; 
    	let paddingBottom = h * 0.10; 
    	let paddingLeft = w * 0.10;
    
    	if (changehitbox === "true") {
    		paddingTop = h * 0.10; 
    		paddingRight = w * 0.10; 
    		paddingBottom = h * 0.50; 
    		paddingLeft = w * 0.40;
    	}
    	return !(
       		rect1.right < (rect2.left + paddingLeft) || 
        	rect1.left > (rect2.right - paddingRight) || 
        	rect1.bottom < (rect2.top + paddingTop) || 
        	rect1.top > (rect2.bottom - paddingBottom)
	    );
	}

    const collisionInterval = setInterval(() => {
    	const obstacles = [meteor1, meteor11, meteor2, meteor21, meteor3, meteor31];
    	obstacles.forEach(m => {
    	    if (checkCollision(Char, m)) {
    	    	console.log("Hit by", m.id);
        	    if (inv === "false") {																//checks if the player is invisble or not
        			hurt()
        	    	cnt ++;
           		}
           		if (cnt === 1) heartcontainer1.textContent = `${damageheart}`
           		else if (cnt === 2) heartcontainer2.textContent = `${damageheart}`
  				else if (cnt === 3) {																// If the player have recieved 3 hits already the time and collision ends and Game Over appears on screen
  					heartcontainer3.textContent = `${damageheart}`
  					clearInterval(timeid);
            	   	clearInterval(collisionInterval);
            	   	Gameover();
            	}
        	}	
    	});
    }, 50);

	
	// The drattack fuction, first checks if the meteor is still flying and only act if it is not. Then there is a 50% chance to start an attack. The number of meteors is limited so the screen is not overload of obstacles
	function drattack() {
		const launchmeteor = (meteor) => {
			if (meteor.getAttribute('flying') === "true") return; 							// The same meteor cannot be called while still flying
	 		if (getRandomInt(2) === 0) {
	 			meteor.setAttribute('flying', "true");										// Declares that the meteor is now flying
	 			meteor.style.transition = `transform ${meteorspeed}s ease`;					// Give speed to the mteor depending on time left
	 			meteor.style.transform = `translate(-55vw, 181vh) rotate(0deg)`;
	 			setTimeout (() => {															// Go down
	 				meteor.style.transition = "transform 0.2s ease";
 					meteor.style.transform = `translate(-55vw, 181vh) rotate(180deg)`;		// Now it rotates out of screen
 					setTimeout (() => {
 						meteor.style.transition = `transform ${meteorspeed}s ease`			// In case the meteorspeed changed while going down
 						meteor.style.transform = `translate(0, 0) rotate(180deg)`			// Maintain the rotation given
 						changehitbox = "true"												// To change the hitbox when the meteor is going up
 						setTimeout (() => {				
 							meteor.style.transition = "transform 0.2s ease"
 							meteor.style.transform = `translate(0, 0) rotate(0deg)`;		// Reset rotation
 							setTimeout(() => {
                       			meteor.setAttribute('flying', "false");						// Once it has come back it is not flying and the hitbox is changed to pair with the rotation
                   				changehitbox = "false"
                   			}, 200);
 						}, 1000 * meteorspeed);
 					}, 200);
 				}, 1000 * meteorspeed);
	 		}
		};	
		if (getRandomInt(2) === 0) {															// Here the meteor is selected: x0 or x1
			if (getRandomInt(2) === 0) {
				launchmeteor(meteor1)
			}
			else {
				launchmeteor(meteor11)
			}
			if (getRandomInt(2) === 0) {
				launchmeteor(meteor2)
			}
			else {
				launchmeteor(meteor21)
			}
			if (getRandomInt(2) === 0) {
				launchmeteor(meteor3)
			}
			else {
				launchmeteor(meteor31)
			}
		}
	}
	
	// Make player invurnable for x amount of time and changes oppacity to give the effect, also change the emoji face to the hurt one.
	function hurt() {
		inv = "true";
		Char.textContent = `${hurtcharacter}`;
		let flashes = 0;
		Char.style.opacity = "0.2"
		
		const interval = setInterval(() => {
			Char.style.opacity = Char.style.opacity === "0.2" ? 1 : "0.2";
			flashes++;
			
			if (flashes === 6) {
				clearInterval(interval);
				Char.style.opacity = "1";
				inv = "false";
				Char.textContent = `${character}`; 				// returns to the normal emoji face				
			}
		}, 300);
	}

	window.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			if (pas === "true") {
				blackscreen.classList.add("hidden");
				pause.textContent = `\u{23f8}\u{fe0f}`;
				pas = "false"
				inv = "false"
				startTime()
    		}
			else {
				Pause()
			}
		}
	});

	pause.onclick = function p() {
		Pause()
	}

	Resume.onclick = function r() {
		blackscreen.classList.add("hidden")
		pause.textContent = `\u{23f8}\u{fe0f}`;
		pas = "false"
		inv = "false"
		startTime()
	}
	function Pause() {
		if (won === "true" || over === "true") return;
		StoredTime += Math.floor((Date.now() - StarterTime) / 1000);	// Store the time at the moment of pause  
		clearInterval(timeid);
		inv = "true";
		pas = "true";
		pause.textContent = `\u{25b6}\u{fe0f}`;
		blackscreen.classList.remove("hidden");
		Win.classList.add("hidden");
		GameO.classList.add("hidden");
		PlayA.classList.add("hidden");
		Retry.classList.add("hidden");
	}	

	function Winner() {
		Char.textContent = `${wincharacter}`
		won = "true"
		inv = "true"
		blackscreen.classList.remove("hidden");
		Win.classList.remove("hidden");
		PlayA.classList.remove("hidden");
		Pas.classList.add("hidden")
		GameO.classList.add("hidden")
		Retry.classList.add("hidden")
		Resume.classList.add("hidden")
		setInterval(() => {								// In case the player gets hit right before victory
			Char.textContent = `${wincharacter}`
		}, 1800)
	}

	function Gameover() {
		over = "true"
		blackscreen.classList.remove("hidden");
		GameO.classList.remove("hidden");
		Retry.classList.remove("hidden");
		Win.classList.add("hidden")
		Pas.classList.add("hidden")
		PlayA.classList.add("hidden")
		Resume.classList.add("hidden")
		setInterval(() => {								// change the skin after the hurt function is over
			Char.textContent = `${deadcharacter}`
		}, 1800)										// same time as the hurt function duration so the change is clear
	}

	SHIT.onclick = function borders() {
		ShowHitbox()
	}
	window.addEventListener("keydown", (event) => {
		if (event.key === "h" || event.key === "H") {
			ShowHitbox()
		}
	});

	function ShowHitbox() {
	const yes = (cnthit % 2 === 0);
    hitelm.forEach(obj => obj?.classList.toggle("hitbox", yes));
    localStorage.setItem("hit", yes);
    cnthit++;
	}

	function Move() {
		if (up) y-= 8;
		if (left) x-= 8;
		if (down) y+= 8;
		if (right) x+= 8;
		if (x >= 64) {											// Limits check in multiples of 4, as the initial position and the movement are multiples of 4
			x = 64
		} 
		if (x <= -4) {
			x = -4
		}
		if (y >= 72) {
			Char.classList.add("notr");
			wings.classList.add("notr");
			y = -36
			setTimeout(() => {
				Char.classList.remove("notr");
				wings.classList.remove("notr");
			}, 10);
		} 
		if (y <= -40) {
			Char.classList.add("notr");
			wings.classList.add("notr");
			y = 68
			setTimeout(() => {
				Char.classList.remove("notr");
				wings.classList.remove("notr");
			}, 10);
		}
		up = left = down = right = false
		Char.style.transform = `translate(${x}vw, ${y}vh)`
		wings.style.transform = `translate(${x}vw, ${y}vh)`
		}
	

	window.addEventListener("keydown", (event) => {
		if (pas === "true") return;

		if (event.key === "w" || event.key === "W") {
			up = true;
			Move()
		}
		if (event.key === "a" || event.key === "A") {
			left = true;
			Move()
		}
		if (event.key === "s" || event.key === "S") {
			down = true;
			Move()
		}
		if (event.key === "d" || event.key === "D") {
			right = true;
			Move()
		}
	});
}



