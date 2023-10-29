import '../Styles/Home.css';

function Estoque() {
  return (
    <div className='Home'>
        <div className='Header'>
            <text>Nome da Loja</text>
        </div>

        {/* 
            TODO: criar variável para armazenar o nome das lojas, passar ela nos boxes da Home tb
        */}
        
        <div className='Container'>

            <div className='Box'>
                <p>CadastrarVendas</p>
            </div>

            <div className='Box'>
                <p>AdicionarProdutos</p>
            </div>

            <div className='Box'>
                <p>ConsultarEstoque</p>
            </div>

            {/* 
                TODO: Adicionar Logo (circular) em baixo, centralizada

                ??, MAIS, LUPA
            */}
        </div>
    </div>
  );
}

export default Estoque;
