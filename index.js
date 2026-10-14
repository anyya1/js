const basePrice = 500 // базовая цена билета
const age = 18 // возраст покупателя
const movieRating = "18+" // может быть 18+ 16+ 14+ 12+ (можно побольше добавить)
const isWeekend = true // если входной то +15% от базовой стоимости к общей стоимости билета
const isEvening = true // если входной то +10% от базовой стоимости к общей стоимости билета
const hasStudentCard = true // если есть студенчская карта то -15% скидка от итоговой
//  стоимости билета (студенческий дейтсвует только при age >= 14 || age <=25) 
// так же студенческий работает только в будни

//для детей младше 12 лет скидка 50%

let price = basePrice; 

const minAge = parseInt(movieRating);
if (age < minAge) {
    console.log("Отказ: возраст не подходит");
} else {
   
    if (isWeekend) {
        price = price + (basePrice / 100 * 15); 
    }
    if (isEvening) {
        price = price + (basePrice / 100 * 10); 
    }

    if (age < 12) {
        price = price * 0.5; 
    } 

    else if (hasStudentCard) {
       
        if (age >= 14 && age <= 25 && !isWeekend) {
            price = price - (price / 100 * 15); 
        }
    }

    console.log(price); 
}