const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

Array.prototype.transpose = function() {
    let newArray = [] //[[1,2,3],[4,5,6],[7,8,9]]
    for(let i = 0; i < this.length; i++){
        let row = []
        for(let j = 0;j < this[i].length;j++){
            row.push(0)
        }
        newArray.push(row)
    }
    for(let i = 0; i < this.length; i++){
        for(let j = 0;j < this[i].length;j++){
            newArray[i][j] = this[j][i]
        }}
    return newArray
}

class Board {

    constructor() {
        this.grid = [["_","_","_"],["_","_","_"],["_","_","_"]]
    }

    won() {
       const row_won = ()=> {
            for(let i = 0;i <this.grid.length;i++){
                if(this.grid[i].every((ele)=>{this.grid[i][i]===ele && ele !== "_"})){
                    return true;
                }

            }
       }
       const column_won = ()=> {
            let flipped = this.grid.transpose;
            for(let i = 0;i <flipped.length;i++){
                if(flipped[i].every((ele)=>{flipped[i][i]===ele && ele !== "_"})){
                    return true;
                }

            }
        }

        const diag_won = ()=> {
            let left_diag = []
            let right_diag = []
            for(let i = 0; i < this.grid.length; i++){
                for(let j = 0; j <this.grid[i].length; j++){
                    if(i===j){
                        left_diag.push(this.grid[i][j])
                    }
                    //i0,j2,length2|| 2-2===0
                    //i1,j1,length2|| 2-1===1
                    //i2,j0,length2|| 2-0===2
                    if((this.grid.length-j)===i){
                        right_diag.push(this.grid[i][j])
                    }
                }

            }
        }
    }

    winner() {

    }

    empty(pos) {

    }

    place_mark(pos,mark) {

    }

}