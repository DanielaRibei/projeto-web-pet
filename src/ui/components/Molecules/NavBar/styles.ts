import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0 0.3em 0.9em;
    box-sizing: border-box;
    display: flex;
    height: 4.5em;
    justify-content: space-between;
    padding: 0 2em;
    width: 100%;
`;

export const AppList = styled.ul`
    align-items: center;
    display: flex;
    flex: 1;
    gap: 1em;
    list-style-type: none;
`;

export const AppListItem = styled.li`
    color: #313030;
    font-size: 1.3em;
    font-weight: bold;
    margin: 0 1em;
`;

export const Logo = styled.img`
    width: 4em;
`;

export const ImgUser = styled.img`
    width: 3em;
    border-radius: 60%;
`;
