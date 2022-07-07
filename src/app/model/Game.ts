import { VideoModel } from './VideoModel';
import { PhotoModel } from './PhotoModel';
import { GameCompany } from "./GameCompany"
import { GameStudio } from "./GameStudio"

export class Game{
    public _id: string
    public title: string
    public description: string
    public photos: PhotoModel []
    public videos: VideoModel []
    public mediumPrince: number
    public studio : GameStudio
    public company: GameCompany
    public releaseYear: number
    public genres: string []
    public platforms: string []
    public tags: string []
    public rating: number
    public ratingConsolidated: number
}
