import { defaultRippleAnimationConfig } from '@angular/material/core';

export interface Card {
  id: string;
  tipo: string;
  categoria: string;
  descricao: string;
  pontos: number;
  coracoes: number;
  bonus: boolean;
}

