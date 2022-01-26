import appConfig from '../config.json'
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}

function Title(props) {

    /* Definindo uma tag h1 caso não tenha passado nada na props.tag, caso tenha, seta o valor de props */
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
                /* Estiliza a tag passada dentro de props */
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['900']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    )
}

export default function PaginaInicial() {
    /* const username = 'rossanp'; */
    const [username, setUsername] = React.useState('')

    return (
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary['000'],
                    backgroundImage: 'url(https://c.tenor.com/pkMEpw5eAeQAAAAC/anime-cute.gif)',
                    backgroundRepeat: 'no-repeat', backgroundSize: '100vw 102vh', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                        opacity: '0.8',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            value={username}
                            onChange={function (event) {
                                /* Escutando o valor digitado */
                                console.log(`${username} digitou`, event.target.value)
                                /* buscando o novo valor digitado */
                                const valor = event.target.value
                                /* setando o novo valor no input */
                                setUsername(valor)
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >

                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}

                            /* Definindo somente para aparecer a imagem quando o usuário tiver 2+ caracteres */
                            src={`${username.length <= 2
                                ? 'https://cdn-icons-png.flaticon.com/512/74/74472.png'
                                : `https://github.com/${username}.png`
                                }`
                            }

                        /* src={`https://github.com/${username}.png`} */
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            { username.length <= 2 ? "Usuário não encontrado!" : `${username}` }
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}