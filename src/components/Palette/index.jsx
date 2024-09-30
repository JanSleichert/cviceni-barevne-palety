export const Palette = ({palleteData}) => {
    return (
      <>
      {palleteData.map ((item) => {
        return (
          <>
      <div className="palette">
            <div className={`palette-scheme palette-scheme--${item.direction}`}>
              <img className="scheme-image" src={item.image} alt={item.attribution.name} />
              <div className="scheme-colors">
                <div className="scheme-color" style={{ backgroundColor: `${item.colors[0]}` }} >{item.colors[0]}</div>
                <div className="scheme-color" style={{ backgroundColor: `${item.colors[1]}` }} >{item.colors[1]}</div>
                <div className="scheme-color" style={{ backgroundColor: `${item.colors[2]}` }} >{item.colors[2]}</div>
                <div className="scheme-color" style={{ backgroundColor: `${item.colors[3]}` }} >{item.colors[3]}</div>
                <div className="scheme-color" style={{ backgroundColor: `${item.colors[4]}` }} >{item.colors[4]}</div>
              </div>
            </div>
            <div className="palette-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
  
              <p>Photo by <a href={item.attribution.url} target="_blank">{item.attribution.name}</a>.</p>
            </div>
          </div>
          </>
        )})}
      </>
    )
  };