# Summarize for me
A Summarize for me é uma aplicação web que utiliza a API do MeaningCloud para gerar resumos de páginas da web ou documentos com base no número de sentenças fornecido pelo usuário. O sistema permite resumir conteúdo a partir de uma URL aberta no navegador ou de um documento enviado.

Índice

- [Arquitetura do Sistema](#Arquitetura-do-Sistema)
- [Diagrama UML](#Diagrama-UML)
- [Diagrama de Sequência](#Diagrama-de-Sequência)
- [Diagrama de Caso de Uso](#Diagrama-de-Caso-de-Uso)
- [APIs](#APIs)
- [Requisição para MeaningCloud](#Requisição-para-MeaningCloud)
- [Exemplo de Requisição](#Exemplo-de-Requisição)
- [Estrutura de Dados](#Estrutura-de-Dados)
- [Como Executar](#Como-Executar)
- [Testes](#Testes)

## Arquitetura do Sistema
A aplicação segue uma arquitetura cliente-servidor composta pelos seguintes componentes:

- Frontend (Cliente): Desenvolvido em HTML/CSS/JavaScript, gerencia a interface com o usuário e faz requisições à API.
- Backend (API MeaningCloud): Um serviço externo que realiza a sumarização de conteúdo.
- Google Chrome API: Utilizada para obter a URL da aba ativa do navegador para a sumarização de páginas da web.

## Diagrama UML

### Diagrama de Sequência
Interação entre o usuário, o SummaryService, a API do Chrome, e a API MeaningCloud quando o resumo é solicitado.
<img src="src/images/Diagrama de sequência básico.png">

### Diagrama de Caso de Uso
Descreve os principais casos de uso para o sistema.
<img src="src/images/Diagrama de caso de uso.png">

## APIs
### Requisição para MeaningCloud
A aplicação utiliza a API MeaningCloud Summarization para gerar resumos de páginas da web ou de arquivos enviados pelo usuário.

URL:
"https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0"

### Parâmetros
- sentences: Número de sentenças desejadas no resumo.
- url: URL da página da web a ser resumida.
- doc: Documento a ser resumido (não suportado via query string GET).
- 
Exemplo de Requisição
```markdown
'https://meaningcloud-summarization-v1.p.rapidapi.com/summarization-1.0?sentences=5&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStar_Trek'
```

Resposta: 
A API retorna um objeto JSON com o resumo do conteúdo fornecido:
```markdown
{
    "status": {
        "code": "0",
        "msg": "OK",
        "credits": "25"
    },
    "summary": "Star Trek is an American science fiction media franchise based on \n  the television series created by Gene Roddenberry. The first television series, \n  simply called, Star Trek, and now referred to as The Original Series, debuted in \n  1966 and aired for three seasons on the television network NBC. The Star Trek canon of the \n  franchise includes The Original Series, an animated series, four spin-off television series, \n  its film franchise and an upcoming television series scheduled to debut in 2017. In creating \n  Star Trek, Roddenberry was inspired by the Horatio Hornblower novels, the satirical book Gulliver's \n  Travels, and by works of western genre such as the television series Wagon Train. Four spin-off \n  television series were eventually produced: Star Trek: The Next Generation followed the crew of \n  a new starship Enterprise set a century after the original series; Star Trek: Deep Space Nine and \n  Star Trek: Voyager set contemporaneously with The Next Generation; and Star Trek: Enterprise set \n  before the original series in the early days of human interstellar travel."
}
```

## Estrutura de Dados
- sentences: int
- url: string
- Document: file

## Requisitos
- Node.js (para rodar testes e desenvolvimento local)
- Navegador Google Chrome (para obter URL da aba atual via API Chrome)

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Instale as dependências

```bash
npm install
```

3. Vá até chrome://extensions e selecione a pasta do projeto.

## Testes

```bash
npm test
```
