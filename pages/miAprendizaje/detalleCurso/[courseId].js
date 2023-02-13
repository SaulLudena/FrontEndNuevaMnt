import Head from 'next/head'
import SideNav from '../../../src/common/components/sidenav/sidenav'
import DetailCourse from '../../../src/common/components/detailCourse/detailCourse'

import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const courseId = router.query.courseId
  return (
    <>
      <Head>
        <title>Mi aprendizaje</title>
      </Head>
      <div className=" w-full h-screen flex ">
        <SideNav />
        <DetailCourse courseId={courseId} />
      </div>
    </>
  )
}
