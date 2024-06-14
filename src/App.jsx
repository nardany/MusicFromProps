import { useState } from "react";
import "./App.css";
import { SongList } from "./SongList";
import { Playlist } from "./Playlist";

function App() {
  const [songs, setSongs] = useState([
    { id: 100, title: "Aha ev Verj", artist: "Arthur Meschian" },
    { id: 101, title: "Miayn ayn", artist: "Arthur Meschian" },
    { id: 103, title: "Vorovhetev sirel em yes", artist: "Arthur Meschian" },
    { id: 104, title: "Zarmanum em yes", artist: "Arthur Meschian" },
    { id: 105, title: "Nuyn qaghaqne", artist: "Arthur Meschian" },
  ]);

  const [playlist, setPlaylist] = useState([]);

  const removeSong = (id) => {
    setSongs(songs.filter((x) => x.id !== id));
  };

  const moveSongToPlaylist = (id) => {
    const songToMove = songs.find((song) => song.id === id);
    if (songToMove && !playlist.some((song) => song.id === id)) {
      setPlaylist([...playlist, songToMove]);
    }
  };

  const moveSongDown = (index) => {
    if (index < playlist.length - 1) {
      const newPlaylist = [...playlist];
      [newPlaylist[index], newPlaylist[index + 1]] = [newPlaylist[index + 1], newPlaylist[index]];
      setPlaylist(newPlaylist);
    }
  };

  return (
    <div className="container">
      <h1>Hello Props</h1>
      <SongList items={songs} onDelete={removeSong} onMove={moveSongToPlaylist} />
      <Playlist items={playlist} onDelete={removeSong} onMoveDown={moveSongDown} />
    </div>
  );
}

export default App;
