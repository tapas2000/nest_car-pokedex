import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adpater';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}
  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      return { name, no };
    });

    // // Process in chunks of 5
    // const chunkSize = 5;
    // const results: Pokemon[] = [];

    // for (let i = 0; i < pokemonToInsert.length; i += chunkSize) {
    //   const chunk = pokemonToInsert.slice(i, i + chunkSize);
    //   const promises = chunk.map((pokemon: CreatePokemonDto) =>
    //     this.pokemonModel.create(pokemon),
    //   );
    //   const chunkResults = await Promise.all(promises);
    //   results.push(...chunkResults);
    // }

    await this.pokemonModel.insertMany(pokemonToInsert);

    return pokemonToInsert;
  }
}
