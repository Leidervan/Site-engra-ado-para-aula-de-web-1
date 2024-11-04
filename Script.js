// Função para mover as nuvens continuamente
function moveClouds() {
  const cloud1 = document.getElementById('cloud1'); // nuvem 1
  const cloud2 = document.getElementById('cloud2'); // nuvem 2
  
  let cloud1Pos = -200;
  let cloud2Pos = -300;

  function animate() {
    // Movimento das nuvens
    cloud1Pos += 0.4;
    cloud2Pos += 0.2;

    // Reposicionar a nuvem quando sair da tela
    if (cloud1Pos > window.innerWidth) cloud1Pos = -200;
    if (cloud2Pos > window.innerWidth) cloud2Pos = -300;

    cloud1.style.left = `${cloud1Pos}px`;
    cloud2.style.left = `${cloud2Pos}px`;

    requestAnimationFrame(animate);
  }

  animate();
}

// Função para dropar baldes de leite
document.getElementById('tirarLeiteBtn').addEventListener('click', () => {
  const milkContainer = document.getElementById('milkContainer');

  for (let i = 0; i < 20; i++) { // Número de baldes de leite
    const milkBucket = document.createElement('div');
    milkBucket.classList.add('milkBucket');

    // Gera posições aleatórias para os baldes de leite
    milkBucket.style.left = Math.random() * window.innerWidth + 'px';

    milkContainer.appendChild(milkBucket);
  }
});

// Chama a função de mover nuvens quando a página carrega
window.onload = moveClouds;
