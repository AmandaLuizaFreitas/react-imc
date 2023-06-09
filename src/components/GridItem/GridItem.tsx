import { Level } from "../../helpers/imc"
import styles from './GrindItem.module.css'
import upImage from '../../assets/img/up.png'
import downImage from '../../assets/img/down.png'
type Props = {
 item:Level
}


export const GridItem = ({item}:Props) =>{
 return(
  <div className={styles.main} style = {{backgroundColor:item.color}}>
   <div className={styles.gridIcon}>
    

    <img src={item.icon === 'up'? upImage : downImage} alt="icon"width="30"  />
   </div>
   <div className={styles.gridTitle}>{item.title}</div>
   {item.yourImc && 
    <div className= {styles.yourImc}> Seu IMC é de : {item.yourImc} kg/m²</div>
   }

   <div className={styles.gridInfo}>
    <>
      IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
    </>
   </div>
  </div>
 )
}