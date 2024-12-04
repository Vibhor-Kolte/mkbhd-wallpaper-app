export interface Wallpaper {
  path: any; // Use `any` to store the imported image object
  name: string;
}
  
export function useWallpapers(): Wallpaper[] {
  return [
    {
      path: require("../assets/images/image1.png"),
      name: "Image1",
    },
    {
      path: require("../assets/images/image2.png"),
      name: "Image2",
    },
    {
      path: require("../assets/images/image3.png"),
      name: "Image3",
    },
    {
      path: require("../assets/images/image4.png"),
      name: "Image4",
    },
    {
      path: require("../assets/images/image5.png"),
      name: "Image5",
    },
    {
      path: require("../assets/images/image6.png"),
      name: "Image6",
    },
  ];
}  

interface ForYouWallpapers extends Wallpaper{
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useForYouWallpapers(): ForYouWallpapers[] {
  return [
    {
      path: require("../assets/images/image1.png"),
      name: "Image1",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      path: require("../assets/images/image2.png"),
      name: "Image2",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      path: require("../assets/images/image3.png"),
      name: "Image3",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      path: require("../assets/images/image4.png"),
      name: "Image4",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      path: require("../assets/images/image5.png"),
      name: "Image5",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      path: require("../assets/images/image6.png"),
      name: "Image6",
      liked: false,
      suggested: true,
      library: false,
    },
  ];
}  

export function useLikedWallpapers(){
  const wallpapers = useForYouWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useSuggestedWallpapers(){
  const wallpapers = useForYouWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLibraryWallpapers(){
  const wallpapers = useForYouWallpapers();
  return wallpapers.filter(wallpaper => wallpaper.library);
}