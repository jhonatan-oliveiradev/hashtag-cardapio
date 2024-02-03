import { useState } from "react";

import hashtauranteImg from "./assets/hashtaurante.webp";
import { bebidas, pratosPrincipais, sobremesas } from "./cardapio";
import ItemCardapio from "./components/item-cardapio";
import Navegacao from "./components/navegacao";

function App() {
	const [paginaSelecionada, alterarPaginaSelecionada] = useState(0);

	const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

	return (
		<>
			<img src={hashtauranteImg} className="capa"></img>
			<Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
			<div className="menu">
				{secoesMenu[paginaSelecionada].map((prato) => (
					<ItemCardapio
						nome={prato.nome}
						preco={prato.preco}
						descricao={prato.descricao}
						imagem={prato.imagem}
					/>
				))}
			</div>
		</>
	);
}

export default App;
