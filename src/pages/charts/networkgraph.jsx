import { ForceGraph2D} from 'react-force-graph';
import {useRef, useEffect} from 'react';



const data  = {
  "nodes": [ 
      { 
        "id": "Victim1",
        "name": "D/20110219/9828",
        "val": 12, 
        "group": "report"
      },
      { 
        "id": "ScammerAccount1",
        "name": "07896666",
        "val": 8,
        "group": "account"
      },
      {
        "id":"ScammerAccount2",
        "name":"81009103",
        "val": 10,
        "group": "account"
      },
      {
        "id":"Victim2",
        "name":"A/20180509/4546",
        "val":7,
        "group": "report"
      },
  ],
  "links": [
      {
          "source": "Victim1",
          "target": "ScammerAccount1"
          
      },
      {
          "source":"ScammerAccount1",
          "target":"ScammerAccount2"
      },
      {
          "source":"Victim2",
          "target":"ScammerAccount1"
      },
   ]
}



export function NetworkGraph(){
  const fgRef = useRef();
  
  useEffect(() => {
    const fg = fgRef.current;
    
    fg.d3Force('link').distance(100);
    

  }, []);
  

  function nodePaint({x,y, name, color,val}, ctx){
   

    const radius = val*3
    // circle
    ctx.fillStyle = color;
    ctx.beginPath(); 
    ctx.arc(x, y, radius, 0,  2* Math.PI, false); 
    ctx.fill();

    // text
    ctx.font = `5px Sans-Serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(name, x, y, radius);

  }


  return(<ForceGraph2D
    ref={fgRef}
    graphData={data}

    nodeAutoColorBy={"group"} // for custom color need to define one by one 
    linkDirectionalArrowLength={3.5}
    linkDirectionalArrowRelPos={0.5}
    nodeCanvasObject={(node, ctx) => nodePaint(node, ctx)}
  />);
};