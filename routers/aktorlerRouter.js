const router = require('express').Router();
let data = require("../data.js");

router.get("/", (req, res) => {
    res.status(200).json(data);
});

let next_id = 6;
router.post("/", (req, res, next) => {
    let yeni_aktor = req.body;
    if (!yeni_aktor.isim) {
        //error handling
        next(
            { statusCode: 400, 
              errorMessage: "Aktör eklemek için isim girmelisiniz." }
            )
    }
    else if (yeni_aktor.isim && !yeni_aktor.filmler) {
        next({
            statusCode:400,
            errorMessage:"Aktör eklemek için filmler girmelisiniz.",
        })

    }
    else {
    yeni_aktor.id = next_id;
    next_id++;
    data.push(yeni_aktor);
    res.status(201).json(yeni_aktor);
}
   
});


//put 
//düzenleme işlemi için : id ->req.params al
//düzenlenen aktör değerini req.bodyden al
//dizi içinde id ile aktör var mı,bu aktör varsa kullanıcının gön bilgilerle değiştir,200 koduyşa ilg gönder
//eğrr sistemde yoksa 404 yolla 


router.delete("/:id", (req, res) => {
    const silinecek_aktor_id = req.params.id;
    const silinecek_aktor = data.find(aktor => aktor.id === Number(silinecek_aktor_id))

    if (silinecek_aktor) {
        data = data.filter(aktor => aktor.id !== Number(silinecek_aktor_id))
        res.status(204).end();
    }
    else {
        res.status(404).json({ errorMessage: "Silmeye çalıştığınız aktor sistemde yok" });
    }
});



router.get("/:id", (req, res) => {
    console.log(req.body)
    const { id } = req.params; //object descructuring.
    const aktor = data.find(aktor => aktor.id === parseInt(id));
    if (aktor) {
        res.status(200).json(aktor);
    } else {
        res.status(404).send("Aradığınız aktör bulunamadı...");
    }
})







module.exports = router;