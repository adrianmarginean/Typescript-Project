import { Router } from 'express';
import PlaylistController from '../controllers/PlaylistController';


class PlaylistRoutes {
    router = Router();


    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(PlaylistController.getAllPlaylists);
        this.router.route('/:id').get(PlaylistController.getPlaylistById);
        this.router.route('/add').post(PlaylistController.createPlaylist);
        this.router.route('/update/:id').put(PlaylistController.updatePlaylist);
        this.router.route('/delete/:id').delete(PlaylistController.deletePlaylist);
    }
}
export default new PlaylistRoutes().router;