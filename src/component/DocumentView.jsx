import React from 'react'
import pdfImage from '../images/pdf_img.png'

export default function DocumentView(props) {
    let fileUrl = props.fileUrl;
    if (props.postType === "application/pdf") {
        fileUrl = pdfImage;
    }
    return <img src={fileUrl} width={100} height={100} />
}