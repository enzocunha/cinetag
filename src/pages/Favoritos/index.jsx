import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

function Favoritos() {
	const { favorito } = useFavoritoContext();

	return (
		<>
			<Banner imagem='favoritos' />
			<Titulo>
				<h1>Meus favoritos</h1>
			</Titulo>

			<section className={styles.container}>
				{favorito.length === 0 ? (
					<p>
						Adicione videos aos seus favoritos para que eles
						apareçam aqui.
					</p>
				) : (
					favorito.map((fav) => {
						return <Card key={fav.id} {...fav} />;
					})
				)}
			</section>
		</>
	);
}

export default Favoritos;
