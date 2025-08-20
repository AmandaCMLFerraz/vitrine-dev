# Vitrine Dev

Um aplicativo mobile feito em **React Native** com **Redux**, que permite buscar desenvolvedores no GitHub e visualizar suas informações, incluindo seguidores, seguindo, avatar, e-mail, bio e repositórios.

---

## 📌 Funcionalidades

### Buscar usuário do GitHub
- O usuário pode digitar um nome de usuário do GitHub e realizar a busca.  
- API utilizada: `https://api.github.com/users/{username}`

### Visualizar detalhes do usuário
- Informações exibidas: avatar, número de seguidores, número de seguindo, bio e e-mail (quando disponível).

### Listagem de repositórios do usuário
- Exibe os repositórios do usuário buscado, ordenados pelo número de estrelas.  
- API utilizada: `https://api.github.com/users/{username}/repos`

---

## 🛠 Tecnologias

- React Native  
- Redux / Redux Toolkit  
- React Navigation  
- Axios  
- Material Icons  
- Expo  

---

## 🚀 Como executar

### 1. Clonar o repositório
```bash
git clone https://github.com/AmandaCMLFerraz/vitrine-dev.git
cd vitrine-dev
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar o projeto
```bash
npx expo start
```

Você pode rodar o app em:
- **Android:** usando emulador ou dispositivo físico via QR Code  
- **iOS:** usando emulador ou dispositivo físico via QR Code  
- **Web:** pelo navegador (opcional)

