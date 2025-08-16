// Função que será chamada quando o botão for clicado
function executarCodigo() {
  // 1. Criamos a variável
  const nome = 'Demetrio'; // Usei 'const' porque o valor não muda

  // 2. Encontramos o elemento HTML que tem a classe "resultado"
  const paragrafoResultado = document.querySelector('.resultado'); // Outro bom lugar para usar 'const'

  // 3. Mudamos o conteúdo de texto desse elemento para o valor da variável 'nome'
  paragrafoResultado.textContent = nome;
}

// Função que será chamada quando o botão for clicado
function executarCodigo() {
  // 1. Criamos a variável
  const nome = 'Demetrio';

  // 2. Encontramos o container que está escondido no CSS
  const containerResultado = document.querySelector('.container-resultado');

  // 3. Tornamos o container visível!
  containerResultado.style.display = 'flex'; // Ou 'flex', se você estiver usando flexbox no CSS

  // 4. Encontramos o elemento de texto dentro do container
  const paragrafoResultado = document.querySelector('.resultado');

  // 5. Mudamos o conteúdo de texto para o valor da variável 'nome'
  paragrafoResultado.textContent = nome;
}