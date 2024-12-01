export interface Wallpaper{
    path: string;
    name: string;
}

export function useWallpapers(): Wallpaper[] {
    return [{
        path:"../../assets/images/image1.png",
        name:"image1"
    },{
        path:"../../assets/images/image2.png",
        name:"image2"
    },{
        path:"../../assets/images/image3.png",
        name:"image3"
    },{
        path:"../../assets/images/image4.png",
        name:"image4"
    },{
        path:"../../assets/images/image5.png",
        name:"image5"
    },{
        path:"../../assets/images/image6.png",
        name:"image6"
    }]
}