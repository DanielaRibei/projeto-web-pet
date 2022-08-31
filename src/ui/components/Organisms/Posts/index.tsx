import { Container, Section } from './styles'
import { Card } from '../../Molecules/Card'
import { TextSection } from '../../Atoms/TextSection'

export const Posts = () => {
    return (
        <Container>
            <TextSection name="POSTS RECENTES" />
            <Section>
                <Card
                    title="MALTÊS"
                    image="http://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
                    alt="Maltes"
                    subTitle="Os primeiros registros do maltês têm mais de 6 mil anos ...."
                />
                <Card
                    title="ROTTWELER"
                    image="https://www.hypeness.com.br/1/2020/07/Cachorros-podem-reconhecer-pessoas-n%C3%A3o-confi%C3%A1veis-foto-unsplash-3.jpg"
                    alt="Maltes"
                    subTitle="Terriers nasceram para cavar. Hounds surgiram...."
                />
                <Card
                    title="PIT BULL"
                    image="https://meuamigopet.com.br/wp-content/uploads/2019/10/pitbull-terrier-am%C3%A9ricain-80916843.jpg"
                    alt="Maltes"
                    subTitle="O Pitbull, apesar de parecer bem grande, é na verdade ...."
                />
                <Card
                    title="MALTÊS"
                    image="http://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
                    alt="Maltes"
                    subTitle="Os primeiros registros do maltês têm mais de 6 mil anos ...."
                />
                <Card
                    title="ROTTWELER"
                    image="https://www.hypeness.com.br/1/2020/07/Cachorros-podem-reconhecer-pessoas-n%C3%A3o-confi%C3%A1veis-foto-unsplash-3.jpg"
                    alt="Maltes"
                    subTitle="Terriers nasceram para cavar. Hounds surgiram...."
                />
                <Card
                    title="PIT BULL"
                    image="https://meuamigopet.com.br/wp-content/uploads/2019/10/pitbull-terrier-am%C3%A9ricain-80916843.jpg"
                    alt="Maltes"
                    subTitle="O Pitbull, apesar de parecer bem grande, é na verdade ...."
                />
            </Section>
        </Container>
    )
}
