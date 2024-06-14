import { Song } from "./Song";

export const SongList = ({ items, onDelete, onMove }) => {
  return (
    <div>
      <h3>Song List</h3>
      {items.map(elem => (
        <Song
          key={elem.id}
          {...elem}
          onDelete={onDelete}
          onMove={onMove}
        />
      ))}
    </div>
  );
};