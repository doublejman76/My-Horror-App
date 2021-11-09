import { Injectable } from "@angular/core";
import { Game } from "src/app/shared/game.model";

@Injectable({ providedIn: 'root'})
export class GameListService {
  private myGames: Game[] = [
    {
      title: 'Mortal Kombat',
      company: 'Midway',
      genre: 'Fighting',
      coverImagePath: './/',
      price: 49.99
    },
    {
      title: 'Super Mario Bros.',
      company: 'Nintendo',
      genre: 'Platform',
      coverImagePath: './/',
      price: 39.99
    },
    {
      title: 'Sonic the Hedgehog',
      company: 'Sega',
      genre: 'Platform',
      coverImagePath: './/',
      price: 35.99
    },
];
}
