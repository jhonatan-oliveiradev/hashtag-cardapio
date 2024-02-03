interface ItemCardapioProps {
	nome: string;
	descricao: string;
	preco: string;
	imagem: string;
}

function ItemCardapio({ nome, descricao, preco, imagem }: ItemCardapioProps) {
	return (
		<div className="container-item-cardapio">
			<div className="informacoes-item-cardapio">
				<h2>{nome}</h2>
				<p>{descricao}</p>
				<p>{preco}</p>
			</div>
			<img src={imagem} className="imagem-item-cardapio" />
		</div>
	);
}

export default ItemCardapio;
