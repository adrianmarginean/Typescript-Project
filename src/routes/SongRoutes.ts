import { Router } from 'express';
import SongController from '../controllers/SongController';

class SongRoutes {
    router = Router();
    songController = new SongController();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.songController.getAllSongs);
        this.router.route('/:id').get(this.songController.getSongById);
        this.router.route('/add').post(this.songController.addNewSong);
        this.router.route('/update/:id').put(this.songController.updateSong);
        this.router.route('/delete/:id').delete(this.songController.deleteSong);
    }
}
export default new SongRoutes().router;