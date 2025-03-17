## SSH

```bash
ssh-keygen -t rsa -b 4096 -C "seu_email@example.com"
```

## Configuração Inicial

```bash
git init  # Inicializa um novo repositório Git local.
```

```bash
git remote add origin <url>  # Conecta seu repositório local a um repositório remoto.
```

## Trabalhando com Alterações

```bash
git status  # Verifica o estado atual do seu repositório.
```

```bash
git add .  # Adiciona todas as mudanças atuais ao índice para commit.
```

```bash
git reset <nome-do-item>  #Remove item das mudanças atuais do Índice para commit.
```

```bash
git diff  # Mostra as diferenças entre arquivos não rastreados e o índice.
```

```bash
git commit -m "nome do commit"  # Registra as mudanças no repositório com uma mensagem de commit.
```

## Ramificação e Fusão

```bash
git branch -M main  # Renomeia a branch atual para "main".
```

```bash
git branch  # Lista todas as branches locais.
```

```bash
git branch <nome-da-branch>  # Cria uma nova branch.
```

```bash
git switch <nome-da-branch>  # Muda para a branch especificada.
```

```bash
git switch -c <nome-da-branch>  # Cria e muda para a branch especificada.
```

```bash
git merge <nome-da-branch>  # Funde a branch especificada na branch atual.
```

```bash
git merge --squash <nome-da-branch>  # Funde a branch especificada na branch atual sem historico de commits.
```

```bash
git cherry-pick <commit-hash>  # Leva o ultimo commit da branch que você queira par a branch atual.
```

```bash
git branch -D <nome-da-branch>  # Exclui a branch especificada.
```

```bash
git push origin :<nome-da-branch>  # Remove a branch especificada do repositório remoto.
```

## Colaboração

```bash
git push -u origin main  # Envia os commits locais para o repositório remoto (main) pela primeira vez.
```

```bash
git pull --rebase # Puxa e mescla alterações do repositório remoto para o repositório local.
```

## Logs e Histórico

```bash
git log  # Mostra o histórico de commits.
```

```bash
git log --oneline  # Mostra o histórico de commits em uma linha por commit.
```

```bash
git log --graph  # Mostra o histórico de commits em formato gráfico.
```

```bash
git show  # Mostra informações sobre um commit específico.
```

```bash
git log <nome-da-branch>  # Mostra o histórico de commits de uma branch específica.
```

## Revertendo Alterações

```bash
git revert <codigo-do-commit>  # Reverte um commit específico, criando um novo commit.
```

```bash
git reset --hard HEAD  # Reverte o diretório de trabalho e o índice para o estado do último commit.
```

## Stash

```bash
git stash  # Guarda mudanças temporárias que não estão prontas para commit.
```

```bash
git stash pop  # Aplica e remove a última entrada de stash.
```

```bash
git stash drop  # Remove a última entrada de stash.
```

```bash
git stash clear  # Limpa todas as entradas de stash.
```

```bash
git stash push -m "nome da stash"  # Guarda mudanças temporárias com uma mensagem associada.
```

## Worktree

```bash
git worktree add ../<nome-da-pasta> <nome-da-branch> # Cria uma nova pasta e faz o checkout automático para a branch 

```

```bash
git worktree remove ../feature-x # Remove a worktree sem deletar a branch
```

```bash
git worktree list # Listar todas as worktrees ativas
```

## Tags

```bash
git tag <nome-da-tag>  # Cria uma tag leve na versão atual.
```

```bash
git tag <nome-da-tag> <codigo-do-commit>  # Cria uma tag associada a um commit específico.
```

```bash
git tag  # Lista todas as tags no repositório.
```

```bash
git push origin <nome-da-tag>  # Envia uma tag específica para o repositório remoto.
```

```bash
git push origin --tags  # Envia todas as tags locais para o repositório remoto.
```

```bash
git tag -d <nome-da-tag>  # Exclui uma tag localmente.
```

```bash
git push --delete origin <nome-da-tag>  # Remove uma tag do repositório remoto.
```

```bash
git tag -a <nome-da-tag> -m "mensagem da tag"  # Cria uma tag anotada com uma mensagem associada.
```

```bash
git tag -v <nome-da-tag>  # Verifica a assinatura de uma tag anotada.
```
