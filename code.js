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
	SGemj.textContent = `Ambush Wolves \u{1f43a}`;
	TGemj.textContent = `Third Game \u{1f988}`;
	FoGemj.textContent = `Fourth Game \u{1faa8}`;

	// functions to select skins
	function characterselect(character) {
		localStorage.setItem("character", character);		
	}
	function deadselect(deadcharacter) {
		localStorage.setItem("deadcharacter", deadcharacter);		
	}
	function hurtselect(hurtcharacter) {
		localStorage.setItem("hurtcharacter", hurtcharacter);	
	}
	function winselect(wincharacter) {
		localStorage.setItem("wincharacter", wincharacter);
	}
	function heartcnselect(heartcontainer) {
		localStorage.setItem("heartcontainer", heartcontainer);
	}
	function heartbrselect(damageheart) {
		localStorage.setItem("damageheart", damageheart);		
	}

	if (document.getElementById("Achievementpage")) {
		if (localStorage.getItem("Achnohitdr") === "true") {
			Nohitdr.textContent = `\u{1f496}`;
			}
		if (localStorage.getItem("Achbtdr") === "true") {
			Beatdr.textContent = `\u{1f624}`;
			}
		if (localStorage.getItem("Achnohitwv") === "true") {
			Nohitwv.textContent = `\u{1f60f}`;
			}
		if (localStorage.getItem("Achbtwv") === "true") {
			Beatwv.textContent = `\u{1f47b}`;
			}
	}

	if (document.getElementById("Skinpage")) {

		if (localStorage.getItem("Achnohitdr") === "true") {
			Nohitdr.classList.remove("hidden")
			}
		if (localStorage.getItem("Achbtdr") === "true") {
			Beatdr.classList.remove("hidden")
			}
		if (localStorage.getItem("Achnohitwv") === "true") {
			Nohitwv.classList.remove("hidden")
			}
		if (localStorage.getItem("Achbtwv") === "true") {
			Beatwv.classList.remove("hidden")
			}
	
		const faceskins = document.querySelectorAll(".faces p");
		const victoryskins = document.querySelectorAll(".victory p");
		const hurtskins = document.querySelectorAll(".hurt p");
		const defeatskins = document.querySelectorAll(".defeat p");
		const heartcnskins = document.querySelectorAll(".heartcn p");
		const heartbrskins = document.querySelectorAll(".heartbr p");
		let savedface = localStorage.getItem("character")
		let savedvic = localStorage.getItem("wincharacter")
		let savedhurt = localStorage.getItem("hurtcharacter")
		let saveddefeat = localStorage.getItem("deadcharacter")
		let savedheartcn = localStorage.getItem("heartcontainer")
		let savedheartbr = localStorage.getItem("damageheart")
		let currentface;
		let currentvic;
		let currenthurt;
		let currentdefeat;
		let currentheartcn;
		let currentheartbr;

		Defaultface.textContent = `\u{1f600}`;
		Defaultvic.textContent = `\u{1f973}`;
		Defaulthurt.textContent = `\u{1f635}\u{200d}\u{1f4ab}`;
		Defaultdefeat.textContent = `\u{1f480}`;
		Defaultheartcn.textContent = `\u{1fa77}`;
		Defaultheartbr.textContent = `\u{fe0f}\u{1f494}`;
		Cowboy.textContent = `\u{1f920}`;
		Beatdr.textContent = `\u{1f624}`;
		Nohitdr.textContent = `\u{1f496}`;
		Beatwv.textContent = `\u{1f47b}`;
		Nohitwv.textContent = `\u{1f60f}`


		faceskins.forEach(skin => {
			if (skin.textContent === savedface) {
				currentface = skin
			}
		});

		if (!currentface) {
			currentface = document.getElementById("Defaultface");
		}
		
		currentface.classList.add("selected")

		faceskins.forEach(skin => {
        	skin.onclick = function() {
      	    	currentface.classList.remove("selected");
            	characterselect(this.textContent);
            	this.classList.add("selected");
            	currentface = this;
        	};
    	});
    	victoryskins.forEach(skin => {
			if (skin.textContent === savedvic) {
				currentvic = skin
			}
		});

		if (!currentvic) {
			currentvic = document.getElementById("Defaultvic");
		}
		
		currentvic.classList.add("selected")

		victoryskins.forEach(skin => {
        	skin.onclick = function() {
      	    	currentvic.classList.remove("selected");
            	winselect(this.textContent);
            	this.classList.add("selected");
            	currentface = this;
        	};
    	});
    	hurtskins.forEach(skin => {
			if (skin.textContent === savedhurt) {
				currenthurt = skin
			}
		});

		if (!currenthurt) {
			currenthurt = document.getElementById("Defaulthurt");
		}
		
		currenthurt.classList.add("selected")

		hurtskins.forEach(skin => {
        	skin.onclick = function() {
      	    	currenthurt.classList.remove("selected");
            	hurtselect(this.textContent);
            	this.classList.add("selected");
            	currenthurt = this;
        	};
    	});
    	defeatskins.forEach(skin => {
			if (skin.textContent === saveddefeat) {
				currentdefeat = skin
			}
		});

		if (!currentdefeat) {
			currentdefeat = document.getElementById("Defaultdefeat");
		}
		
		currentdefeat.classList.add("selected")

		defeatskins.forEach(skin => {
        	skin.onclick = function() {
      	    	currentdefeat.classList.remove("selected");
            	deadselect(this.textContent);
            	this.classList.add("selected");
            	currentdefeat = this;
        	};
    	});

    	heartcnskins.forEach(skin => {
			if (skin.textContent === savedheartcn) {
				currentheartcn = skin
			}
		});

		if (!currentheartcn) {
			currentheartcn = document.getElementById("Defaultheartcn");
		}
		
		currentheartcn.classList.add("selected")

		heartcnskins.forEach(skin => {
        	skin.onclick = function() {
      	    	currentheartcn.classList.remove("selected");
            	heartcnselect(this.textContent);
            	this.classList.add("selected");
            	currentheartcn = this;
        	};
    	});
    	heartbrskins.forEach(skin => {
			if (skin.textContent === savedheartbr) {
				currentheartbr = skin
			}
		});

		if (!currentheartbr) {
			currentheartbr = document.getElementById("Defaultheartbr");
		}
		
		currentheartbr.classList.add("selected")

		heartbrskins.forEach(skin => {
        	skin.onclick = function() {
      	    	currentheartbr.classList.remove("selected");
            	heartbrselect(this.textContent);
            	this.classList.add("selected");
            	currentheartbr = this;
        	};
    	});
	}
}


function Scode() {
	
	let time = 90;	 																			// Initial time
	let timeid;
	let StarterTime;
	let StoredTime = 0;
	let hitelm = []																				// elements that have hitbox
	let obstacles = []																			// elements that hit the player
	let pas = "false"																			// checks if the game is paused or no
	let unpas = "true"																			// checks if the game can be paused or no
	let inv = "true";																			// inv controls whenever the player is invunerable
	let meteorspeed = 6;
	let wvspeed = 4;
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
				unpas = "false"
				inv = "false"
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
				if (document.getElementById("Gdr")) {
					drattack();									// call the drattack fuction every second
				}
				else if (document.getElementById("Awv")) {
					wvattack();
				}
			}
			if (time <= 60) {									// After 30 seconds, meteors will go faster to increase a bit the difficulty and make the game more exciting
				meteorspeed = 4;
				vwspeed = 2;
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

	if (document.getElementById("Gdr")) {
		const dragon = document.getElementById("dragon");
    	const meteor1 = document.getElementById("meteor1");
    	const meteor11 = document.getElementById("meteor11");
    	const meteor2 = document.getElementById("meteor2");
    	const meteor21 = document.getElementById("meteor21");
    	const meteor3 = document.getElementById("meteor3");
    	const meteor31 = document.getElementById("meteor31");
		
		dragon.textContent = `\u{1f409}`;
		meteor1.textContent = `\u{2604}\u{fe0f}`;
		meteor11.textContent = `\u{2604}\u{fe0f}`;
		meteor2.textContent = `\u{2604}\u{fe0f}`;
		meteor21.textContent = `\u{2604}\u{fe0f}`;
		meteor3.textContent = `\u{2604}\u{fe0f}`;
		meteor31.textContent = `\u{2604}\u{fe0f}`;
		
		hitelm = [Char, meteor1, meteor11, meteor2, meteor21, meteor3, meteor31];
	}
	else if (document.getElementById("Awv")) {
		let wolf1 = document.getElementById("wolf1");
		let wolf2 = document.getElementById("wolf2");
		let wolf3 = document.getElementById("wolf3");
		let wolf4 = document.getElementById("wolf4");
		let wolf5 = document.getElementById("wolf5");
		let wolf6 = document.getElementById("wolf6");

		let wolf01 = document.getElementById("wolfinverse1");
		let wolf02 = document.getElementById("wolfinverse2");
		let wolf03 = document.getElementById("wolfinverse3");
		let wolf04 = document.getElementById("wolfinverse4");
		let wolf05 = document.getElementById("wolfinverse5");
		let wolf06 = document.getElementById("wolfinverse6");

		let bush1 = document.getElementById("bush1");
		let bush2 = document.getElementById("bush2");
		let bush3 = document.getElementById("bush3");
		let bush4 = document.getElementById("bush4");
		let bush5 = document.getElementById("bush5");
		let bush6 = document.getElementById("bush6");
		let bush7 = document.getElementById("bush7");
		let bush8 = document.getElementById("bush8");
		let bush9 = document.getElementById("bush9");
		let bush10 = document.getElementById("bush10");
		let bush11 = document.getElementById("bush11");
		let bush12 = document.getElementById("bush12");

		hitelm = [Char, wolf1, wolf2, wolf3, wolf4, wolf5, wolf6, wolf01, wolf02, wolf03, wolf04, wolf05, wolf06];
	}

	// variables for the function Move
	let x = 40;
	let y = 20;
	let up = false;
	let right = false;
	let left = false;
	let down = false;
	Char.classList.add("notr")
	setTimeout(() => {
		Move()
		setTimeout(() => {
			Char.classList.remove("notr")
		}, 0.1)
	}, 0.1)

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
    	let paddingTop = h * 0.10; 
    	let paddingRight = w * 0.10; 
    	let paddingBottom = h * 0.10; 
    	let paddingLeft = w * 0.10;
    	
    	// padding to delete the irrelevant part of the object hitbox
    	if (document.getElementById("Gdr")) {
    		paddingTop = h * 0.50; 
    		paddingRight = w * 0.40; 
    		paddingBottom = h * 0.10; 
    		paddingLeft = w * 0.10;
    
    		if (changehitbox === "true") {
    			paddingTop = h * 0.10; 
    			paddingRight = w * 0.10; 
    			paddingBottom = h * 0.50; 
    			paddingLeft = w * 0.40;
    		}
    	}
    	else if (document.getElementById("Awv")) {
			paddingTop = h * 0.50; 
    		paddingRight = w * 0.10; 
    		paddingBottom = h * 0.50; 
    		paddingLeft = w * 0.10;
    	}
    	return !(
       		rect1.right < (rect2.left + paddingLeft) || 
        	rect1.left > (rect2.right - paddingRight) || 
        	rect1.bottom < (rect2.top + paddingTop) || 
        	rect1.top > (rect2.bottom - paddingBottom)
	    );
	}

    const collisionInterval = setInterval(() => {
    	if (document.getElementById("Gdr")) {
 	   		obstacles = [meteor1, meteor11, meteor2, meteor21, meteor3, meteor31];
    	}
    	if (document.getElementById("Awv")) {
 	   		obstacles = [wolf1, wolf2, wolf3, wolf4, wolf5, wolf6, wolf01, wolf02, wolf03, wolf04, wolf05, wolf06];
    	}
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
// The wvattack fuction, first checks if the wolf is still attacking and only act if it is not. Then there is a 50% chance to start an attack. They can come from both direction but not as the same time.
	function wvattack() {
		const launchwolf = (wolf, inverse, bush) => {
			if (wolf.getAttribute('flying') === "true") return; 							
	 		if (getRandomInt(2) === 0) {
	 			
	 			bush.style.transform = "scale(1.3)"
	 			wolf.classList.remove("notr")
	 			wolf.classList.remove("hidden")
	 			wolf.setAttribute('flying', "true");
	 			
	 			setTimeout(() => {
					bush.style.transform = "scale(1)"
	 				wolf.style.transition = `transform ${wvspeed}s ease`;						
	 				let xmove = inverse ? "-85vw" : "85vw";
	 				wolf.style.transform = `translate(${xmove})`;
	 			}, 1500)

	 			setTimeout(() => {
		 			wolf.classList.add("notr")
		 			wolf.classList.add("hidden")
		 			wolf.style.transition = `transform 0s ease`;
		 			wolf.style.transform = `translate(0, 0)`;
	 			
	 				setTimeout(() => {
                		wolf.setAttribute('flying', "false");
                	}, 500)
                
                }, (1000 * wvspeed) + 1500);
            }
        }
		if (getRandomInt(2) === 0) {												
			if (getRandomInt(2) === 0) {
				launchwolf(wolf1, false, bush1)
			}
			else {
				launchwolf(wolf01, true, bush7)

			}
			if (getRandomInt(2) === 0) {
				launchwolf(wolf2, false, bush2)
			}
			else {
				launchwolf(wolf02, true, bush8)
			}
			if (getRandomInt(2) === 0) {
				launchwolf(wolf3, false, bush3)
			}
			else {
				launchwolf(wolf03, true, bush9)
			}
			if (getRandomInt(2) === 0) {
				launchwolf(wolf4, false, bush4)
			}
			else {
				launchwolf(wolf04, true, bush10)
			}
			if (getRandomInt(2) === 0) {
				launchwolf(wolf5, false, bush5)
			}
			else {
				launchwolf(wolf05, true, bush11)
			}
			if (getRandomInt(2) === 0) {
				launchwolf(wolf6, false, bush6)
			}
			else {
				launchwolf(wolf06, true, bush12)
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
		if (unpas === "true") return;
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
		Char.textContent = `${wincharacter}`;
		if (document.getElementById("Gdr")) {
			if (cnt === 0) {
				localStorage.setItem("Achnohitdr", "true");
			}
			localStorage.setItem("Achbtdr", "true");
		}
		else if (document.getElementById("Awv")) {
			if (cnt === 0) {
				localStorage.setItem("Achnohitwv", "true");
			}
			localStorage.setItem("Achbtwv", "true");
		}
		unpas = "true";
		inv = "true";
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
		unpas = "true"
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
		if (document.getElementById("Gdr")) {
			if (up) y-= 8;
			if (left) x-= 8;
			if (down) y+= 8;
			if (right) x+= 8;
			
			if (x >= 72) {											// Limits check in multiples of 8, as the initial position and the movement are multiples of 8
				x = 72
			} 
			if (x <= 0) {
				x = 0
			}
			if (y >= 90) {
				Char.classList.add("notr");
				wings.classList.add("notr");
				y = -12
				setTimeout(() => {
					Char.classList.remove("notr");
					wings.classList.remove("notr");
				}, 10);
			} 
			if (y <= -13) {
				Char.classList.add("notr");
				wings.classList.add("notr");
				y = 84
				setTimeout(() => {
					Char.classList.remove("notr");
					wings.classList.remove("notr");
				}, 10);
			}
			wings.style.transform = `translate(${x-43.4}vw, ${y-20}vh)`
		}
		else if (document.getElementById("Awv")) {
			if (up) y-= 16;
			if (down) y+= 16;

			if (y === -12) {
				y = -20
			}
			if (y === 60) {
				y = 68
			}
			if (y >= 69) {
				Char.classList.add("notr");
				y = -20
				setTimeout(() => {
					Char.classList.remove("notr");
				}, 10);
			} 
			if (y <= -21) {
				Char.classList.add("notr");
				y = 68
				setTimeout(() => {
					Char.classList.remove("notr");
				}, 10);
			}
		}
		up = left = down = right = false
		Char.style.transform = `translate(${x}vw, ${y}vh)`
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



