console.log("Trabalho com Listas");

console.log("cidades que já visitei:");

const campinas = 'Campinas';
const fortaleza = 'Fortaleza';
const bombinhas = 'Bombinhas';
const fazendaRioGrande = 'Fazenda Rio Grande';
const guaratuba = 'Guaratuba';
const rioNegro = 'Rio Negro';
const beloHorizonte = 'Belo Horizonte';
const florianópolis = 'Florianópolis';

console.log(campinas, fortaleza, bombinhas, fazendaRioGrande, guaratuba, rioNegro, beloHorizonte, florianópolis);

const cidadesQueJaVisitei = new Array(
  'Campinas',
  'Fortaleza',
  'Bombinhas',
  'Fazenda Rio Grande',
  'Guaratuba',
  'Rio Negro',
  'Belo Horizonte',
  'Florianópolis'
);

cidadesQueJaVisitei.push(`Itajaí`);

console.log(cidadesQueJaVisitei);

console.log('A cidade mais linda');
console.log(cidadesQueJaVisitei[1]);

console.log(`Meus amigos me disseram que eu nunca fui a Bombinhas, eu estava muito bêbado e eles mentiram para mim`);

cidadesQueJaVisitei.splice(2, 1);
console.log(cidadesQueJaVisitei);