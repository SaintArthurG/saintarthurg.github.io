<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Arthur Godoy</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        header {
            background: #333;
            color: #fff;
            padding: 0.5rem 1rem;
            text-align: center;
            border-radius: 12px;
            max-width: 800px;
            margin: 1rem auto;
        }
        main {
            max-width: 800px;
            margin: 2rem auto;
            padding: 1rem;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        section {
            margin-bottom: 1.5rem;
        }
        h1, h2 {
            color: #333;
        }
        footer {
            text-align: center;
            margin-top: 2rem;
            font-size: 0.9rem;
            color: #666;
        }
        .character {
	    position: absolute;
	    width: 40px;
	    height: 40px;
	    background-color: #3498db;
	    border-radius: 50%;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    color: white;
	    font-size: 20px;
	    font-weight: bold;
	    transition: transform 0.3s ease;
	}
    </style>
</head>
<body>
    <header>
        <h1 style='color: #fff'>Arthur Godoy</h1>
        <p>Analista e Desenvolvedor de Sistemas | Desenvolvedor Web</p>
    </header>
    <main>
        <section>
            <div class="character" id="character">A</div>
           <h2>Sobre Mim</h2>
            <p>Sou um desenvolvedor apaixonado por tecnologia e inovação, formado em Análise e Desenvolvimento de Sistemas. Durante minha trajetória, adquiri conhecimentos sólidos em linguagens de programação, como Java e Javascript, e em metodologias ágeis, sendo certificado SCRUM pela SCRUMStudy. </p>
            <p>Minha experiência inclui o uso de ferramentas e tecnologias como Linux, além de React, Spring Boot, e bancos de dados como MySQL. Sou autodidata e sempre busco aprimorar minhas habilidades, focando em criar soluções eficientes e de alto impacto.</p>
            <p>Com um olhar atento para design e funcionalidade, tenho trabalhado em projetos que unem tecnologia e experiência do usuário, contribuindo para o desenvolvimento de interfaces modernas e sistemas robustos.</p>
            <p>Falo inglês fluentemente e atualmente estou aprendendo francês. Nos momentos de lazer, gosto de ler e de apreciar a natureza, explorando cachoeiras e praias, o que me ajuda a manter o equilíbrio e a criatividade no trabalho.</p>
        </section>
        <section>
            <h2>Interesses</h2>
            <ul>
                <li>Especialização em Java e certificação Oracle.</li>
                <li>Desenvolvimento de aplicações web usando Spring Boot.</li>
                <li>Design e funcionalidade de interfaces modernas.</li>
            </ul>
        </section>
        <section>
            <h2>Projetos Recentes</h2>
            <ul>
                <li><strong>Agenda para cabeleireiros:</strong> Uma aplicação de gerenciamento de agendamento usando MySQL e Spring Boot.</li>
                <li><strong>Cardápio digital:</strong> Interface interativa desenvolvida com React e CSS Modules.<a href="https://github.com/SaintArthurG/Card-pio-digital" target="_blank">Ver no GitHub</a></li>
                <li><strong>API CEP em Java:</strong> Consulta de um CEP atraves de uma API. <a href="https://github.com/SaintArthurG/API_CEP" target="_blank">Ver no GitHub</a></li>
            </ul>
        </section>
        <section>
            <h2>Contato</h2>
            <p><a href="https://www.linkedin.com/in/arthur-godoy-56a986221/" target="_blank">LinkedIn</a></p>
            <p>Email: <a href="mailto:arthur.godoy@a.ucb.br">arthur.godoy@a.ucb.br</a></p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Arthur Godoy. Todos os direitos reservados.</p>
    </footer>
    <script>
        const character = document.getElementById('character');
        function positionCharacter() {
            const randomX = Math.random() * (window.innerWidth - 50);
            const randomY = Math.random() * (window.innerHeight - 50);
            character.style.left = `${randomX}px`;
            character.style.top = `${randomY}px`;
        }

        positionCharacter();
        character.addEventListener('mouseenter', () => {
            positionCharacter();
        });

 	character.addEventListener('touchstart', (event) => {
    		positionCharacter();
    		event.preventDefault();
	});
	</script>
</body>
</html>
