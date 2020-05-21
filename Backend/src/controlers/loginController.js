const connection = require('../datebase/connection')


module.exports = {
    async access(req, res){
        const {username, password} = req.body
        const  verifyUser =await connection('users')
        .select('name_user','id_user', 'username')
        .where({'username': username, 'password': password})
        .first()

        return !verifyUser 
        ? res.status(401).json({error:'Usuario ou senha invalida'})
        :res.json(verifyUser)


    }

}
