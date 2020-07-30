import React from 'react'
import styled from 'styled-components';

const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

const Categoria = ({titulo, url, texto, cor}) => {
    
    return (
        <>
            {
                titulo
                &&
                (
                    <>
                        <Title style={{ backgroundColor: cor || 'red' }}>
                            {titulo}
                        </Title>
                        {
                        url
                        &&
                            (
                                <ExtraLink href={url} target="_blank">
                                    {texto}  
                                </ExtraLink>
                            )
                        }
                    </>
                    )
            }
        </>
    );
};

export default Categoria;