import '../Styles/Home.css';

function HomeMenu() {
  return (
    <div className='Home'>
        <div className='Header'>
            <text>Controle de Estoque</text>
        </div>
        
        <div className='Container'>

            <p>Selecione a loja desejada: </p>

            <div className='Box'>
                <p>Conexão Jeans</p>
            </div>

            <div className='Box'>
                <p>Exclusiva</p>
            </div>

            {/* //TODO: Adicionar Logo (circular) em baixo, centralizada*/}
        </div>
    </div>
  );
}

export default HomeMenu;
