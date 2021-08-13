import { Router } from 'express';
import WineController from '../controllers/wine_controller';

const wineRouter = Router();
const wineController = new WineController();

wineRouter.get('/wines/:user_id', wineController.get);

export default wineRouter;
