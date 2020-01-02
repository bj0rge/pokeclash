import { Express } from 'express';
import { TypeController } from '../endpoints/_index';

export function routes(app: Express) {

  app.get('/api/types', TypeController.TypeGet.list);
  app.get('/api/typesForTournament', TypeController.TypeGet.listForTournament);

}
