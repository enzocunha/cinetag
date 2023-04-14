import styles from './Player.module.css';

import Banner from 'components/Banner';
import Titulo from 'components/Titulo';

import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function Player() {
	const [videos, setVideos] = useState([]);
	const parametros = useParams();
	const video = videos.find((video) => video.id === Number(parametros.id));

	useEffect(() => {
		fetch(
			'https://my-json-server.typicode.com/enzocunha/cinetag-api-myjsonserver/videos'
		)
			.then((response) => response.json())
			.then((videos) => setVideos(videos));
	}, []);

	if (!video) {
		return <NaoEncontrada />;
	}

	return (
		<>
			<Banner imagem='player' />
			<Titulo>
				<h1>Player</h1>
			</Titulo>
			<section className={styles.container}>
				<iframe
					width='560'
					height='315'
					src={video.link}
					title={video.title}
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen></iframe>
			</section>
		</>
	);
}

export default Player;
