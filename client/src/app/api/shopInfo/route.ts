import { NextResponse } from "next/server"
 
const HOTOPAPER_BASE_URL = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/"
 
export async function GET(
  req: Request
) {
  const { searchParams } = new URL(req.url)
  console.log(searchParams.toString())
  const apiKey = process.env.HOTPAPER_API_KEY
  const res = await fetch(HOTOPAPER_BASE_URL + '?' + `key=${apiKey}&` + searchParams.toString(), {method: 'GET'})
  const json = await res.json()
  console.log(json)
  return NextResponse.json({totalNum: json.results.results_available, start: json.results.results_start, shops: json.results.shop})
}
