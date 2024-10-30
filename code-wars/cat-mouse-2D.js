// Description:
// You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

// You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

// Finally, if one of two animals are not present, return "boring without two animals".

// Examples
// moves = 5

// map =
// ..C......
// .........
// ....m....

// returns "Caught!" because the cat can catch the mouse in 4 moves
// moves = 5

// map =
// .C.......
// .........
// ......m..

// returns "Escaped!" because the cat cannot catch the mouse in  5 moves

function catMouse(map,moves){
    const mapSplited = map.split("\n");
    const catPosition = mapSplited.map((s) => s.indexOf("C"));
    const mousePosition = mapSplited.map((s) => s.indexOf("m"));
    const catLevel = mapSplited.indexOf(mapSplited.filter((s, i) => [...s].includes("C"))[0]);
    const mouseLevel = mapSplited.indexOf(mapSplited.filter((s, i) => [...s].includes("m"))[0]);
    
    const catIndex = catPosition[catLevel];
    const mouseIndex = mousePosition[mouseLevel];
    
    const catMoves = Math.abs(mouseIndex - catIndex) + Math.abs(catLevel - mouseLevel);
    
    if (mouseLevel === -1 || catLevel === -1) {
      return "boring without two animals";
    };
    
    return catMoves > moves ? "Escaped!" : "Caught!";
};