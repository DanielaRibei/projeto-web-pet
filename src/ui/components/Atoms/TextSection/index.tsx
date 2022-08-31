import { TextSectionTitle, Container, Line } from './styles'

type Props = {
    name : string;
}

export const TextSection = (props: Props) => {
    return (
        <Container>
            <TextSectionTitle>{props.name}</TextSectionTitle>
            <Line/>
        </Container>
    )
}
