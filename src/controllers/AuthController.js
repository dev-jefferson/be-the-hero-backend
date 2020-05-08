const db = require('../database/connection')

module.exports = {

  async create(req, res) {
    const { id } = req.body;  
    const ong = await db('ongs').select('name').where('id', id).first();
  
    if (!ong) {
      return res.status(400).json({error: 'Ong não encontra para este ID!'})
    }
    return res.json(ong);
  },

}