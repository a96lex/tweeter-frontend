import React from "react";
import Camera from "../components/CameraHandler";

export default function () {
  return (
    <>
      <button onClick={Camera.startCamera()}></button>
      <button onClick={Camera.takeSnapshot()}></button>
    </>
  );
}
