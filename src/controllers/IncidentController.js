const crypto = require('crypto')
const db = require('../database/connection')

module.exports = {

  async index (req, res) {
    const ongs = await db('incidents').select('*')
  
    return res.json(ongs)
  },
  
  async create(req, res) {
    const {title, description, value} = req.body;
  
    const result = await db('incidents').insert({
      title,
      description,
      value
    })
  
    return res.json(result);
  }

}