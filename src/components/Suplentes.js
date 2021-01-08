import React from 'react';
import { connect } from 'react-redux';

const Suplentes = ({suplentes, removeSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="banca">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => removeSuplente(j) }>X</button>
                        </div>
                        <p>{j.nombre}</p>

                    </article>
                ))
            }
        </div>
    </section>

)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    removeSuplente(jugador){
        dispatch({
            type: 'REMOVE_SUPLENTE',
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);