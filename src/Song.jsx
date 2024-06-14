export const Song = ({ title, artist, duration = 4, onDelete, id, inPlaylist, onMove, onMoveDown }) => {
    return (
      <div className="song">
        <div className="songelem">
          <p>{title}</p>
          <button onClick={() => onDelete(id)} className="delete">
            X
          </button>
        </div>
        <b>by {artist}</b>
        <br />
        <div className="songelem">
          <i>{duration} minutes</i>
          {!inPlaylist && <button onClick={() => onMove(id)}>Move</button>}
          {inPlaylist && <button onClick={() => onMoveDown(id)}>Move Down</button>}
        </div>
      </div>
    );
  };