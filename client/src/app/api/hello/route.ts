import { NextResponse } from "next/server"
 
type ResponseData = {
  message: string
}
 
export async function GET(
  req: Request
) {
  console.log(req.url)
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  console.log(searchParams.toString(), id)
  console.log(process.env.HOTPAPER_API_KEY)
  return NextResponse.json<ResponseData>({ message: 'Hello from Next.js!' })
}
