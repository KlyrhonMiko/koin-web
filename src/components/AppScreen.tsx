import Image from "next/image";

export default function AppScreen({ screen, alt, priority = false }: { screen: string; alt: string; priority?: boolean }) {
  return <div className="app-screen"><Image className="screen-light" src={`/${screen}-light.png`} alt={alt} width={1220} height={2712} sizes="(max-width: 640px) 240px, 300px" priority={priority} /><Image className="screen-dark" src={`/${screen}-dark.png`} alt={alt} width={1220} height={2712} sizes="(max-width: 640px) 240px, 300px" priority={priority} /></div>;
}
