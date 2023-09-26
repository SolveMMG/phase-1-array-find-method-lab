// code your solution here
function superbowlWin(array){
    const winningrecord= array.find(function (array){
        return array.result ==="W";   })
    return winningrecord?winningrecord.year: undefined;
}

