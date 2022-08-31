import styled from 'styled-components'

export const Container = styled.section`
    border: 0.06em solid #a9a9a9;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 25em;
    margin-bottom: 1em;
    width: 20em;
`

export const Image = styled.img`
    border-radius: 10px;
    height: 70%;
    object-fit: cover;
    width: 100%;
`

export const Title = styled.h2`
    font-weight: bold;
    margin-top: auto;
    padding: 5px;
    width: 100%;
`

export const SubTitle = styled.p`
    font-weight: bold;
    margin-top: auto;
    width: 100%;
    text-align: center;
    padding: 5px;
`
