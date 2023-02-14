import axios from 'axios'
import Cookies from 'js-cookie'

const getUserData = async () => {
  const nuevamentetoken = Cookies.get('nuevamenteToken')
  const result = await axios.get('http://localhost:3003/user/getUserData', nuevamentetoken)
}
