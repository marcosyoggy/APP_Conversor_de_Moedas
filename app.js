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
let refCoin = ''

const conversions_Values = async coin_Country => {
  const response = await get_Coin_Value(coin_Country)
  return response.conversion_rates
}

const get_Element_Value = (sel_Element) => {
  sel_Element.forEach(item => {
    refCoin = item.value
  })
  return refCoin
}

const display_Conversion_Precision = async ref_Coin => {
  const { BRL, USD } = await conversions_Values(ref_Coin)
  return show_Conversion.textContent = ` ${USD} ${get_Element_Value(select_One)} = ${BRL.toFixed(2)} ${get_Element_Value(select_Two)}`

}

const display_Conversion_Values = (s01, s02, input_Values) => {
  
    s01.forEach(async (item) => {
      ref_Coin_Select01 = item.value
      obj_Info = await conversions_Values(ref_Coin_Select01)
      first_Select = obj_Info[ref_Coin_Select01]
  
      s02.forEach(async (item) => {
        ref_Coin_Select02 = item.value
        second_Select = obj_Info[ref_Coin_Select02].toFixed(2)
      })
  
      converted_values.textContent = (input_Values.value * (second_Select / first_Select)).toFixed(2)
  
      show_Conversion.textContent = `${first_Select} ${ref_Coin_Select01} = ${second_Select} ${ref_Coin_Select02}`
    })

}

input_Currencies.addEventListener('input', () => {

  display_Conversion_Values(select_One, select_Two, input_Currencies)
  
})

display_Conversion_Precision(get_Element_Value(select_One))

