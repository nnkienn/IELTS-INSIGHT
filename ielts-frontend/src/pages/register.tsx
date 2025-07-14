import { login } from "@/features/auth/authSlice"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { Role, User } from "@/types/user"
import { useRouter } from "next/router"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export default function registerPage() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [role , setRole] = useState<Role>('student')

    const handleSubmit = (e : React.FormEvent)=>{
        e.preventDefault()
        if(!username.trim() || !email.trim()){
            alert("Please type Email & username")
            return
        }
        const newUser : User ={
            id : uuidv4(),
            email : email,
            username : username,
            role : role,
            createdAt : new Date().toISOString()
        }
        dispatch(login(newUser))
        localStorage.setItem('user',JSON.stringify(newUser))
        router.push('/dashboard')



    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="" id="" placeholder="Your email" onChange={e=>setEmail(e.target.value)}/>
                <input type="text" name="" id="" placeholder="Your username" onChange={e=>setUsername(e.target.value)}/>
                <select name="" id="" value={role} onChange={e=>setRole(e.target.value as Role)}>
                    <option value="student">student</option>
                    <option value="teacher">teacher</option>
                </select>
                <button type="submit">Register</button>
            </form>
        
        </div>
    )
}