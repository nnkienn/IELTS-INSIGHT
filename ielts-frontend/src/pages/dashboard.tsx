import { logout } from "@/features/auth/authSlice"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { useAppSelector } from "@/hooks/useAppSelector"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"

export default function dashboard() {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const user = useAppSelector((state)=>state.auth.user)
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

    if(!isLoggedIn || !user){
        if(typeof window !== 'undefined')
        {
            router.replace('/login')
        }
        return null
    }
    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('user')
        router.push('/login')
    }
    return (
        <div><h1 className="text-2xl font-bold">👋 Welcome, {user.username}</h1>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
        </div>
    )
}
