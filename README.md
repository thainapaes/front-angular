# Projeto Frontend - Angular/Typescript
Este projeto constitui a parte de frontend do desafio, onde estão disponíveis as telas para o usuário ter acesso aos dados cadastrados no banco de dados e às regras de negócio que estão no backend. Para acessar a tela de Carros e as informações da sua conta, é preciso autenticar na tela de login.

## Estórias de Usuário

1. **[FRNT-1] Criação da tela de Usuário**
   - [FRNTS-11] Criação dos componente e configuração dos arquivos;
   - [FRNTS-12] Alterar o layout para exibir os usuários que são cadastrados localmente;
   - [FRNTS-13] Adicionar as funções básicas para manipular o usuário em tela;

2. **[FRNT-2] Criação da tela de Login**
   - [FRNTS-21] Criação do componente e configuração dos arquivos;
   - [FRNTS-22] Alteração do layout para que o usuário consiga realizar o login de maneira correta;

3. **[FRNT-3] Criação da tela de Carros**
   - [FRNTS-31] Criação do componente e configuração dos arquivos;
   - [FRNTS-32] Alterar o layout para exibir os carros que são cadastrados localmente;
   - [FRNTS-33] Adicionar as funções básicas para manipular os carros em tela;

3. **[FRNT-3] Configuração da comunicação entre as telas**
   - [FRNTS-31] Criação de um componente especifico para que o usário consiga navegar pelo sistema;

4. **[FRNT-4] Integração com o backend**
   - [FRNTS-41] Configuração das rotas para acessar o backend;
   - [FRNTS-42] Configuração do layout para que os dados retornados do backend sejam tratados de maneira adequada;
   - [FRNTS-43] ;
   - [FRNTS-44] Ajustes de erros que apareceram durante a execução das requisições;

5. **[FRNT-5] Configuração da autenticação das rotas**
   - [FRNTS-51] Criação dos arquivos para verificar as rotas autenticadas;
   - [FRNTS-52] Criação dos models para o envio das requests para o backend;

6. **[FRNT-6] Criação da funçao de logout**
   - [FRNTS-61] Configurar uma rota interna no front para que seja excluído o token do sessionStorager;

7. **[FRNT-7] Tratamento das mensagens de erro**
   - FRNTS-71] Tratamento das mensagens de erro recebidas pelo backend para serem apresentadas de maneira amigável;

8. **[FRNT-8] Deploy**
  
_Codificação das estórias:_
   - _[FRNT1]: FRNT -> o código para identificação | 1 -> o número da estória_
   - _FRNTS-11]: FRNT -> indica que é uma subtarefa da estória | 11 -> numeração de subitem, ex 1.1 = 11_

## Solução

Para a solução desse problema, foi utilizado Angular/Typescript/HTML/CSS para a construção da aplicação no frontend. A estrutura utilizada no front foi bem parecida com o backend, e todo o código foi separado dependendo da função que cada classe tem no projeto.

Explicando os packages criados:

- **autenticacao:** Classe que contém o arquivo necessário para verificar se o usuário está logado ou não;
- **carro, error-page, logado, login, principal, usuario:** Todos são classes de componentes que possuem as funções para manipulação de dados no frontend e envio deles para o backend;
- **model:** Objetos das entidades e os modelos de request que utilizamos para enviar as requisições para o backend;
- **service:** Arquivos que configuram as rotas do sistema;
