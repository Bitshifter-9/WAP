a=[1,2,3]
function x(a,b,c){
    console.log(a,b,c)
}
x(a[0],a[1],a[2]) // 1 2 3
x(...a) // 1 2 3
x(...a)
x(a) //[ 1, 2, 3 ] undefined undefined
