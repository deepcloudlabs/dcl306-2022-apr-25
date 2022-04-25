let unitCircle = {
    x: 0,
    y: 0,
    radius: 1,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(unitCircle.area());
/*
x = unitCircle.x;
y = unitCircle.y;
radius = unitCircle.radius;
*/
// Object Destructing
let {x, y, radius} = {...unitCircle};
// let {x, y, radius} = unitCircle;

console.log(x)
console.log(y)
console.log(radius)

let color = "Red";
let anotherCircle = {x, y, radius};
let colorfulCircle = {...anotherCircle, color};
console.table(colorfulCircle);
/*
 let anotherCircle = {x: x, y: y, radius: radius};
 */