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
        this.router.route('/:id').get(this.artistController.getArtistById);
        this.router.route('/add').post(this.artistController.addNewArtist);
        this.router.route('/update/:id').put(this.artistController.updateArtist);
        this.router.route('/delete/:id').delete(this.artistController.deleteArtist);
    }
}
export default new ArtistRoutes().router;