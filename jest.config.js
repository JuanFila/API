module.exports = {
  bail: true, // se um teste falhar ele para de executar, isso com o bail estando como true
  coverageProvider: "v8",

  testMatch: [ // passamos dentro do test match um vetor com uma expressão regular qual será o padrão do teste
  "<rootDir>/src/**/*.spec.js" // padrão dos arquivos de teste | <rootDir> pega a raiz do projeto e verifica tudo dentro da src em qualquer pasta que tenha o .spec.js
  ],
};