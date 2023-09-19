//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let arr = [];
let map = {};
let regexp = /\b(the|an|a)\b/gi;
for(let i=0;i<touristSpots.length;i++){
	let artLessItem = touristSpots[i].replace(regexp,"").trim();
	arr.push(artLessItem);
	map[artLessItem] = touristSpots[i];
}
arr.sort();
let ans = [];
for (let item of arr) {
	ans.push(map[item]);
}
const ul = document.getElementById("band");
for(let i=0;i<ans.length;i++){
	let li = document.createElement("li");
	li.textContent = ans[i];
	ul.append(li);
}