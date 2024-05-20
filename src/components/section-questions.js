import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const questions = [
    {
        question:'O que são NFTs?',
        response: 'O NFT é o acrônimo para “non-fungible token”, que em tradução literal significa token não-fungível, criado dentro da rede blockchain e que pode ser desde uma imagem até um vídeo',
    },
    {
        question:'Como funciona a compra de NFTs em seu site?',
        response: 'Como ela foi criada com base na rede do Ethereum, para ser possível comercializar os NFTs na plataforma é necessário, basicamente, possuir Ether em carteira. Com eles em mãos, é só escolher uma das obras ou coleções que estão dentro do marketplace e enviar uma ordem de compra para o vendedor.',
    },
    {
        question:'Como posso vender meus próprios NFTs?',
        response: 'Sem dúvidas, a OpenSea é o marketplace de NFT descentralizado mais popular da atualidade. Segundo o site DappRadar, esse é o maior mercado de NFT em número de traders e volume negociado. Mais de US$32 bilhões em tokens já foram negociados na plataforma por mais de 2 milhões de usuários.',
    },
    {
        question:'Os NFTs são seguros e autênticos?',
        response: 'Antes de comprar um NFT de qualquer marketplace, pesquise e se certifique de que a obra de arte que você está comprando é de uma conta verificada. A foto de perfil do artista na OpenSea ou em outro marketplace de NFT deve estar com uma marca de verificação azul.',
    },
    {
        question:'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
        response: 'Além dos custos de cunhagem, também pode haver taxas de mercado associadas à venda de um NFT. Essas taxas podem variar dependendo do mercado, mas normalmente ficam em torno de 2,5% do preço de venda.',
    }
]

//Obs tudo que eu for Importar do ACcordion tem que ser do UI e não do radix-ui
export function SectionQuestions() {
    return(
        <section className="pt-10 @desktop:pt-28">
            <ContainerGrid>
                <TitleSection
                    subtitle='Desvendando os Mistérios dos NFTs'
                    title='Perguntas Frequentes'
                />
                <div>
                <Accordion type="single" collapsible className="w-full">
                    {
                        questions.map(({question, response},index) => (
                            <AccordionItem key={index} value={`question-${index}`}>
                                <AccordionTrigger>{question}</AccordionTrigger>
                                <AccordionContent>
                                {response}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
            </ContainerGrid>
        </section>
    )
}