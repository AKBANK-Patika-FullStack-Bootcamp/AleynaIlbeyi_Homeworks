const { simba } = require('./kopek.js') ;
const { kopegiTemizle,kopekBakimSaati} = require('./kopekBakimUtility.js');

console.log(
        `kopek adi: ${simba.name},
        kopek boyu: ${simba.height},
        kopek kilosu: ${simba.weight}`
);

    kopegiTemizle();
    console.log(`kopek ilgi saati : ${kopekBakimSaati * simba.weight}`);
