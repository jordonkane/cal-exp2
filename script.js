
function calculate() {

    let age = document.getElementById('age').value
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value

    let calories = (sex == "male") ?
    ((10 * weight / 2.2) + (6.25 * height / 0.393701) - (5 * age) + 5) :
    ((10 * weight / 2.2) + (6.25 * height / 0.393701) - (5 * age) - 161)

    console.log("basal metabolic rate: " + calories.toFixed(0))
    console.log("sedentary: " + (calories * 1.2).toFixed(0))
    console.log("light exercise: " + (calories * 1.375).toFixed(0))
    console.log("moderate exercise: " + (calories * 1.55).toFixed(0))
    console.log("heavy exercise: " + (calories * 1.725).toFixed(0))

    console.log("Add/subtract 200-500 calories for steady weight gain/loss.")
}