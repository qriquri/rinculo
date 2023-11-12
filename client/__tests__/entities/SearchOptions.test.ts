import ISearchOptions, { toQueryParam } from "@/entities/SearchOptions"

describe('toQueryParam', () => {
    it('緯度と経度を正しくクエリパラメータにできる', () => {
        const options: ISearchOptions = {lat: 10, lng: 21, format: 'json'}
        expect(toQueryParam(options)).toEqual('lat=10&lng=21&format=json')
    })
})
