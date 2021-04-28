import { getRepository } from "typeorm"
import { User } from "../entity/User"

interface Iuser{
    name?: string,
    email: string
}
const userController = {
    async createUser(data: Iuser){
        const user = await getRepository(User).findOne({
            where: {
                email: data.email
            }
        })
        if(!user){
            console.log('User Not Registered! ')
            const createdUser = await (await getRepository(User).save({
                email: data.email,
                name: data.name
            }))
            return createdUser
        }else{
            console.log('User Alredy Registered!')
            return user
        }
    }
}

export default userController