import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Layout from '../Layout'

const Home = () => {
    return (
        <Layout>

            <div style={{ background: "#141414" }}>
                <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={""}
                />

                <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
                />

                <Carousel
                category={dadosIniciais.categorias[1]}
                />

                <Carousel
                category={dadosIniciais.categorias[2]}
                />

                <Carousel
                category={dadosIniciais.categorias[3]}
                />

                <Carousel
                category={dadosIniciais.categorias[4]}
                />
            </div>
        </Layout>
    )
};

export default Home;