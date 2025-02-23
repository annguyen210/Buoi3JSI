// function thuong
function sum1() {
    const params = []
    // reduce: Loc tu obj arg => tra ve 1 mang
    for ( let index = 0; index < arguments.length; index++){
        if (typeof arguments[index] == "number") params.push(arguments[index]);
       else throw new Error("Please and item in number type"); // xuat loi neu khong la phan tu so
    }
    // reduce: tinh tong mang params
   const result = params.reduce(function(preValue , curValue , curIndex , arr){
        console.table({preValue , curValue , curIndex , arr });
        return preValue + curValue ;
    },0);
    console.log(result);
}

sum1 ();



// ----------------
// function goi va chay luon / no name / chỉ chạy 1 lần
(function (a, b) {
console.log (a + b);
})(1,2);

//---------------------------
// ES6: arrow functions: KHÔNG CÓ CONTEXT
const name = 'abc'
function hello1 () {
    this.name = "xyz";
    this.getName =  () => {
        // cap 2 => Lấy this cấp 1 (k có)
  () => console.log("1", this.name);
};
}
const obj1 = new hello1();
obj1.getName();

const hello2 = () => {

    console.log(this);
};

 hello2();

 function hello(name) {
    return "hello" + name;
  }
  const h = (name) => "hello" + name;
  const sum = (...data) =>
    data.reduce((prevValue, curValue, curIndex, arr) => prevValue + curValue, 0);
  console.log(sum(1, 2, 3, 4, 5, 6));
