import { NextResponse } from 'next/server'
export async function middleware(request) {
  const jwt = request.cookies.get('nuevamenteToken')
  if (jwt === undefined) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  try {
    //una vez decodificado el token podremos darle paso al dashboard, sino
    //lo mandamos al login (como siempre xd)
    // const decodedToken = await jose.jwtVerify(jwt, 'a')

    const data = await fetch('http://localhost:3003/login/protected', {
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
  matcher: ['/dashboard/:path*', '/masCursos/:path*', '/miAprendizaje/:path*'],
}
