import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'

// Custom hook giúp dùng dispatch có type gợi ý
export const useAppDispatch = () => useDispatch<AppDispatch>()
