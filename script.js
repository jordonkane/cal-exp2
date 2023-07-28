
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
    console.log("intense exercise: " + (calories * 1.9).toFixed(0))

    console.log("Add/subtract 200-500 calories for steady weight gain/loss.")

    selectActivityElement = document.querySelector('#activity');
    activity = selectActivityElement.options[selectActivityElement.selectedIndex].value;
    
    // document.getElementById('heading').innerHTML = "Your Basal Metabolic Rate is: "
    // document.getElementById('calorie-output').innerHTML = calories.toFixed(0) + " cals/day"

    if (activity == "sedentary") {

        document.getElementById('heading').innerHTML = "Your caloric expenditure is: "
        document.getElementById('calorie-output').innerHTML = (calories * 1.2).toFixed(0) + " cals/day"
    
    } else if (activity == "light") {

        document.getElementById('heading').innerHTML = "Your caloric expenditure is: "
        document.getElementById('calorie-output').innerHTML = (calories * 1.375).toFixed(0) + " cals/day"
    
    } else if (activity == "moderate") {

        document.getElementById('heading').innerHTML = "Your caloric expenditure is: "
        document.getElementById('calorie-output').innerHTML = (calories * 1.55).toFixed(0) + " cals/day"
    
    } else if (activity == "heavy") {

        document.getElementById('heading').innerHTML = "Your caloric expenditure is: "
        document.getElementById('calorie-output').innerHTML = (calories * 1.725).toFixed(0) + " cals/day"

    } else {

        document.getElementById('heading').innerHTML = "Your caloric expenditure is: "
        document.getElementById('calorie-output').innerHTML = (calories * 1.9).toFixed(0) + " cals/day"
    
    }
}
