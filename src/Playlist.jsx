import { Song } from "./Song";

export const Playlist = ({ items, onDelete, onMoveDown }) => {
  return (
    <div>
      <h1>Songs {items.length}</h1>
      {items.map((elem, index) => (
        <Song
          key={elem.id}
          {...elem}
          onDelete={onDelete}
          inPlaylist={true}
          onMoveDown={() => onMoveDown(index)}
        />
      ))}
    </div>
  );
};