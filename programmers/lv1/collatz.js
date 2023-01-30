// 콜라츠 추측

function solution(n){
    let count = 0;

    function recursion(n){
        if(n===1) return
            else if(count === 5000){
                count = -1
                return;
            }
        count++
        if(n%2 === 0){ 
            n = n/2
        } else {
            n = n * 3 + 1
        }
        
        return recursion(n);
    }

    recursion(n)
    return count
}

function refactoringSolution(n, count = 0){
        while(n != 1 && count != 500){
            n%2 == 0 ? n = n/2 : n = n * 3 + 1
            count ++
        }
        return n == 1 ? count : -1;
    }