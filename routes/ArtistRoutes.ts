import { Router } from 'express';
import ArtistController from '../controllers/ArtistController';

class ArtistRoutes {
    router = Router();
    artistController = new ArtistController();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.artistController.getAllArtists);
        this.router.route('/:id').get(this.artistController.getArtistById)
    }
}
export default new ArtistRoutes().router;