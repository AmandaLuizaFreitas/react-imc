import { useState } from "react";
import styles from "../src/App.module.css";

import poweredImage from './assets/img/powered.png'
import leftArrowImage from './assets/img/leftarrow.png'

import {GridItem} from './components/GridItem'

import {levels,calculareImc, Level} from './helpers/imc'

const App = ()=>{
  const [heightField,setHeightField]= useState<number>(0)
  const [weighField,setWeightField]=useState<number>(0)
  const [toShow,setToShow] = useState<Level | null >(null)

  const handleCalculateButton = () =>{
    if(heightField && weighField ){
      setToShow(calculareImc(heightField,weighField))

    }
    else{
      alert('Digite todos os campos.')
    }
  }
  
  const handleBackButton = () =>{
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

 return(
 
  <div className={styles.main}>
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImage}alt="logo" width={150} />
      </div>
    </header>
    <div className={styles.container}>
     <div className={styles.leftSide}>
       <h1>Calcule o seu IMC</h1>
       <p>IMC é a sigla para  Índice de massa corpórea,parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. </p>

      <input type="number" placeholder="Digite a sua altura. Ex 1.8"
       value={heightField > 0? heightField : ''}
       onChange={e => setHeightField(parseFloat(e.target.value))}
       disabled={toShow ? true : false}
      />
       <input type="number" placeholder="Digite a seu peso.Ex 75.3(em kg)"
       value={weighField > 0? weighField : ''}
       onChange={e => setWeightField(parseFloat(e.target.value))}
       disabled={toShow ? true : false}
      />

      <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
       
     </div>
     <div className={styles.rightSide}>
      {!toShow &&
      <div className={styles.grid}>
        {levels.map((item,key) =>(
         <GridItem key={key} item= {item}/>
        ))}
      </div>
      }
      {
        toShow && 
        <div className={styles.rightBig}>
         
         <div className={styles.rightArrow} onClick={handleBackButton}>
          <img src={leftArrowImage } alt="icon Arrow" width={25}/>
         </div>
         <GridItem item={toShow}/>
        </div>
      }
     </div>
    </div>
  </div>
 )


}
export default App