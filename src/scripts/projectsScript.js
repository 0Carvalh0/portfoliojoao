const projectsList = [
  {
    name: "Blink",
    thumbnailSrc: "./src/assets/images/projetos/Blink.jpg",
    description:
      "Blink é uma rede social que funciona de maneira rápida, seus posts só são visíveis para você e partir do momento em que você sai todas suas informações serão perdidas e você tera que começar tudo de novo.",
    urlProject: "https://blink-social.netlify.app/",
    urlRepository: "https://github.com/0Carvalh0/projeto-blink",
  },
  {
    name: "Te Salvando",
    thumbnailSrc: "./src/assets/images/projetos/tesalvando.jpg",
    description:
      "Site para ajuda nos estudos para vestibulares. Com esse site você poderá: Ver conteúdos que precisam ser estudados, Ver dicas de como ir bem na prova, Ver datas de provas, Ler um jornal sobre as notícias que podem cair.",
    urlProject: "https://0carvalh0.github.io/projeto-te-salvando.com/",
    urlRepository: "https://github.com/0Carvalh0/projeto-te-salvando.com",
  },
  {
    name: "CalculaJão",
    thumbnailSrc: "./src/assets/images/projetos/calculajao.jpg",
    description:
      "Meu primeiro projeto em desenvolvimento front-end, calculadora com diversos cálculos utilizando HTML5, CSS3 e JavaScript.",
    urlProject: "https://0carvalh0.github.io/calculajao/index.html",
    urlRepository: "https://github.com/0Carvalh0/calculajao",
  },
  {
    name: "Spotify Clone",
    thumbnailSrc: "./src/assets/images/projetos/spotifyclone.png",
    description:
      "Projeto criado na imersão front-end da Alura, replicando um clone do Spotify usando o React",
    urlProject: "https://spotifywithreactcarvalho.netlify.app/",
    urlRepository: "https://github.com/0Carvalh0/spotify-react",
  },
  {
    name: "Tela de Login",
    thumbnailSrc: "./src/assets/images/projetos/telalogin.png",
    description:
      "Projeto front-end criado durante o curso do Curso em Vídeo do Gustavo Guanabara para treinar responsividade.",
    urlProject: "https://0carvalh0.github.io/projeto-login/",
    urlRepository: "https://github.com/0Carvalh0/projeto-login",
  },
];

function automaticProjectGenerator(dataList) {
  const sectionInsert = document.getElementById("listInsertProjects");

  dataList.forEach((projectData, indexProject) => {
    const projectStructure = `
    <section class="main-projects__project" id="project${indexProject + 1}">
      <img
        src=${projectData.thumbnailSrc}
        alt="Imagem projeto"
        class="main-projects__project-img"/>
      <h2 class="title">${projectData.name}</h2>
      <p>
        ${projectData.description}
      </p>
      <section class="main-projects__ViewMore">
        <a href=${projectData.urlProject} target="_blank" class="main-projects__Button">Ver Projeto</a>
        <a href=${projectData.urlRepository} target="_blank" class="main-projects__Button">Ver Repositório</a>
      </section>
    </section>
    `;

    sectionInsert.innerHTML += projectStructure;
  });
}

automaticProjectGenerator(projectsList);