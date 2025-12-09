import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { AuthContext } from '../providers/AuthContext'

const useAuth = () => {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
