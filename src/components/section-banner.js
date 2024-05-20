import Image from "next/image";
import { ContainerGrid } from "./container";

import GooglePlay from '@/assets/google.svg';
import AppleStore from '@/assets/apple.svg';

export function SectionBanner() {
    return(
        <section>
            <ContainerGrid>
                <div className="w-full h-auto @laptop:h-area-banner bg-cover bg-banner bg-no-repeat bg-center rounded-xl flex flex-col items-center justify-center @laptop:py-0 @laptop:px-0 py-10 px-2">
                    <h2 className="text-4xl @desktop:text-6xl/snug font-poppins text-center mb-4">Abra as Portas para a Próxima Revolução Digital</h2>
                    <p className="text-center text-base @desktop:text-xl mb-6 max-w-xl">Descubra, Adquira e Possua os NFTs Mais Valioso do Universo Digital. Sua Oportunidade, Sua História</p>
                    <div className="flex flex-col @desktop:flex-row items-center gap-6">
                        <Image
                            src={GooglePlay}
                            alt=""
                        />
                        <Image
                            src={AppleStore}
                            alt=""
                        />
                    </div>
                </div>
            </ContainerGrid>
        </section>
    )
}