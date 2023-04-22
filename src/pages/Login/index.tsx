import { Button } from "antd"
import { useNavigate } from "react-router-dom"
export const Login = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  return <div><Button onClick={goHome} >去首页</Button></div>
}