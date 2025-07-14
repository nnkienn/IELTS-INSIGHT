import { login } from "@/features/auth/authSlice"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"
import { User } from "@/types/user"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
    const [email, setEmail] = useState<string>('')
    useEffect(() => {
        if (isLoggedIn) {
            router.replace('/dashboard')
        }
    }, [isLoggedIn])
    const handleLogin = () => {
        const stored = localStorage.getItem('user')
        if (!stored) return alert('No User found . Please register again')
        const user = JSON.parse(stored) as User


        if (user.email !== email.trim()) {
            return alert('email khoong dung')
        }
        dispatch(login(user))
        router.push('/dashboard')
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" name="" id="" placeholder="Your email" onChange={e => setEmail(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}