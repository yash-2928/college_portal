import React from "react";
import pdfImage from "../images/pdf_img.png";

export default function DocumentView(props) {
  let fileUrl = props.fileUrl;
  let height = 100;
  let width = 100;
  if (props.postType === "application/pdf") {
    fileUrl = pdfImage;
    width = 64;
    height = 64;
    // <img src={pdfImage} width={64} height={64} />
  }
  return <img src={fileUrl} alt="" width={width} height={height} />;
}
