import React, { useState } from 'react';
import Layout from '../../Layout';
import {Link} from 'react-router-dom';
import Campo, {Botao, SeletorCor, AreaTexto} from '../../../components/Input';
import Preview from '../../../components/Preview'

const Categoria = () => {
    const valorInicial = {cor: 'red', categoria: 'Exemplo'}
    
    const [valores, setValores] = useState(valorInicial);
    const [categorias, setCategorias] = useState([]);

    const setValor = (chave, valor) => {
        setValores(
            {...valores,
                [chave]: valor
            });
    };

    const handleChange = (evt) => {
        setValor(evt.target.getAttribute('name')
        , evt.target.value);
    };

    return(
        <Layout>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={(infosEvento) => {
                infosEvento.preventDefault();
                setCategorias([...categorias,valores.categoria])
            }}
            >
                <Campo 
                    rotulo='Nome da Categoria:'
                    nome='categoria'
                    valor={valores.categoria}
                    onChange={handleChange}
                />

                <AreaTexto
                    nome='descricao'
                    rotulo='Descrição:'
                    colunas='100'
                    linhas='10'
                />
               
                <SeletorCor 
                    {
                        ...
                        {
                            nome: 'cor',
                            rotulo: 'Cor:',
                            onChange: handleChange,
                            valor: valores.cor
                        }
                    }
                />

                <Botao
                    rotulo='Cadastrar'
                />
            </form>

            <ul>
                {
                    categorias.map((categoria,indice) => {
                        return (
                        <li key={indice}>{categoria}</li>
                        );   
                    }
                    
                    )
                }
            </ul>

            <Preview
                cor={valores.cor}
                titulo={valores.categoria}
            >

            </Preview>

            <Link to="/">
                Ir para home
            </Link>
        </Layout>
    )
};

export default Categoria;