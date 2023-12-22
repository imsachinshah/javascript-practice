const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  const advice = document.querySelector('#advice')
  let bmi;

  if( height === '' || height < 1 || isNaN(height)){
    result.innerHTML = `<span> Invalid ${height} height input </span>`
  }
  else if( weight === '' || weight < 1 || isNaN(weight)){
    result.innerHTML = `<span> Invalid ${weight} weight input </span>`
  }
  else{
    bmi = (weight / ((height * height)/10000)).toFixed(2)
    result.innerHTML = `<span> Your BMI is ${bmi}  </span>`
  }

  if(bmi < 18.6){
    advice.innerHTML = `<span> You're under weight, eat and build some muscles </span>`
  }
  else if(bmi >= 18.6 && bmi <= 24.9 ){
    advice.innerHTML = `<span> Cheers, you're fit Stay Fit and Healthy </span>`
  }
  else{
    advice.innerHTML = `<span> Oops, it's ok eat tasty food but hit the gym and get in shape </span>`
  }

})