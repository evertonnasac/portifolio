
export type TypeObject = {
    home : number,
    about : number,
    resume : number,
    portfolio: number,
}

let valuesHeightSection : TypeObject = {
    home : 0,
    about : 0,
    resume : 0,
    portfolio: 0,
}

type ElementsRef = {
    element : React.RefObject<HTMLDivElement | HTMLElement>,
    section :  keyof TypeObject,
}

let refselements : ElementsRef[] = [];

const saveValues = (value: number, property:  keyof TypeObject) => {
    if (valuesHeightSection.hasOwnProperty(property)) {
        valuesHeightSection[property] = value;
    }
}

export const useHeight  = () => {

    const setRefs = (element : React.RefObject<HTMLDivElement | HTMLElement>, section : keyof TypeObject ) => {
        refselements.push({element, section})
    }
    
    const setValues = () => {
        refselements.forEach(element => {
            if(element.element.current){
                saveValues(element.element.current.clientHeight, element.section)
            }    
        })
    }

    const getValues = () =>{
        return { ... valuesHeightSection}
    }

    return {setValues, getValues, setRefs}
    
}