import Link from "next/link";

import React from "react";

interface IIcon {
    children: React.ReactNode,
    link: string
}

export const Icon =  (props: IIcon) => {
    return (
        <a href={props.link} target="_blank" >
            {props.children}
        </a>
       
    )
}



