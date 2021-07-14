import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande'; 
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U024EMS41AM-194e0529d513-512" 
          nome="Matheus" 
          descricao="Oi, eu sou o Matheus. Faço parte dos alunos da Labenu e adoro a programação, principalmente o back-end xD."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div> 
      
      <div className="page-section-container">
        <h2>Formas de contato</h2> 
        <CardPequeno 
        imagem="http://www.unirio.br/pro-reitorias_vh_pro-reitoria-de-planejamento/arquivologia/imagens/logo%20email.png/image" 
        nome="Email:" 
        descricao="matheuso.santos@hotmail.com" 
        /> 
        
        <CardPequeno 
        imagem="https://img2.gratispng.com/20180830/bww/kisspng-the-daily-dot-internet-logo-online-newspaper-5b8824be044753.2560879215356489580175.jpg" 
        nome="Endereço:" 
        descricao="Avenida Brasil, Ricardo Melo 188"
        />
      </div> 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div> 
    </div>
  );
}

export default App;
