import React from 'react';
import supernatural from './supernatural.png';
import './App.css';

const MainMenu = () => (
    <div className="div-Menu">
      <nav id="menu">
        <ul className="ohBlog-Menu-Ul">
          <li className="ohBlog-Menu-Ul-Li"><a href="#">Blog</a></li>
          <li className="ohBlog-Menu-Ul-Li"><a href="#">Sobre</a></li>
          <li className="ohBlog-Menu-Ul-Li"><a href="#">Descrição</a></li>
        </ul>
      </nav>
    </div>
);

const MainDivImagemPerfil = () => (
    <div className="div-img-round">
        <img src={supernatural} className="img-supernatural" alt="Supernatural" />
    </div>

);

const MainDivAreaSuperiorEsquerda = () => (
    <div className="div-AreaSuperior-Esquerda">
      <MainDivImagemPerfil />
    </div> 
  );
  
  const MainDivNomePerfil = () => (
    <div className="div-NomeBlogueiro">
      Dean Winchester
    </div>
  );

const MainDivDescricaoPerfil = () => (
  <div className="div-BiografiaBlogueiro">
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</div>
);

  const MainDivAreaSuperiorDireita = () => (
      <div className="div-AreaSuperior-Direita">
        <MainDivNomePerfil />
        <MainDivDescricaoPerfil />
      </div>
    );
 
    const MainDivListaUltimasPostagens = () => (
      <div className="div-Ultimas-Postagens">
          <dl>
              <dt className="div-Ultimas-Postagens-dt">Última postagem</dt>
              <dd className="div-Ultimas-Postagens-dt-dd"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</dd>
              <dt className="div-Ultimas-Postagens-dt">Penúltima postagem</dt>
              <dd className="div-Ultimas-Postagens-dt-dd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</dd>
              <dt className="div-Ultimas-Postagens-dt">Antepenúltima postagem</dt>
              <dd className="div-Ultimas-Postagens-dt-dd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...</dd>
          </dl>
      </div>
    );
    
function App() {
  return (
    <div className="div-Fragmento">
        <div className="div-AreaSuperior">
            <MainMenu />
            <div className="div-AreaSuperiorAlinhada">
            <MainDivAreaSuperiorEsquerda />
            <MainDivAreaSuperiorDireita />
          </div>
      </div>
      <div className="div-Titulo-Postagens">Últimas do blog</div>
      <MainDivListaUltimasPostagens />
      <div className="div-MenuInferior"><a href="#" class="botao--verde">Ver todos</a></div>
  </div>
  );
}

export default App;
