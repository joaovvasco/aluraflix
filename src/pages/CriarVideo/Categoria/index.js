import React from 'react';
import Layout from '../../Layout';
import {Link} from 'react-router-dom';

const Categoria = () => {
    return(
        <Layout>
            <h1>Cadastro de Categoria</h1>

            <form>

                <label>
                    Nome da Categoria:
                    <input
                    type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>


            <Link to="/">
                Ir para home
            </Link>
        </Layout>
    )
};

export default Categoria;