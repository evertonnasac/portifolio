import {ContainerImage, Image as I, Link} from "./styles"
import { StaticImageData } from "next/image"

interface IImage {
    link: string,
    title : string,
    img : StaticImageData
}

export const  Image = ({link, img, title } : IImage) => {
    return(
        <ContainerImage>
            <I src = {img.src}/>
            <Link href={link}>{title}</Link>
        </ContainerImage>
    )
}