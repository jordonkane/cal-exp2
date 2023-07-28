
/*

Calorie Expenditure Fitness Tool

This web application provides a simple way to calculate daily caloric expenditure.
It outputs basal metabolic rate (BMR) & how many calories to gain/lose weight based
on the values inputted by the user. Enjoy!

Author: Jordon Kane

*/

function calculate() {

    // Grab values from HTML elements for age, sex, and weight.

    let age = document.getElementById('age').value
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let weight = document.getElementById('weight').value

    // Grab selected height value.

    selectHeightElement = document.querySelector('#height');
    height = selectHeightElement.options[selectHeightElement.selectedIndex].value;

    // Perform calculations based on selected sex value.

    let calories = (sex == "male") ?
    ((10 * weight / 2.2) + (6.25 * height / 0.393701) - (5 * age) + 5) :
    ((10 * weight / 2.2) + (6.25 * height / 0.393701) - (5 * age) - 161)

    // Log calculations in the console.

    console.log("basal metabolic rate: " + calories.toFixed(0))
    console.log("sedentary: " + (calories * 1.2).toFixed(0))
    console.log("light exercise: " + (calories * 1.375).toFixed(0))
    console.log("moderate exercise: " + (calories * 1.55).toFixed(0))
    console.log("heavy exercise: " + (calories * 1.725).toFixed(0))
    console.log("intense exercise: " + (calories * 1.9).toFixed(0))

    console.log("Add/subtract 200-500 calories for steady weight gain/loss.")

    // Grab selected activity value.

    selectActivityElement = document.querySelector('#activity');
    activity = selectActivityElement.options[selectActivityElement.selectedIndex].value;
    
    // Produce output based on selected activity value.

    if (activity == "sedentary") {

        // Calculate daily caloric expenditure for sedentary activity level.

        newCalories = (calories * 1.2).toFixed(0)
        goal(newCalories)

    } else if (activity == "light") {

        // Calculate daily caloric expenditure for light exercise. (1-2 days/week)

        newCalories = (calories * 1.375).toFixed(0)
        goal(newCalories)

    } else if (activity == "moderate") {

        // Calculate daily caloric expenditure for moderate exercise(3-5 days/week).

        newCalories = (calories * 1.55).toFixed(0)
        goal(newCalories)

    } else if (activity == "heavy") {

        // Calculate daily caloric expenditure for heavy exercise (6-7 days/week).

        newCalories = (calories * 1.725).toFixed(0)
        goal(newCalories)

    } else {

        // Calculate daily caloric expenditure for intense exercise (2x/day).

        newCalories = (calories * 1.9).toFixed(0)
        goal(newCalories)

    }
}

// Calculate weight goals.

function goal(cals) {
    
    // Modify HTML elements in index.html

    document.getElementById('heading').innerHTML = "Your caloric expenditure is: "
    document.getElementById('calorie-output').innerHTML = newCalories + " cals/day"
    document.getElementById('message').innerHTML = "Eat " + (cals - (-500)) + " cals/day to gain weight <br> Eat " + (cals - 500) + " cals/day to lose weight <br>"

}
