// 實作 Fibonacci number (費式數列)
function fibonacci (n) {
    arr = Array(n+1, 0)
    arr[0] = 0
    arr[1] = 1
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
}


// 擇一實作 Debounce 或 Throttle
function debounce (func, delay) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            func.apply(context, args)
        }, delay)
    }
}

function throttle (func, delay) {
    let inThrottle = false
    let timer = null

    return function () {
        let context = this
        let args = arguments
        if(!inThrottle){
            func.apply(context, args)
            inThrottle = true;
            clearTimeout(timer)
            timer = setTimeout(function () {
                inThrottle = false
            }, delay)
        }
        
    }
}

// 使用 Linked List 實作 Stack



// 實作 getPagination
function getPagination (offset, limit, total) {
    const currentPage = Math.ceil((offset+1)/limit)
    const totalPage = Math.ceil(total/limit)

    let left = currentPage - 2
    let right = currentPage + 2

    if(left < 1){
        left = 1
    }else if(right > totalPage){
        left -= (right-totalPage)
    }

    return {
        currentPage,
        totalPage,
        renderPages:[left, left+1, left+2, left+3, left+4]
    }
}
