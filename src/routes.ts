import { Router } from 'express'

import userController from './controllers/userController'

const router = Router()


router.get('/home', (req, res) => {
    res.render('home.html')
})
router.post('/user', async (req, res) => {
    const bodyData = {
        name: req.body.name,
        email: req.body.email
    }
    const user = await userController.createUser(bodyData)

    res.send(user)
})



export default router