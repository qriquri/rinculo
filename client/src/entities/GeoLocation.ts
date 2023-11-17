export interface IGeoLocation {
  lat: number;
  lng: number;
}

export const isEnableGeolocation = () => {
  if (!navigator.geolocation) {
    console.error("このブラウザーは位置情報に対応していません");
    alert("このブラウザーは位置情報に対応していません");
    return false;
  }
  return true;
};

export const geoFindMe = (
  successCallback: (position: GeolocationPosition) => void,
  errorCallback: (positionError: GeolocationPositionError) => void
) => {
  if (!isEnableGeolocation) {
    return false;
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  return true;
};
