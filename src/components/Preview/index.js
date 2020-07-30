import React from 'react'
import Categoria from '../Carousel/components/Categoria'


const Preview = ({titulo,cor, texto}) => {
    return (
        <div>
            <Categoria
                titulo={titulo}
                cor={cor}
                texto={texto}
            >

            </Categoria>
        </div>
    );
};

export default Preview;