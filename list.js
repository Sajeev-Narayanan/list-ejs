const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.listen(8000)

app.get('/',(req,res) =>{
    // const foodItems=['seafood','mutton','egg','vegetarian']
    const seafood=['fish fry','chilly fish','prawn pepper fry','prawn curry','chilly prawn']
    const mutton=['mutton peppor fry','mutton curry','mutton mahali','mutton ragan josh','mutton biriyani']
    const egg=['omelet','masala omelet','egg curry','egg masala']
    const vegetarian=['meals','veg biriyani','ghee rice','porota','dosa','puttu']

    res.render('food', {seafood,mutton,egg,vegetarian})
})