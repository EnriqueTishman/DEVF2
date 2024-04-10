fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
  .then(response => response.json())
  .then(data => {
    // Aquí procesaremos los datos de Pokémon
    const pokemonData = data;
    // ...
  })
  .catch(error => console.error(error));

  class Pokemon {
    constructor(data) {
      this.name = data.name;
      this.type = data.type;
      this.weight = data.weight;
      this.moves = data.moves;
      // Agrega otras propiedades según sea necesario
    }
  }

  function renderPokemonList(pokemonData, searchQuery = '') {
    const pokemonList = document.getElementById('pokemonList');
    pokemonList.innerHTML = '';
  
    const filteredPokemon = pokemonData.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    filteredPokemon.forEach(pokemon => {
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('pokemon-card');
      pokemonCard.innerHTML = `
        <h3>${pokemon.name}</h3>
        <p>Tipo: ${pokemon.type}</p>
      `;
      pokemonCard.addEventListener('click', () => showPokemonModal(pokemon));
      pokemonList.appendChild(pokemonCard);
    });
  }

  function showPokemonModal(pokemon) {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');
    modalContainer.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>${pokemon.name}</h2>
        <p>Tipo: ${pokemon.type}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Movimientos: ${pokemon.moves.join(', ')}</p>
      </div>
    `;
  
    const closeButton = modalContainer.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      modalContainer.remove();
    });
  
    document.body.appendChild(modalContainer);
  }

  const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value;
  renderPokemonList(pokemonData, searchQuery);
});

renderPokemonList(pokemonData.map(data => new Pokemon(data)));