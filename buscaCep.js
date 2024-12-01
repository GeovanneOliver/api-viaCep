import fetch from "node-fetch";

async function buscaCep(endereco) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${endereco}/json/`)
      const json = await response.json()
      
      return json
    } catch (error) {
      console.log(error.response.body);
    }
};

export { buscaCep }