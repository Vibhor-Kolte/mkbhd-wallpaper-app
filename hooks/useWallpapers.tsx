export interface Wallpaper {
    path: any; // Use `any` to store the imported image object
    name: string;
  }
  
  export function useWallpapers(): Wallpaper[] {
    return [
      {
        path: require("../assets/images/image1.png"),
        name: "image1",
      },
      {
        path: require("../assets/images/image2.png"),
        name: "image2",
      },
      {
        path: require("../assets/images/image3.png"),
        name: "image3",
      },
      {
        path: require("../assets/images/image4.png"),
        name: "image4",
      },
      {
        path: require("../assets/images/image5.png"),
        name: "image5",
      },
      {
        path: require("../assets/images/image6.png"),
        name: "image6",
      },
    ];
  }  