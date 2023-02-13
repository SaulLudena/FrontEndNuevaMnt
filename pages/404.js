import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import src404 from '../public/assets/404.png'
import src404_svg from '../public/assets/taken.svg'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Nuevamente</title>
      </Head>
      <div className="h-screen w-full flex justify-center">
        <div className="text-center flex flex-col gap-6">
          <Image src={src404_svg} width={500} height={500} alt={src404} />
          <div>
            <h1 className="text-7xl mb-5 font-light">Ooops.</h1>
            <p className="">Parece que estamos perdidos</p>
          </div>
          <div>
            <Link
              href="/"
              className="text-center text-sm bg-[#FFF409] p-4 rounded-lg text-gray-700  hover:shadow-md transition"
            >
              Ir a la página principal
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
