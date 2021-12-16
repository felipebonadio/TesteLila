import { Card } from "../contracts/card";

export const cards: Card[] = [
  {
    id: 1,
    tipo: "Definicao",
    categoria: "visual",
    descricao: "Deficiência visual abrange pessoas cegas e pessoas com visão reduzida.",
    pontos: 1,
    coracoesPeq: 1,
    coracoesGr: 1,
    bonus1: false,
    bonus2: false
  },
  {
    id: 2,
    tipo: "Informacao",
    categoria: "auditiva",
    descricao: "O termo correto é 'Surdo' e não 'Surdo-mudo'. A mudez é uma outra deficiência.",
    pontos: 1,
    coracoesPeq: 2,
    coracoesGr:0,
    bonus1: true,
    bonus2: false
  },
  {
    id: 3,
    tipo: "Pessoa",
    categoria: "física",
    descricao: "Jillian Mercado é uma modelo americana com distrofia muscular, que se interessou pelo mundo da moda devido à sua mãe, costureira, e seu pai, vendedor de calçados.",
    pontos: 1,
    coracoesPeq: 1,
    coracoesGr:0,
    bonus1: false,
    bonus2: false
  },
  {
    id: 4,
    tipo: "Ação",
    categoria: "intelectual",
    descricao: "A pessoa com deficiência intelectual deve fazer sozinha tudo o que puder, e devemos ajudá-la somente se for necessário.",
    pontos: 2,
    coracoesPeq: 2,
    coracoesGr:1,
    bonus1: false,
    bonus2: true
  },
  {
    id: 5,
    tipo: "Filme",
    categoria: "tea",
    descricao: "Temple Grandin (2010) - Baseado no livro “Uma menina estranha”, da própria Temple, uma mulher com autismo que se tornou uma das maiores especialistas do mundo em manejo de gado.",
    pontos: 1,
    coracoesPeq: 1,
    coracoesGr:0,
    bonus1: false,
    bonus2: false
  },
  {
    id: 6,
    tipo: "Informação",
    categoria: "genérica",
    descricao: "Deficiência é o termo usado para definir a ausência ou a disfunção de uma estrutura psíquica, fisiológica ou anatômica.",
    pontos: 1,
    coracoesPeq: 0,
    coracoesGr:2,
    bonus1: false,
    bonus2: false
  },{
    id: 7,
    tipo: "Pessoa",
    categoria: "genérica",
    descricao: "Deficiência é o termo usado para definir a ausência ou a disfunção de uma estrutura psíquica, fisiológica ou anatômica.",
    pontos: 1,
    coracoesPeq: 0,
    coracoesGr:2,
    bonus1: false,
    bonus2: false
  },{
    id: 8,
    tipo: "Ação",
    categoria: "visual",
    descricao: "Nunca puxe a pessoa cega ou pegue o seu braço. Caso ela queira ser guiada, dê o seu ombro ou cotovelo dobrado para apoio.",
    pontos: 3,
    coracoesPeq: 1,
    coracoesGr:2,
    bonus1: false,
    bonus2: true
  }
];
