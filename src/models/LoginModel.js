const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login{
    constructor(body){
        this.body = body
        this.user = null
    }

    async register(){
        this.user = await LoginModel.create(this.body)
        this.cleanUp()
    }

    cleanUp(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login