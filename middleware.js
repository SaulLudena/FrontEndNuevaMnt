import { NextResponse } from 'next/server'
export async function middleware(request) {
  const jwt = request.cookies.get('nuevamenteToken')
  if (jwt === undefined) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  /*si el codigo de usuario es diferente de 1 o 3 entonces devuelvelo a la ruta /Dashboard usando NextResponse*/

  try {
    await fetch('http://localhost:3003/login/protected', {
      headers: {
        authorization: jwt.value,
      },
    })

    return NextResponse.next()
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL('/', request.url))
  }
}
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/masCursos/:path*',
    '/miAprendizaje/:path*',
    '/shoppingCart/:path*',
    '/myprofile/:path*',
  ],
}
