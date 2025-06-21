import { useState, useEffect } from "react";
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
    image: "/snake.jpg",
    url: "https://snake-game-naman-vashi.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"]
  },
  {
    id: 2,
    title: "Breakout Game",
    description: "A classic Breakout game built with modern web technologies. Bounce the ball, break the bricks, and clear the level!",
    image: "/breakout.jpg",
    url: "https://breakout-game-naman-vashi.vercel.app/",
    technologies: ["Javascript", "HTML", "CSS", "Canvas API"]
  },
  {
    id: 3,
    title: "Maze Runner",
    description: "Move through maze, collect keys and find the exit. Avoid enemies and try to reach the goal as quickly as possible!",
    image: "/maze-runner.jpg",
    url: "https://maze-runner-naman-vashi.vercel.app/",
    technologies: ["Vanilla JavaScript", "CSS", "Canvas API"]
  }
  // Add more games here in the future
];

const Playground = () => {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleGameClick = (game: Game) => {
    setIsGameLoading(true);
    setActiveGame(game);
    // Reset fullscreen state when selecting a new game
    setIsFullscreen(false);
    
    // On mobile, scroll to the playground section to keep user in context
    if (isMobile) {
      setTimeout(() => {
        const playgroundSection = document.getElementById('playground');
        if (playgroundSection) {
          playgroundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="playground" className="py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-16">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Playground</h2>
          <div className="h-1 w-16 md:w-20 bg-primary rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm md:text-base">
            Check out some interactive games I've developed. You can play with them directly in your browser!
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
            <div className="p-3 md:p-4 bg-card/80 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <button
                onClick={() => {
                  setActiveGame(null);
                  setIsGameLoading(false);
                }}
                className="text-primary hover:underline inline-flex items-center gap-1 text-sm md:text-base min-h-[44px] px-2 py-1 rounded-md touch-manipulation"
              >
                <FaArrowLeft className="text-xs md:text-sm" /> Back to playground
              </button>
              <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
                <button
                  onClick={toggleFullscreen}
                  className="px-3 py-2 md:px-3 md:py-1 bg-primary/20 text-primary rounded-md hover:bg-primary/30 transition-colors text-xs md:text-sm min-h-[44px] flex-1 sm:flex-initial touch-manipulation"
                >
                  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
                <a
                  href={activeGame.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 md:px-3 md:py-1 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-1 text-xs md:text-sm min-h-[44px] flex-1 sm:flex-initial touch-manipulation"
                >
                  <FaExternalLinkAlt size={10} className="md:text-xs" /> 
                  <span className="hidden sm:inline">Open in New Tab</span>
                  <span className="sm:hidden">Open</span>
                </a>
              </div>
            </div>
            
            <div className={`w-full relative ${
              isFullscreen 
                ? "h-[calc(100vh-80px)] md:h-[calc(100vh-64px)]" 
                : "h-[50vh] sm:h-[60vh] md:h-[70vh]"
            }`}>
              {isGameLoading && (
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">Loading game...</p>
                  </div>
                </div>
              )}
              <iframe
                src={activeGame.url}
                title={activeGame.title}
                className="w-full h-full border-0 bg-gray-100 dark:bg-gray-800"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsGameLoading(false)}
                onError={() => setIsGameLoading(false)}
                style={{ 
                  minHeight: isMobile ? '400px' : '500px',
                  touchAction: 'manipulation'
                }}
              ></iframe>
            </div>
            
            {!isFullscreen && (
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{activeGame.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">{activeGame.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeGame.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group touch-manipulation active:scale-95"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleGameClick(game);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleGameClick(game);
                }}
              >
                <div className="h-40 md:h-48 overflow-hidden relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      className="px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2 text-sm md:text-base min-h-[44px] touch-manipulation"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGameClick(game);
                      }}
                    >
                      <FaGamepad className="text-sm md:text-base" /> Play Now
                    </button>
                  </div>
                  {/* Mobile tap indicator */}
                  <div className="md:hidden absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    Tap to play
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
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