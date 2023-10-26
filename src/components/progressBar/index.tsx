import styled from "styled-components";


const Bar = styled.div<{$width: string}>` 
    width: ${({$width}) => $width};
    height: 3px;
    background-color: ${({theme}) => theme.colors.gray};


`

const Progress = styled.div<{$width: string}>` 
    width: ${({$width}) => $width};
    height: 100%;
    background-color: ${({theme}) => theme.colors.secondary};

`

export const ProgressBar = ({width, progress} : {width: string, progress:string}) => {
    return(
        <Bar $width={width}>
            <Progress $width={progress}/>
        </Bar>
    )
}