import Image from 'next/image';

import CardsLeft from '@/assets/card-imgs-left.png';
import CardsRight from '@/assets/card-imgs-right.png';

export function CardsHero() {
    return(
        <div className='relative w-area-cards-mobile h-area-cards-mobile @desktop:w-full @desktop:h-area-card-desk mt-12 @desktop:mt-20'>
            <Image
                src={CardsLeft}
                alt='Card NFT esquerda '
                className='absolute top-0 right-32 z-10 @desktop:w-auto @desktop:right-0 @desktop:h-area-card-desk'
            />
            <Image
                src={CardsRight}
                alt='Card NFT direita'
                className='absolute top-0 left-32 @desktop:w-auto @desktop:left-0 @desktop:h-area-card-desk'
            />
        </div>
    )
}