import express from 'express'
import {storeUser} from '../controller/signup.js'
import {loginUser} from '../controller/login.js'
const router= express.Router()

router.post('/creation',storeUser)
router.post('/auth',storeUser)
export default router