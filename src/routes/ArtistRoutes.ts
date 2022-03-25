import { Router } from 'express';
import ArtistController from '../controllers/ArtistController';

class ArtistRoutes {
    router = Router();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(ArtistController.getAllArtists);
        this.router.route('/:id').get(ArtistController.getArtistById);
        this.router.route('/add').post(ArtistController.createArtist);
        this.router.route('/update/:id').put(ArtistController.updateArtist);
        this.router.route('/delete/:id').delete(ArtistController.deleteArtist);
    }
}
export default new ArtistRoutes().router;