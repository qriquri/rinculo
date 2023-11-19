import { NextResponse } from "next/server"
 
const HOTOPAPER_BASE_URL = "http://webservice.recruit.co.jp/hotpepper/genre/v1/"
 
export async function GET(
  req: Request
) {
  const apiKey = process.env.HOTPAPER_API_KEY
  const res = await fetch(HOTOPAPER_BASE_URL + '?' + `key=${apiKey}&format=json`, {method: 'GET'})
  const json = await res.json()
  console.log(json)
  console.log(json.results.genre)
  return NextResponse.json({totalNum: json.results.results_available, start: json.results.results_start, genre: json.results.genre})
}
