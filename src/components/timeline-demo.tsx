import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2013",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Primeiros passos em 2013"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2014",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/7366/startup-photos.jpg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Evolução em 2014"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Projetos marcantes em 2015"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Crescimento em 2016"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Expansão em 2017"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Inovação em 2018"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Desafios em 2019"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Resiliência em 2020"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Novas perspectivas em 2021"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Preparação para o futuro em 2022"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Realizações em 2023"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="UI library em 2024"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&w=1024&h=1024&fit=crop"
            alt="Planos para o futuro em 2025"
            className="rounded-lg object-cover h-[400px] w-[400px] md:h-[512px] md:w-[512px] mb-8 md:mb-12 shadow mx-auto"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full px-2 md:px-0 py-8 md:py-16">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}