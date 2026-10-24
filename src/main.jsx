import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  { label: 'GAME DEVELOPMENT', icon: '⌘', items: ['Unity', 'Unreal Engine', 'C# for Unity'] },
  { label: 'VR + IMMERSIVE EXPERIENCES', icon: '◈', items: ['VR Development', 'Interactive VR Environments', 'Immersive Experience Design'] },
  { label: '3D + ENVIRONMENT DESIGN', icon: '◉', items: ['Blender', '3D Environment Design', 'Level Design', 'Lighting and Scene Composition'] },
  { label: 'CREATIVE DESIGN', icon: '⌁', items: ['Figma', 'Canva', 'UI/UX Design', 'Visual Design', 'Cinematic Visual Design'] },
];

const projects = [
  { number: '01', category: 'GAMES', title: 'STAY MAD', type: 'UNITY GAME DEVELOPMENT', description: 'A humorous rage-bait game where collecting coins can lead to unexpected traps and frustrating surprises. Built in Unity with playful obstacles designed to test the player’s patience.', tags: ['UNITY', 'C#', 'GAME DESIGN'], tone: 'green', videos: [{ label: 'STAY MAD GAMEPLAY', src: './assets/stay-mad-gameplay.mp4' }, { label: 'STAY MAD MECHANICS', src: './assets/stay-mad-mechanics.mp4' }] },
  { number: '02', category: 'CINEMATIC', title: 'STAR WARS CINEMATIC VISUAL', type: 'CINEMATIC VISUAL DESIGN', description: 'A Star Wars-inspired cinematic visual project exploring atmosphere, scene composition, lighting, and cinematic visuals. A personal fan-inspired experiment, not an official production.', tags: ['BLENDER / UNREAL'], tone: 'violet', videos: [{ label: 'CINEMATIC REEL', src: './assets/star-wars-cinematic.mp4' }] },
  { number: '03', category: 'GAMES', title: 'ECHOES OF HERITAGE', type: 'UNREAL ENGINE · EDUCATIONAL GAME', description: 'An educational game concept designed to make history more engaging through interactive exploration, historical environments, and immersive experiences. Currently a work in progress.', tags: ['UNREAL ENGINE', '3D ENVIRONMENT', 'LEVEL DESIGN'], tone: 'amber', videos: [{ label: 'CONCEPT DEMO', src: './assets/echoes-of-heritage.mp4' }] },
];

function VideoPlayer({ label, src, tone }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasMedia, setHasMedia] = useState(Boolean(src));

  useEffect(() => {
    setHasMedia(Boolean(src));
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    const sync = () => setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
    video.addEventListener('timeupdate', sync);
    return () => video.removeEventListener('timeupdate', sync);
  }, [hasMedia]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || !hasMedia) return;
    try {
      if (video.paused) {
        await video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
    } catch (err) {
      console.warn('Playback error:', err);
    }
  };

  const seek = (event) => {
    const video = videoRef.current;
    if (video?.duration) video.currentTime = (Number(event.target.value) / 100) * video.duration;
    setProgress(Number(event.target.value));
  };

  const fullscreen = () => videoRef.current?.requestFullscreen?.();

  return (
    <div className={`video-player ${tone}`}>
      {hasMedia && (
        <video
          ref={videoRef}
          src={src}
          muted={muted}
          playsInline
          preload="auto"
          onClick={togglePlay}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setHasMedia(false)}
          onEnded={() => setPlaying(false)}
          style={{ cursor: 'pointer' }}
        />
      )}
      {hasMedia && !playing && (
        <button
          type="button"
          className="video-play-center"
          onClick={togglePlay}
          aria-label={`Play ${label}`}
        >
          <span className="play-orb">▶</span>
        </button>
      )}
      {!hasMedia && (
        <div className="video-placeholder">
          <span className="play-orb">▶</span>
          <strong>{label}</strong>
          <small>ADD VIDEO TO /PUBLIC/ASSETS</small>
        </div>
      )}
      <div className="video-overlay">
        <span className="video-label">{label}</span>
        <span className="video-live">● LIVE PREVIEW</span>
      </div>
      <div className="video-controls">
        <button onClick={togglePlay} aria-label={playing ? 'Pause video' : 'Play video'}>
          {playing ? 'Ⅱ' : '▶'}
        </button>
        <input aria-label="Video progress" type="range" min="0" max="100" value={progress} onChange={seek} />
        <button
          onClick={() => {
            setMuted(!muted);
            if (videoRef.current) videoRef.current.muted = !muted;
          }}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted ? '🔇' : '🔊'}
        </button>
        <button onClick={fullscreen} aria-label="View video fullscreen">⛶</button>
      </div>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('ALL QUESTS');
  const [soundOn, setSoundOn] = useState(false);
  const playClick = () => {
    if (!soundOn) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(520, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(760, context.currentTime + 0.06);
    gain.gain.setValueAtTime(0.035, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.08);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.08);
  };
  const navigate = (id) => { playClick(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return <main>
    <div className="scanlines" />
    <header className="site-header">
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}><span className="brand-mark">VS</span><span>VIVYN SK<span className="brand-cursor">_</span></span></a>
      <nav>{['ABOUT', 'SKILLS', 'QUESTS', 'CONTACT'].map((item) => <button key={item} onClick={() => navigate(item.toLowerCase())}>{item}</button>)}</nav>
      <div className="header-actions"><button className={`sound-toggle ${soundOn ? 'on' : ''}`} onClick={() => setSoundOn(!soundOn)} aria-label="Toggle interface sounds">{soundOn ? 'SOUND ON' : 'SOUND OFF'}</button><span className="hud-status"><i /> AVAILABLE FOR COLLABS</span></div>
    </header>

    <section className="hero section-shell" id="home">
      <div className="hero-copy"><div className="eyebrow"><span>PLAYER 01</span> / GAME DEVELOPER</div><h1>BUILDING<br /><em>WORLDS.</em><br />DESIGNING EXPERIENCES<span className="cursor">_</span></h1><p className="hero-role">GAME DEVELOPER · VR DEVELOPER · UNREAL ENGINE ENTHUSIAST · 3D ENVIRONMENT DESIGNER</p><p className="hero-intro">Game Developer and Creative Designer exploring virtual reality, immersive environments, interactive gameplay, and cinematic visuals.</p><div className="cta-row"><button className="button button-primary" onClick={() => navigate('quests')}>PLAY SHOWCASE <span>↗</span></button><button className="button button-ghost" onClick={() => navigate('contact')}>GET IN TOUCH <span>→</span></button><div className="resume-actions"><a className="button button-view" href="./resume/Vivyn_SK_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={playClick}>VIEW RESUME <span>◉</span></a></div></div></div>
      <div className="profile-hud"><div className="hud-corner corner-tl" /><div className="hud-corner corner-tr" /><div className="hud-corner corner-bl" /><div className="hud-corner corner-br" /><div className="profile-ring"><img src="./assets/profile.jpg" alt="Vivyn SK profile" onError={(e) => { e.currentTarget.style.display = 'none'; }} /><div className="profile-fallback"><span>VS</span><small>PROFILE<br />SLOT 01</small></div></div><div className="profile-meta meta-top">// PROFILE READY<br /><b>CREATIVE MODE ON</b></div><div className="profile-meta meta-bottom"><span>XP <b>CS + DESIGN</b></span></div><div className="crosshair">+</div></div>
      <div className="scroll-cue"><span /> INSERT COIN TO SCROLL</div>
    </section>

    <section className="ticker"><span>✦ NOW BUILDING: IMMERSIVE WORLDS</span><span>✦ UNITY / UNREAL / BLENDER</span><span>✦ AVAILABLE FOR COLLABS</span></section>

    <section className="about section-shell" id="about"><div className="section-kicker">01 / PLAYER PROFILE</div><div className="about-grid"><div><h2>DESIGNING<br /><em>WORLDS WITH PURPOSE.</em></h2><div className="level-card"><span>PLAYER CLASS</span><strong>CREATOR</strong><div className="level-bar"><i /></div><small>GAME DEV · VR · 3D DESIGN</small></div></div><div className="about-text"><p className="lead">I’m Vivyn SK, a Computer Science and Design student interested in game development, virtual reality, immersive environments, and creative digital design.</p><p>I enjoy developing games with Unity, exploring Unreal Engine, building 3D environments, and creating interactive VR experiences.</p><div className="stat-row"><div><strong>02</strong><span>GAME<br />ENGINES</span></div><div><strong>03</strong><span>CREATIVE<br />FOCUS AREAS</span></div><div><strong>∞</strong><span>IDEAS<br />IN QUEUE</span></div></div></div></div></section>

    <section className="skills section-shell" id="skills"><div className="section-kicker">02 / LOADOUT</div><div className="skills-heading"><h2>KNOWN<br /><em>SKILLS</em></h2><p>Creative tools and game-development interests I’m building with and learning through projects.</p></div><div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.label}><div className="skill-top"><span className="skill-icon">{skill.icon}</span><span>0{index + 1}</span></div><h3>{skill.label}</h3><div className="pill-list">{skill.items.map((item) => <span key={item}>{item}</span>)}</div><div className="card-arrow">↗</div></article>)}</div></section>

    <section className="quests section-shell" id="quests"><div className="section-kicker">03 / QUEST LOG</div><div className="quests-heading"><div><h2>SELECTED<br /><em>QUESTS</em></h2><p>Three experiments in gameplay, VR development, 3D environments, and cinematic visuals.</p></div><div className="filter-row">{['ALL QUESTS', 'GAMES', 'CINEMATIC'].map((filter) => <button className={activeFilter === filter ? 'active' : ''} onClick={() => { playClick(); setActiveFilter(filter); }} key={filter}>{filter}</button>)}</div></div><div className="projects">{projects.filter((project) => activeFilter === 'ALL QUESTS' || project.category === activeFilter).map((project) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-head"><span>QUEST {project.number}</span><span className="project-type">{project.type}</span></div><div className="video-grid">{project.videos.map((video) => <VideoPlayer key={video.label} {...video} tone={project.tone} />)}</div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><span>DEMO / REPO LINK TO BE ADDED</span></div></div></article>)}</div></section>

    <section className="contact section-shell" id="contact"><div className="section-kicker">04 / CONTACT HUB</div><div className="contact-grid"><div><h2>LET’S<br /><em>CONNECT.</em></h2><p className="contact-note">Have a world in mind? Send a message and let’s find the fun in it.</p><div className="contact-cards"><a href="mailto:vivynsk18@gmail.com" aria-label="Email Vivyn SK at vivynsk18@gmail.com" onClick={playClick}><span>✉</span><div><small>GMAIL</small><strong>vivynsk18@gmail.com</strong></div><b>↗</b></a><a href="https://www.linkedin.com/in/vivyn-s-k-75ab34380/" target="_blank" rel="noopener noreferrer" aria-label="Open Vivyn SK LinkedIn profile" onClick={playClick}><span>in</span><div><small>VIEW MY PROFILE</small><strong>LinkedIn Profile</strong></div><b>↗</b></a><a href="https://wa.me/918531959904" target="_blank" rel="noopener noreferrer" aria-label="Message Vivyn SK on WhatsApp" onClick={playClick}><span>◉</span><div><small>CONTACT</small><strong>WhatsApp</strong></div><b>↗</b></a></div></div></div></section>

    <footer><div className="brand"><span className="brand-mark">VS</span><span>VIVYN SK</span></div><span>© 2024 / BUILT WITH CURIOSITY.</span><a href="#home" onClick={playClick}>BACK TO START ↑</a></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
