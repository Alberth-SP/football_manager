import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({titulares, removeTitular}) => (

    <section>
        <h2> Titulares </h2>
        <div className="cancha">
            {
                titulares.map( j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => removeTitular(j) }>X</button>
                        </div>
                        <p>{j.nombre}</p>

                    </article>
                ))
            }
        </div>


    </section>
)
const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({

    removeTitular(jugador){
        dispatch({
            type: "REMOVE_TITULAR",
            jugador
        })
    }

})
export default connect(mapStateToProps, mapDispatchToProps) (Titulares);