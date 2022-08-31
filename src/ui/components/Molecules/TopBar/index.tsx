import { Container, Section, Text } from './styles'

import { Icon } from './../../Atoms/Icon'
export const TopBar = () => {
    return (
        <Container>
            <Section>
                <Icon src="/img/TopBar/home.png" />
                <Text>HOME</Text>
                <Icon src="/img/TopBar/envelope.png" />
                <Text>EMAIL</Text>
            </Section>
            <Section>
                <Icon src="/img/TopBar/youtube.png" alt="youtube icone" />
                <Icon src="/img/TopBar/instagram.png" alt="instagram icone" />
                <Icon src="/img/TopBar/facebook.png" alt="instagram icone" />
                <Icon src="/img/TopBar/whatsapp.png" alt="whatsapp icone" />
            </Section>
        </Container>
    )
}
