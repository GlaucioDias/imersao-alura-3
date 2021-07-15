import { useState } from 'react';
import { Box, MainGrid } from '../src/components'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  
  const gitHubUser = 'glauciodias'
  const [comunidades, setComunidades] = useState(['Alurakut'])

  console.log('teste', comunidades)

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={gitHubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className='title'>Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2>O que você deseja fazer</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault()
              
              const comunidadesAtualizadas = [...comunidades, 'Alura Stars']
              setComunidades(comunidadesAtualizadas)
            }}>
              <input
                placeholder='Qual vai ser o nome da sua comunidade?'
                name='title'
                aria-label='Qual vai ser o nome da sua comunidade?'
                type='text'
              />
              <input
                placeholder='Coloque uma URL para usarmos de capa'
                name='image'
                aria-label='Coloque uma URL para usarmos de capa'
                type='text'
              />
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual, i) => {
                return (
                  <li key={i}>
                    <a href={`/users/${itemAtual}`}>
                      <img src='https://via.placeholder.com/300' />
                    <span>{itemAtual}</span>

                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />

                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
