import { Express } from 'express';
import { MoveController } from '../endpoints/_index';

export function routes(app: Express) {

  app.get('/api/moves', MoveController.MoveGet.list);

}
