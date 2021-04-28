import { getRepository } from "typeorm"
import { Message } from "../entity/Message"

import userController from './userController'

interface IMessage{
    message: string,
    email: string 
}

const messageController = {
    async createMessage(message: IMessage){
        const user = await userController.createUser(message)
    
        const createdMessage = await getRepository(Message).save({
            text: message.message,
            user: user
        })
        return createdMessage
    }
}

export default messageController

