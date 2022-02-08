import React from "react";
import "./styles.css";
import { CardVideo } from "./components/CardVideo/CardVideo"; 
import { ListaMenu } from "./components/CardVideo/ListaMenu/ListaMenu";

export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <ListaMenu menuVertical={"Início"} /> 
              <ListaMenu menuVertical={"Em alta"} /> 
              <ListaMenu menuVertical={"Incrições"} /> 
              <hr/>
              <ListaMenu menuVertical={"Originais"} /> 
              <ListaMenu menuVertical={"Histórico"} /> 
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo titulo={"Video 1"} video={"https://picsum.photos/400/400?a=1 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 2"} video={"https://picsum.photos/400/400?a=2 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 3"} video={"https://picsum.photos/400/400?a=3 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 4"} video={"https://picsum.photos/400/400?a=4 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 5"} video={"https://picsum.photos/400/400?a=5 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 6"} video={"https://picsum.photos/400/400?a=6 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 7"} video={"https://picsum.photos/400/400?a=7 "} onClick={reproduzVideo}/>
            <CardVideo titulo={"Video 8"} video={"https://picsum.photos/400/400?a=8 "} onClick={reproduzVideo}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
