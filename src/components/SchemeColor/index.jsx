export const SchemeColor = ({colorp, bgcolorp}) => {
    return (
      <>
      <div>
        <div style={{ backgroundColor: bgcolorp, width: '100px', height: '50px',textAlign:'center'}}>{colorp}</div>
      </div>
      </>
    )
  };