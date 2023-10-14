[x] ver porque o prisma da erro quando acessa o users
[x] dar uma revisada pra ver se tem alguma coisa
[x] acho que ele ta dando undefined quando tenta fazer prismaService.users.....
[x] não trazer o password nos get
    [x] criar um dto de resposta para o user que não tenha o password e as demais coisas que eu não quero que ele tenha
[x] ajustar o update para não deixar atualizar o userId, createdDate, updatedDate, document
[x] criar o password hasher
[x] hashear a senha do usuario na criação e atualização
[x] criar uma interface para o user service
[x] tipar os todos os retornos de metodos
[x] criar um filter de erros para a aplicação
[x] criar um filter de erros para o prisma
[x] adicionar validação de classe na criação e atualização
[] adicionar validação no fluxo de cadastro do usuario
[] adicionar validação no fluxo de atualização do usuário
[x] adicionar compressão
[x] desabilitar o powered by
[x] ver pq não da mais pra atualizar o usuario (coisa com o class validator)
    teve algum problema com as dependencias e ele não deixa mais fazer um parcial do create, fui obrigado a passar o body todo. O que claramente não é o melhor jeito pq eu to passando até o password do cara na parada
    em todos os outros projetos que fiz funcionar perfeitamente, mas nesse em específico não deu certo. Tive que instalar uma versão mais antiga do class-validator e class-transformer, caso contrário dava um aviso no bootstrap do nest.
[] criar rota para transferir dinheiro entre os usuarios
    [] criar repository de transação
        [] acho que pode ser legal criar um crud só pra ter
    [] quem ta mandando não pode ser lojista
    [] tem que ter saldo
    [] precisa subtrair de quem ta mandando e adicionar em quem ta recebendo
    [] e gravar a transação com essas informações na tabela de transações
    [] tratar os erros e jogar de volta um status http correspondente de modo que não tranque a aplicação caso o usuário seja lojista ou não tenha saldo.
[] definir o nome que eu vou usar para lojista e cliente
[] criar um enum e colocar no class-validator do create
[] todas as validações devem ser feitas utilizando o enum e não string
