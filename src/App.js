import './App.css';
import { useState } from 'react';

function App() {
    const [pressedYes, setPressedYes] = useState(false);
    const [yesButtonInfo, setYesButtonInfo] = useState([40,90,18]);

    const noButtonText = ["Nei, egentlig ikke", "Er du helt sikker?", "Helt helt sikker?", "Bare tenk på det plis", "Jeg blir veldig lei meg hvis du sier nei", "Veldig veldig lei meg", "Vær så snill min pookie", "Ok skal stoppe å spørre", "Tulla, PLIS SI JA", "Ikke si nei plis"]
    const [noButtonIndex, setNoButtonIndex] = useState(0);


    const noButtonPressed = () => {
        setYesButtonInfo([yesButtonInfo[0]+20, yesButtonInfo[1]+35, yesButtonInfo[2]+6])
        //Mulig bedre løsning:
        //setYesButtonInfo([yesButtonInfo[0]*1.35, yesButtonInfo[1]*1.35, yesButtonInfo[2]*1.2])

        let newIndex = noButtonIndex + 1;
        if (newIndex > 9) { newIndex = 0 };
        setNoButtonIndex(newIndex);
    }

    if (pressedYes) {
        return (
            <div className='App'>
                <div className='YesComponent'>
                    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="image loading"/>
                    <p>Okey yippi!!</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='App'>
                <div className='MainComponent'>
                    <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="image loading..." height={"25%"} />
                    <p>Vil du bli min Valentine?</p>

                    <div id="buttons">
                        <button style={{height:yesButtonInfo[0], width:yesButtonInfo[1], fontSize:yesButtonInfo[2], backgroundColor:'#22c55e'}} onClick={() => setPressedYes(true)}>Ja, så klart!</button>
                        <button id='noButton' style={{height:40, backgroundColor:'#ef4444', marginLeft:15}} onClick={() => noButtonPressed()}>{noButtonText[noButtonIndex]}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
