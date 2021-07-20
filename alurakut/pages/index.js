import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

function ProfileSidebar(props){
  
  console.log("PROPRIEDADES",props);
  return (
    <Box>
      <img src={`https://github.com/${props.gitHubUser}.png`} style={{borderRadius: '8px'}}></img>
    </Box>
  );
}

export default function Home() {
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
            Bem Vindo
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <Box >
            <h2 className="smallTitle" >Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
            {pessoasFavoritas.map((itemAtual)=>{
              return(
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`}></img>
                  <span>{itemAtual}</span>
                </a>
              );
            })}
          </Box>
          <Box>
            Comunidades
          </Box>
        </div>

      </MainGrid>
    </>
  );
}
