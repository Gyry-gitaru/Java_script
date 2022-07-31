let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = destination.concat(native, hero).reverse();
rainbow.splice(3, 0, 'Gave','Battle');
rainbow[0] = 'Richard';
rainbow[6] = 'Vain';

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'dark', 'violet']
let arr = [];

for( let i = 0; i <colors.length; i++) {
    arr.push(`<div class="block ${colors[i]}">
    <div class="text">${rainbow[i]}</div>
</div>`)
}
let result = arr.join('');
document.getElementById("big_block").innerHTML = result;


