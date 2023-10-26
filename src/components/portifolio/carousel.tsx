'use client'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "./image";

import twitter from "../../../public/img/img-clonetwitter.png"
import ecommerce from "../../../public/img/img-ecommerce.png"
import fruithub from "../../../public/img/img-fruithub.png"
import login from "../../../public/img/img-login.png"
import onboarding from "../../../public/img/img-onboarding.png"
import planner from "../../../public/img/img-planner.png"
import previsao from "../../../public/img/img-previsaotempo.png"

const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const CarouselContainer = () =>{
    return(
        <Carousel responsive={responsive}>
            <Image 
                img={ecommerce} 
                link="https://github.com/evertonnasac/compass-projeto-pwa-ecommerce" 
                title="Projeto Ecommerce - React"/>
            <Image 
                img={twitter} 
                link="https://github.com/evertonnasac/compass-projeto-clone-twitter-react" 
                title="Clone do Twitter - React"/>
            <Image 
                img={previsao}
                link="https://github.com/evertonnasac/previsao-do-tempo"
                title="Previsão do Tempo"/>
            <Image 
                img={login}
                link="https://github.com/evertonnasac/compass-projeto-keeapAlive"
                title="Página de Login Compass UOL"/>
            <Image 
                img={planner}
                link="https://github.com/evertonnasac/compass-projeto-weekly-planning"
                title="Planjamento semanal"/>
            <Image 
                img={onboarding}
                link="https://github.com/evertonnasac/compass-projeto-onboarding"
                title="Onboarding "/>
            <Image 
                img={fruithub}
                link="https://github.com/evertonnasac/compass-projeto-onboarding"
                title="FruiHub "/>
            
        </Carousel>
    )
   
}
 
