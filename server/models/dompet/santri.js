const mongoose = require('mongoose');

const santriSchema = new mongoose.Schema({
    nama: String,
    nis: String,
    noRekening: String,
    pesantren: String,
    saldo: Number
});

const Santri = new mongoose.model('Santri', santriSchema, 'santri');

module.exports = Santri;