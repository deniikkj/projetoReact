import './colecaodestaque.css'
import image from '../../assets/images/image.png'
import tenis from '../../assets/images/tenis.png'
import fone from '../../assets/images/fone.png'

function ColecaoDestaque (){
    return (
        <div className="container-colecao-destaque">
            <div className="colecao-destaque">
            <div className="options-colecao-destaque op1">
                    <div className='sobretudo-options-colecao-destaque'>
                    <span className="desconto">30% off</span>
                    <h1>Coleção filha da mãe</h1>
                    <button>Comprar</button>
                    </div>
                    <img className='img1' src={image} />
                </div>             
                   <div className="options-colecao-destaque op1">
                    <div className='sobretudo-options-colecao-destaque'>
                    <span className="desconto">30% off</span>
                    <h1>Coleção filha da mãe</h1>
                    <button>Comprar</button>
                    </div>
                    <img className='img2' src={tenis} />
                </div>
                <div className="options-colecao-destaque op1">
                    <div className='sobretudo-options-colecao-destaque'>
                    <span className="desconto">30% off</span>
                    <h1>Coleção filha da mãe</h1>
                    <button>Comprar</button>
                    </div>
                    <img className='img3' src={fone} />
                </div>
            </div>
        </div>
    )
}

export default ColecaoDestaque;