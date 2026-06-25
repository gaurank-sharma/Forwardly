import { Home } from "lucide-react";
import Aurora from "../components/ui/Aurora";
import MagneticButton from "../components/ui/MagneticButton";
import { LogoMark } from "../components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-dark px-6 text-center text-white">
      <Aurora dark />
      <div className="relative">
        <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-3xl glass-dark glow-brand">
          <LogoMark className="h-10 w-10" glow />
        </div>
        <p className="font-display text-[clamp(5rem,18vw,11rem)] font-extrabold leading-none text-gradient">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          This page took a different path.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The link may be broken or the page may have moved. Let's get you back
          on track.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton to="/">
            <Home size={16} /> Back home
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
