import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

function ProfileSidebar(props){
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{borderRadius: '8px'}}></img>
      <hr/>
      <p>
        <a className="boxLink" href={`https://github.com/${props.gitHubUser}`}>
          @{props.gitHubUser}
        </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([]);
  const gitHubUser = 'estevaoreis25';  
  const pessoasFavoritas = ['DenysRogeres', 
  'marcelog5', 
  'emysdias', 
  'Rocsantos',
  'sergiosacj'
  ]
  return (
    <>
    <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar gitHubUser={gitHubUser}/>
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h className="title">
            Bem Vindo(a)
            </h>
            <OrkutNostalgicIconSet/>
          </Box>

          <Box>
            <h2 className="subTitle">O que voce deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosFormulario = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString,
                titulo: dadosFormulario.get('title'),
                imagem: dadosFormulario.get('image')
              }

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }}>

              <div>
                <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
                />
              </div>

              <div>
                <input 
                placeholder="Coloque uma URL para usarmos de capa" 
                name="image" 
                aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar Comunidade
              </button>

            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle" >Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual)=>{
                return(
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle" >Comunidade({comunidades.length})</h2>

            <ul>
              {comunidades.map((itemAtual)=>{
                return(
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.titulo}`} >
                      <img src={itemAtual.imagem}/>
                      <span>{itemAtual.titulo}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  );
}
