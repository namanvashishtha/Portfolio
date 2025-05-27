import { useState } from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

const games: Game[] = [
  {
    id: 1,
    title: "Snake Game",
    description: "A classic Snake game built with modern web technologies. Control the snake, eat the food, and try to achieve the highest score without hitting the walls or yourself!",
    image: "https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    url: "https://snake-game-naman-vashi.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"]
  }
  // Add more games here in the future
];

const Playground = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleGameClick = (game: Game) => {
    setActiveGame(game);
    // Reset fullscreen state when selecting a new game
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="playground" className="py-20 px-6 md:px-12 lg:px-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Playground</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Check out some interactive projects I've developed. You can play with them directly in your browser!
          </p>
        </motion.div>

        {activeGame ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-card rounded-lg overflow-hidden shadow-lg ${
              isFullscreen ? "fixed inset-0 z-50 m-0 rounded-none" : ""
            }`}
          >
            <div className="p-4 bg-card/80 backdrop-blur-sm flex justify-between items-center">
              <button
                onClick={() => setActiveGame(null)}
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <FaArrowLeft /> Back to playground
              </button>
              <div className="flex gap-3">
                <button
                  onClick={toggleFullscreen}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-md hover:bg-primary/30 transition-colors"
                >
                  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
                <a
                  href={activeGame.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors inline-flex items-center gap-1"
                >
                  <FaExternalLinkAlt size={12} /> Open in New Tab
                </a>
              </div>
            </div>
            
            <div className={`w-full ${isFullscreen ? "h-[calc(100vh-64px)]" : "h-[70vh]"}`}>
              <iframe
                src={activeGame.url}
                title={activeGame.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {!isFullscreen && (
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeGame.title}</h3>
                <p className="text-muted-foreground mb-4">{activeGame.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeGame.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleGameClick(game)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2">
                      <FaGamepad /> Play Now
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {game.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {game.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        +{game.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Playground;