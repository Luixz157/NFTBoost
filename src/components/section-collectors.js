import { CardCollectors } from "./card-collectors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import Thumb01 from '@/assets/nfts/01.jpg';
import Thumb02 from '@/assets/nfts/02.jpg';
import Thumb03 from '@/assets/nfts/03.jpg';
import Thumb04 from '@/assets/nfts/04.jpg';
import Thumb05 from '@/assets/nfts/05.jpg';
import Thumb06 from '@/assets/nfts/06.jpg';
import Thumb07 from '@/assets/nfts/07.jpg';
import Thumb08 from '@/assets/nfts/08.jpg';

const collectors = [
    {
        image:Thumb01,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb02,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb03,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb04,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb05,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb06,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb07,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    },
    {
        image:Thumb08,
        name:'Nome 1',
        pertecent:'20',
        valu_btc:'0.7321',
    }
]

export function SectionCollectors() {
    return(
        <section className="py-10 @desktop:py-28">
            <ContainerGrid>
                <TitleSection
                    subtitle='Colecionadores em Foco'
                    title='Principais Colecionadores'
                />
                <div className="grid grid-cols-1  @tablet:grid-cols-2 gap-x-4 @desktop:gap-x-8 gap-y-4">
                    {
                        collectors.map(({image, name, pertecent, valu_btc},index) => (
                            <CardCollectors 
                            key={index}
                            position={index + 1}
                            image={image}
                            name={name}
                            pertecent={pertecent}
                            valu_btc={valu_btc}
                            />
                        ))
                    }
                </div>
            </ContainerGrid>
        </section>
    )
}