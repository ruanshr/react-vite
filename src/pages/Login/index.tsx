import { useNavigate } from "react-router-dom"
export const Login = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  return <div><button onClick={goHome} >去首页</button></div>
}