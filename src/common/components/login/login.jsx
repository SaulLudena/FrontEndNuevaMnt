/*Importando componentes */
import LeftSide from './leftSide'
import RightSide from '../reusable/rightSide'

export default function Login() {
  return (
    <div className="grid grid-cols-1  h-screen lg:grid-cols-2">
      <LeftSide />
      <RightSide />
    </div>
  )
}
