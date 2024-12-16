export interface Wallpaper {
  path: any; // Use `any` to store the imported image object
  name: string;
}
  
export function useWallpapers(): Wallpaper[] {
  return [
    {
      // path: require("../assets/images/image1.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/xHD7Na3YTkGez2M5N_2NXg",
      name: "Image1",
    },
    {
      // path: require("../assets/images/image2.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/3GWs4M7ZSrW9s93Dpv3obQ",
      name: "Image2",
    },
    {
      // path: require("../assets/images/image3.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/UJOs1MPsR_2RpVwuKXRbqg",
      name: "Image3",
    },
    {
      // path: require("../assets/images/image4.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/K6aWMyMERRuve03sLFz4Ig",
      name: "Image4",
    },
    {
      // path: require("../assets/images/image5.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/-XVDFG7eS76RN1V7G4MEEA",
      name: "Image5",
    },
    {
      // path: require("../assets/images/image6.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/_sZmJjoYQ4y1y8ulQLTuZA",
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
      // path: require("../assets/images/image1.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/xHD7Na3YTkGez2M5N_2NXg",
      name: "Image1",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      // path: require("../assets/images/image2.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/3GWs4M7ZSrW9s93Dpv3obQ",
      name: "Image2",
      liked: true,
      suggested: true,
      library: false,
    },
    {
      // path: require("../assets/images/image3.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/UJOs1MPsR_2RpVwuKXRbqg",
      name: "Image3",
      liked: true,
      suggested: false,
      library: true,
    },
    {
      // path: require("../assets/images/image4.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/K6aWMyMERRuve03sLFz4Ig",
      name: "Image4",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      // path: require("../assets/images/image5.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/-XVDFG7eS76RN1V7G4MEEA",
      name: "Image5",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      // path: require("../assets/images/image6.png"),
      path: "https://ideogram.ai/assets/progressive-image/balanced/response/_sZmJjoYQ4y1y8ulQLTuZA",
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