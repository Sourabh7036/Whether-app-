import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TsunamiIcon from '@mui/icons-material/Tsunami';
export default function Infodata( { info }){
    let long_image = "https://media.istockphoto.com/id/2159963312/photo/old-gold-compass-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=iWD0S8-f85A1LTA1albUauKhE1Htl7fX_sEGqWq3ryo="
   
    return (
 
        <div className="infobox">
           <h2>Whether info </h2>

           <h3> {`latitude of ${info.name} is ${info.lat}`}</h3>
    <div className='infodata'>
      <Card sx={{ maxWidth: 345 }}>
       <CardMedia
        component="img"
        alt='Image nhi hain bhai'
        height="140"
        image={long_image}
        
       />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.name}
         { info.lat < 20 ? <AcUnitIcon/> : info.lon > 20 ? <TsunamiIcon/> : "sher"}
        </Typography>
        <div className='typo_data'>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>{`latitude of ${info.name} is ${info.lat}`}</p> 
          <p>{`longitude of ${info.name} is ${info.lon}`}</p>
          <p>{`The ${info.name} area is good for walk`} </p>
        </Typography>
        </div>
        </CardContent>
     
      </Card>
      </div>
        </div>
    )
}