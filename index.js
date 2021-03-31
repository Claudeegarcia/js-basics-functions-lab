
//distance blocks equal 8. 
//distance below 42
//2cents per foot between 400-2000, the first 400ft free
//25 dollars for a distance over 2000ft
//no more than 2500

//in instructions if block is over 42, get that number and subtract 42 out of it. if its under 42(n-42??), grab that number then its 42-n
function distanceFromHqInBlocks(blocks){
    if (blocks < 42) {
        return 42 - blocks
    } else if (blocks > 42) {
        return blocks - 42
    }
}

function distanceFromHqInFeet(){

}

function distanceTravelledInFeet(){

}