import LatLon from 'geodesy/latlon-ellipsoidal-vincenty.js'

//サンプル渋谷駅
const p1 = new LatLon(35.658034, 139.701636)

//サンプル新宿駅
const p2 = new LatLon(35.689738, 139.700391)

console.log(p1.finalBearingTo(p2))
