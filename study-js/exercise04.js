let unitCircle = {
    x: 0,
    y: 0,
    radius: 1,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(unitCircle.radius);
console.log(unitCircle['radius']);
let propName = 'radius';
console.log(unitCircle[propName]);
// Error: console.log(unitCircle.propName);
propName = 'color';
let colorfulCircle = {[propName]: 'Blue', ...unitCircle};
