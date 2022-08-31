import { Container, Image, Title, SubTitle } from './styles'

type Props = {
    image: string
    alt: string
    title: string
    subTitle: string
}
export const Card = (props: Props) => {
    return (
        <Container>
            <Image src={props.image} alt={props.alt} />
            <Title>{props.title}</Title>
            <SubTitle>{props.subTitle}</SubTitle>
        </Container>
    )
}
