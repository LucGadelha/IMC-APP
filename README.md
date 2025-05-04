# IMC-APP

Aplicativo simples desenvolvido com React Native para calcular o Índice de Massa Corporal (IMC). Permite que usuários insiram seu peso e altura para obter o valor do IMC e a classificação correspondente.

## 📱 Demonstração

[Demonstração do IMC-APP](https://v0-app-de-conta-de-imc.vercel.app)

## 🚀 Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [TypeScript](https://www.typescriptlang.org/)

## ⚙️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/LucGadelha/IMC-APP.git
   cd IMC-APP
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o projeto:

   ```bash
   npm start
   # ou
   yarn start
   ```

4. Abra o aplicativo no seu dispositivo físico ou emulador usando o Expo Go.

## 🧽 Como Funciona

O usuário insere seu peso (em kg) e altura (em metros). O aplicativo calcula o IMC utilizando a fórmula:

```typescript
IMC = peso / (altura * altura)
```

Com base no valor calculado, o aplicativo exibe a classificação correspondente:

* Abaixo de 18.5: Abaixo do peso
* 18.5 – 24.9: Peso normal
* 25.0 – 29.9: Sobrepeso
* 30.0 – 34.9: Obesidade grau I
* 35.0 – 39.9: Obesidade grau II
* 40.0 ou mais: Obesidade grau III

## 📁 Estrutura do Projeto

```bash
IMC-APP/
├── assets/             # Imagens e recursos estáticos
├── components/         # Componentes reutilizáveis
├── screens/            # Telas principais do aplicativo
├── App.tsx             # Componente principal
├── package.json        # Dependências e scripts
└── README.md           # Documentação do projeto
```

## 🧪 Testes

Este projeto não possui testes automatizados no momento. Contribuições para adicionar testes são bem-vindas!

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Para mais informações, acesse o repositório oficial: [https://github.com/LucGadelha/IMC-APP](https://github.com/LucGadelha/IMC-APP)
