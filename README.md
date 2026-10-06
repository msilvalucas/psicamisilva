# Camila Saraiva Lima — site institucional

Site estático desenvolvido com HTML5, CSS3 e JavaScript puro. Não há etapa de build nem dependências de runtime.

## Executar localmente

Na raiz do projeto:

```sh
python3 -m http.server 4173
```

Acesse `http://localhost:4173/`.

## Estrutura

- `index.html`: conteúdo e metadados da página principal.
- `404.html`: página de URL não encontrada para hosts estáticos compatíveis.
- `assets/css/styles.css`: identidade visual e layout responsivo.
- `assets/js/`: módulos de navegação e FAQ.
- `assets/images/`: imagens originais em PNG e versões WebP otimizadas.

Para publicar, envie a raiz do repositório a qualquer hospedagem de arquivos estáticos. Configure o host para servir `404.html` nas URLs inexistentes.
