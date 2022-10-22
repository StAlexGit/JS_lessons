let curse = document.getElementsByName('Curse');
curse = curse[0];
let result = document.getElementById('result');

let money = document.getElementById('money');


// for (const el of inputElts) {
//     el.addEventListener('change', (ev) => {
//         result.value = curse.value / money.value;
//     });
// }

curse.addEventListener('change', () => {
    result.value = curse.value / money.value;
    curse.classList.add('my-style-div');
});

money.addEventListener('change', () => {
    result.value = curse.value / money.value;
})
