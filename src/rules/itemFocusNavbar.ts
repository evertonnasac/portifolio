import { useHeight } from "@/hooks/useHeight"
import {styles} from "./defaultVaules"


export const setFocusItemNavbar = (valueScrolly : number) => {
    const {getValues} = useHeight()
    const valuesHeightSection  =  getValues()
    let nav = Number(styles.heightNavBar.substring(0,2))
    

    if (valueScrolly < valuesHeightSection.home) return "Home";

    if (valueScrolly >= valuesHeightSection.home && valueScrolly < valuesHeightSection.home + valuesHeightSection.about - nav) {
      return "Sobre";
    }
    
    if (valueScrolly >= valuesHeightSection.home + valuesHeightSection.about - nav && valueScrolly < valuesHeightSection.home + valuesHeightSection.about + valuesHeightSection.resume - nav) {
      return "Resumo";
    }
    
    if (valueScrolly >= valuesHeightSection.home + valuesHeightSection.about + valuesHeightSection.resume - nav) {
      return "Portfolio";
    }
    
    return "Portfolio";
};

