import {z} from 'zod'

const schema = z.object({
    name:z.string().min(1,"Name is required ").trim(),
    email:z.string().trim().min(1,"Email i required")

})
export default schema;