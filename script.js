/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

const climbingLeaderboard = (ranked, player) => {
    let playerRankings = [];
    let uniqueRanks = [...new Set(ranked)];
    
    for(const rank of player) {
        if(rank >= uniqueRanks[0]) {
            playerRankings.push(1);
        } else if(rank < uniqueRanks[uniqueRanks.length - 1]) {
            playerRankings.push(uniqueRanks.length + 1);
        } else {
            playerRankings.push(rankBinarySearch(rank, uniqueRanks));
        }
    }
    console.log(playerRankings);
    return playerRankings;
}

const rankBinarySearch = (rank, uniqueRanks) => {
    let start = 0;
    let end = uniqueRanks.length - 1;
    
    while(true) {
        let mid = Math.floor((start + end) / 2);
        
        //base cases
        if(uniqueRanks[mid] === rank) return mid + 1;
        else if(uniqueRanks[mid] > rank && uniqueRanks[mid + 1] < rank) return mid + 2;
        else if(uniqueRanks[mid] < rank && uniqueRanks[mid - 1 > rank]) return mid - 1;
        
        //recursion
        if(rank < uniqueRanks[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    } 
}


////////////////////////////////////////////////////////////////////////////////////////
// this does NOT work for large lists - time limit exceeded, code not optimized
const climbingLeaderboard = (ranked, player) => {
    let playerRankings = [];
    let uniqueRanks = ranked.filter((x, index) => ranked.indexOf(x) === index);
    
    for(let i = 0; i < player.length; i++) {
        uniqueRanks.push(player[i]);
        uniqueRanks.sort((a, b) => b - a);
        let playerRank = uniqueRanks.indexOf(player[i]) + 1;
        playerRankings.push(playerRank);  
    }
    console.log(playerRankings)
    return playerRankings;
}
