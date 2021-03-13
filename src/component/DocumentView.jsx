import React from "react";
import pdfImage from "../images/pdf_img.png";
import Water from "../images/water.jpeg";

export default function DocumentView(props) {
  let fileUrl = props.fileUrl;
  if (props.postType === "application/pdf") {
    fileUrl = pdfImage;
  }
  return <img src={fileUrl || Water} alt="" width={props.width} height={props.height} />;
}
