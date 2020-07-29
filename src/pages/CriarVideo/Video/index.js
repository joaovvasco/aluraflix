import React from 'react';
import Layout from '../../Layout';
import {Link} from 'react-router-dom';

const Video = () => {
    return(
        <Layout>
            <Link to="/cadastro/categoria">
                Ir cadastrar categoria
            </Link>
        </Layout>
    )
};

export default Video;