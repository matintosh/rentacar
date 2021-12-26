export const AppConfig: {
  site_name: string;
  title: string;
  description: string;
  locale: string;
  api_url?: string;
} = {
  site_name: "Martinez rent a car",
  title: "Martinez Rent a Car",
  description: "Alquila tu auto aqui",
  locale: "es",
  api_url: process.env.NEXT_PUBLIC_BASE_URL,
};
