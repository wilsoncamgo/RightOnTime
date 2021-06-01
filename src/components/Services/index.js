import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ArrowRight,
  Play,
  Stop
} from "./ServicesElements";
import Transmilenio from '../../images/red.png'
import SITP1 from '../../images/blue.png'
import SITP2 from '../../images/orange.png'
import BusStop from '../../images/bus_stop.svg'

const Services = () => {
  return (
    <>
    <ServicesContainer>
      <ServicesH1>Esta es la ruta que te sugerimos</ServicesH1>
      <ServicesWrapper>
      <ServicesCard>
          <ServicesIcon src={BusStop} />
          <ServicesH2>Entrada a Portal</ServicesH2>
          <ServicesP>Camina hasta el Portal Suba</ServicesP>
          <Play/>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Transmilenio} />
          <ServicesH2>Troncal:F19</ServicesH2>
          <ServicesP>Toma el servicio F19 en el gate 2</ServicesP>
          <ArrowRight/>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={BusStop} />
          <ServicesH2>Troncal: Calle 26</ServicesH2>
          <ServicesP>Bajate en la estacion Calle 26</ServicesP>
          <ArrowRight/>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={SITP1} />
          <ServicesH2>Zonal:R45</ServicesH2>
          <ServicesP>Toma el SITP R45 en la Calle 26#34-09</ServicesP>
          <ArrowRight/>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={SITP2} />
          <ServicesH2>Zonal: T54</ServicesH2>
          <ServicesP>Toma el SITP T54 en la Calle 3#4-07</ServicesP>
          <Stop/>
        </ServicesCard>
        
      </ServicesWrapper>
    </ServicesContainer>
    </>
  );
};

export default Services;
