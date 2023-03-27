# blog-next

Neste projetos foram utilizadas as seguintes tecnologias:
- Biblioteca Axios para fazer o consumo de API e conexao com o backend, trabalhando com promisses;
- Framework Bootstrap para estilização de alguns elementos da página;
- Hooks do React para manipulação e transformação de dados como (useState e usEffect)
- Biblioteca Link do Next-Link para quando houver um redirecionamento para outra página, não haja o carregamento de página como comportamento padrão do browser;
- Componentes para exportação de modelos e reaproveitamento de modelos internamente em diferentes páginas;
- Foram utilizadas metatags SEO por boa prática e melhor rankeamento dentro dos buscadores de pesquisa, trazendo consigo keywords, description e author;

Neste projeto foi utilizado técnica de array map e array filter para trazer informações retornadas da API como objeto,
foram usados conceitos de conditional rendering para exibir comentários apenas se houvesse clique no botão, valendo-se de parâmetro passado pelo useState
para a verificação do dado booleano usado para tratar o evento. Ao clicar na imagem de perfil o usuário será redirecionado para outra página e se cliclar no logo é redirecionado para a página index.
Como não há um sistema de validação que normalmente seria tratado por dados vindos de um mesmo objeto do banco de dados através do backend, não foi possível exibir os dados correspondentes ao perfil específico, da mesma forma o funcionamento do botão de comentários que funcionasse apenas para 1 post em questão ao invés de todos, já que a função onClick do react não aceita mais de uma função como parâmetro.
