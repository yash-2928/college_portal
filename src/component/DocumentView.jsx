import React from "react";
import pdfImage from "../images/pdf_img.png";
import Water from "../images/water.jpeg";

export default function DocumentView(props) {
  let fileUrl = props.fileUrl;
  let height = 200;
  let width = 200;
  if (props.postType === "application/pdf") {
    fileUrl = pdfImage;
    width = 64;
    height = 64;
  }
  return <img src={fileUrl || Water} alt="" width={width} height={height} />;
}
