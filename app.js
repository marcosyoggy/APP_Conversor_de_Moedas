const select_One = document.querySelectorAll('[data-js="currency-one"]')
const select_Two = document.querySelectorAll('[data-js="currency-two"]')
const converted_values = document.querySelector('[data-js="converted-value"]')
const input_Currencies = document.querySelector('[data-js="currency-one-times"]')
const show_Conversion = document.querySelector('[data-js="conversion-precision"]')

let first_Select = ''
let second_Select = ''
let obj_Info = {}
let ref_Coin_Select01 = ''
let ref_Coin_Select02 = ''

const conversions_Values = async coin_Country => {
  const response = await get_Coin_Value(coin_Country)
  return response.conversion_rates
}

input_Currencies.addEventListener('input', () => {

  select_One.forEach(async (item) => {
    ref_Coin_Select01 = item.value
    obj_Info = await conversions_Values(ref_Coin_Select01)
    first_Select = obj_Info[ref_Coin_Select01]
    
    select_Two.forEach(async (item) => {
      ref_Coin_Select02 = item.value
      second_Select = obj_Info[ref_Coin_Select02]
    })

    converted_values.textContent = (input_Currencies.value * (second_Select / first_Select)).toFixed(2)

    show_Conversion.textContent = `1 ${ref_Coin_Select01} = ${second_Select.toFixed(2)} ${ref_Coin_Select02}`
  })
})
