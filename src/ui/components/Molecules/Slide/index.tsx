import { CarouselContainer, Item,  } from './styles'
//import {plusDivs} from "../../../../data/util/scriptSlider"
export const Slide = () => {


    return (
        <CarouselContainer>
            <Item src="/slider.png" />
        </CarouselContainer>
    )
}


/*
 <button
                class="w3-button w3-black w3-display-right"
                onclick="plusDivs(1)"
            >
                &#10095;
            </button>
<CarouselContainer>
            <Carousel isRTL={true} breakPoints={breakPoints}>
                <Item src={"1"} />
                <Item src={"1"} />
                <Item src={"1"} />
                <Item src={"1"} />

            </Carousel>
        </CarouselContainer>*/
