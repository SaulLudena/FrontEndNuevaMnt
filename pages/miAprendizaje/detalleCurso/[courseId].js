import Head from 'next/head'
import SideNav from '../../../src/common/components/sidenav/sidenav'
import DetailCourse from '../../../src/common/components/detailCourse/detailCourse'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const enrolledCourse = router.query
  return (
    <>
      <Head>
        <title>Mi aprendizaje</title>
      </Head>
      <div className="flex w-full h-screen ">
        <SideNav />
        <DetailCourse enrolledCourse={enrolledCourse} />
      </div>
    </>
  )
}
