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
        this.router.route('/:id').get(this.playlistController.getPlaylistById);
        this.router.route('/add').post(this.playlistController.addNewPlaylist);
        this.router.route('/update/:id').put(this.playlistController.updatePlaylist);
        this.router.route('/delete/:id').delete(this.playlistController.deletePlaylist);
    }
}
export default new PlaylistRoutes().router;