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