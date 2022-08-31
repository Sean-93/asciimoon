// THIS IS A SIMPLE API THAT JUST TRACKS THE AMOUNT OF TIMES THE SITE HAS BEEN VISITED & DISPLAYS IT IN THE CONSOLE

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/asciimoon/visits/?amount=1')
	.then(res => res.json())
	.then(res => {
        console.log("This site has been visited" + " " + res.value + " " + "times.")
	})
}
