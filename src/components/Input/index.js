import React from 'react'

const CampoComRotulo = ({para , rotulo, children}) => {
    return (
        <div>
            <label htmlFor={para}>{rotulo}</label>
            {children}
        </div>
    )
};

const CampoDefault = ({tipo , rotulo, valor, nome, onChange}) => {
    return (
        <CampoComRotulo
            rotulo={rotulo}
        >
            <input
                type={tipo}
                name={nome}
                id={nome}
                value={valor}
                onChange={onChange}
            />
        </CampoComRotulo>
    );
};

const Campo = ({rotulo, valor, nome, onChange}) => {
    return(
        <CampoDefault
            {...{
                nome,
                valor,
                rotulo,
                tipo: 'text',
                onChange
            }}
        />
    );
}

export default Campo;

export const SeletorCor = ({rotulo, valor, nome, onChange}) => {
    return (
        <CampoDefault
            {...{
                rotulo,
                valor,
                nome,
                tipo: 'color',
                onChange
            }}
        />
    );
};

export const AreaTexto = ({rotulo, valor, nome, colunas, linhas, onChange}) => {
    return (
        <CampoComRotulo
            rotulo={rotulo}
        >
            <textarea
                {...
                    {
                        name: nome,
                        cols: colunas,
                        rows: linhas,
                        onChange
                    }
                }
            >
                {valor}
            </textarea>
        </CampoComRotulo>
    );
};

export const Botao = ({rotulo, nome, onChange}) => {
    return (
        <div>
            <input
                type='submit'
                value={rotulo}
                onChange={onChange}
            />
        </div>
    );
}