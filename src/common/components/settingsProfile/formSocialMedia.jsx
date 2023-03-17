import { reusableStyles } from '../../../styles/styles'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
export default function formSocialMedia() {
  return (
    <form className="bg-white rounded-xl">
      <div className="grid grid-cols-12 gap-10 p-10 bg-white rounded-xl">
        <div className="grid col-span-6 gap-10 ">
          <div className="grid gap-3 ">
            <p className="text-3xl font-medium">Enlaces a perfiles sociales</p>
          </div>
          <div className="grid gap-3 ">
            <p className="font-medium">Facebook</p>
            <div>
              <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="" />
            </div>
          </div>
          <div className="grid gap-3 ">
            <p className="font-medium">Twitter</p>
            <div>
              <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="" />
            </div>
          </div>
          <div className="grid gap-3 ">
            <p className="font-medium">Linkedin</p>
            <div>
              <input type="text" className={reusableStyles.inputFormForCourseMaintenance} value="" />
            </div>
          </div>
          <div className={reusableStyles.button + 'col-span-1'}>
            <button>Actualizar perfiles</button>
          </div>
        </div>
      </div>
    </form>
  )
}
