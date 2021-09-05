var arr = [
    [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
    
}
/*
arr[i = posição do Array][j = Posição do SubArray]
arr.length = 3 grupos ("[1,2]" "[3,4]" "[5,6]")


j < (arr[0].length = 2 elementos)
arr[i = 0] = [1,2] 
arr[0][0] = "1", posição [0] do meu Array, posição [0] do meu Sub-Array
arr[0][1] = "2", posição [0] do meu Array, posição [1] do meu Sub-Array

j < (arr[1].length = 2 elementos)
arr[i = 1] = [3,4] 
arr[1][0] = "3", posição [1] do meu Array, posição [0] do meu Sub-Array
arr[1][1] = "4", posição [1] do meu Array, posição [1] do meu Sub-Array

j < (arr[2].length = 2 elementos)
arr[i = 2] = [5,6] 
arr[2][0] = "5", posição [2] do meu Array, posição [0] do meu Sub-Array
arr[2][1] = "4", posição [2] do meu Array, posição [1] do meu Sub-Array
*/
