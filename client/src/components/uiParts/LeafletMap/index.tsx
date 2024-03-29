import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

interface IProps{
  lat: number
  lng: number
  zoom?: number
  popup?: ReactNode
}

const LeafLetMap: React.FC<IProps> = (props) => {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("./Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    // 座標情報が変わったら取得しなおして欲しい
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.lat, props.lng]
  );
  return <Map lat={props.lat} lng={props.lng} zoom={props.zoom} popup={props.popup} />;
}

export default LeafLetMap;
