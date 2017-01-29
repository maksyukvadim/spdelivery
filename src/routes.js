console.log('Hello World!');


// const onClick = () => {
//     console.log('sasay!');
// };

function onClick() {
    console.log('sasay!');

}

export default onClick = () => {
    console.log('sasay!');
};
module.exports = onClick = () => {
    console.log('sasay!');
};

document.body.onload = addElement;
var my_div = newDiv = null;

function addElement() {


    var newDiv = document.createElement("div");
    newDiv.innerHTML = `qwe <button onclick="onClick()" >sd</button>`;
    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
}