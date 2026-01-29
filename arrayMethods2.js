//mapfunction example  

function map() {

    let arr = [10, 20, 30, 40];

    let Ans = arr.map((num) => {
        return num * num;

    });
    console.log(Ans);
};
map();

//filterMethod example(if we want to filter string only)

function filter() {

    let arr = [10, 20, 40, 'hey', 'you']

    let Ans = arr.filter((value) => {

        if (typeof value == 'string'){
            return true;
        }
        else {
            return false;
        }
   });

   console.log(Ans);
}

filter();

//Reduce example

function reduce(){let arr=[10,20,30,40]

let Ans=arr.reduce((accumulator,currentvalue) => {

    return accumulator+currentvalue;
},0);

console.log(Ans);
};
reduce();

//sort
function sort(){

 let arr=[10,50,30,5,7]

let Ans =arr.sort((a,b) => a-b);
console.log(Ans);

}
sort();




