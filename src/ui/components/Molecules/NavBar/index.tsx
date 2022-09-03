import Link from 'next/link'
import { Container, AppList, AppListItem, Logo, ImgUser } from './styles'

export const NavBar = () => {
    return (
        <Container>
            <Logo
                src="/img/NavBar/dog-logo.png"
                alt="Logo Dog Curioso
"
            />
            <AppList>
                <AppListItem>
                    <Link href="/">Raça</Link>
                </AppListItem>
                <AppListItem>
                    <Link href="/">Saúde </Link>
                </AppListItem>
                <AppListItem>
                    <Link href="/">Espécies</Link>
                </AppListItem>
                <AppListItem>
                    <Link href="/">Bem-Estar</Link>
                </AppListItem>
            </AppList>
            <ImgUser
                src="https://lh3.googleusercontent.com/ogw/AOh-ky3AyTen1PLek4df2qqDuurCmy6jlHjfWzXno_Qe=s32-c-mo"
                alt="Logo Dog Curioso
"
            />
        </Container>
    )
}
