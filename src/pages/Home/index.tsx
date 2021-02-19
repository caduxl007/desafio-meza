import React from 'react';
import {
  FaAlignJustify,
  FaSearch,
  FaUserCircle,
  FaTh,
  FaSort,
} from 'react-icons/fa';

import background from '../../assets/images/background.jpg';

import {
  Container,
  Header,
  HeaderContent,
  Background,
  Content,
  Main,
  ContentMain,
  InfoMain,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>
            <h1>PanVel</h1>
            <p>
              <FaAlignJustify /> CATEGORIAS
            </p>
          </div>

          <div>
            <input placeholder="O que você procura?" type="text" />
            <FaSearch />
          </div>

          <a href="/">
            <FaUserCircle /> ENTRAR
          </a>
        </HeaderContent>
      </Header>
      <Background />
      <Content>
        <div>
          <button type="button">
            <FaTh /> Quantidade
          </button>

          <button type="button">
            <FaSort /> Ordenar
          </button>
        </div>

        <Main>
          <h2>SHAMPOOS E DERMOCOSMÉTICOS</h2>
          <p>
            Lorem inpsum dolor sit amet, consectetur adipiscing elit es inpsum
            dolor sit amet, consectetur adipiscing elit es inpsum dolor sit
            amet, consectetur adipiscing elit esorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent blandit mi nec metus posuere,
            tempus consectetur.
          </p>
          <ContentMain>
            <InfoMain>
              <div>
                <h2>COMO ESCOLHER O MELHOR SHAMPOO?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent blandit mi nec metus posuere, tempus consectetur
                  massa pellentesque. Etiam et viverra mauris, tincidunt
                  sollicitudin nisi. Morbi fringilla dui sit amet rutrum
                  faucibus. In egestas mattis erat, et volutpat dolor. Aenean
                  lobortis tortor in diam eleifend, at feugiat ipsum eleifend.
                  Nullam nibh arcu, congue eu eleifend at, varius tristique
                  urna. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Nulla quis massa elit. Proin nec turpis dolor. Nulla
                  facilisi. Donec eget ligula quis quam interdum lobortis.
                </p>
              </div>
              <div>
                <h2>QUEDA DE CABELOS NUNCA MAIS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent blandit mi nec metus posuere, tempus consectetur
                  massa pellentesque. Etiam et viverra mauris, tincidunt
                  sollicitudin nisi. Morbi fringilla dui sit amet rutrum
                  faucibus. In egestas mattis erat, et volutpat dolor. Aenean
                  lobortis tortor in diam eleifend, at feugiat ipsum eleifend.
                  Nullam nibh arcu, congue eu eleifend at, varius tristique
                  urna. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Nulla quis massa elit. Proin nec turpis dolor. Nulla
                  facilisi. Donec eget ligula quis quam interdum lobortis.
                </p>
              </div>
            </InfoMain>
            <aside>
              <h3>
                CONHEÇA NOSSOS <span>SHAMPPOS </span>
              </h3>
              <img src={background} alt="imagem" />
            </aside>
          </ContentMain>

          <div>
            <h2>ANTICASPA</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              blandit mi nec metus posuere, tempus consectetur massa
              pellentesque. Etiam et viverra mauris, tincidunt sollicitudin
              nisi. Morbi fringilla dui sit amet rutrum faucibus. In egestas
              mattis erat, et volutpat dolor. Aenean lobortis tortor in diam
              eleifend, at feugiat ipsum eleifend. Nullam nibh arcu, congue eu
              eleifend at, varius tristique urna. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nulla quis massa elit. Proin nec
              turpis dolor. Nulla facilisi. Donec eget ligula quis quam interdum
              lobortis.
            </p>
          </div>

          <footer>
            <h3>
              Para mais informações sobre o combate à caspa, acesse o{' '}
              <a href="/">DermaClub</a>
            </h3>
          </footer>
        </Main>
      </Content>
    </Container>
  );
};

export default Home;
