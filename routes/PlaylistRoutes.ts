import { Router } from 'express';
import PlaylistController from '../controllers/PlaylistController';

class PlaylistRoutes {
    router = Router();
    playlistController = new PlaylistController();

    constructor(){
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.route('/').get(this.playlistController.getAllPlaylists);
        this.router.route('/:id').get(this.playlistController.getPlaylistById)
    }
}
export default new PlaylistRoutes().router;