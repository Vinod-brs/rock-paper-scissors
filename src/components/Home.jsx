import { useState } from "react";


export const Home = () => {
 
           
    
    
        const [comp, setComp] = useState('Start');
        const [user, setUser] = useState('Start');
        const [win, setWin] = useState(null);
        const [userName, setUserName] = useState(null);

        const [start, setstart] = useState(null);
        const [title, setTitle] = useState('Enter your Name');

        const [compScore, setCompScore] = useState(0)
        const [userScore, setUserScore] = useState(0)

        function Subm(e) {
            console.log(userName)
            setTitle('Choose your choice')
            setstart('v')
           
           
            
        }
        function setName(e) {
           
            let name = e.target?.value;
            setUserName(name.trim());
            if(e.target?.value.trim() !== '')
            document.getElementById('btn').classList.remove('d-none');
            else
            document.getElementById('btn').classList.add('d-none');
            
        }

        function Restart(){
            setUserName(null);
            setstart(null)
            setTitle('Enter your Name')
            setWin(null)
            setCompScore(0)
            setComp('Start')
            setUser('Start')
            setUserScore(0)
        }

           
        
    const opt = ['Rock', 'Paper', 'Scissors'];
   
    function Game(e) {

        if(compScore > userScore){
            document.getElementById('r1').classList.add('bg-vinod')
            document.getElementById('r2').classList.remove('bg-vinod')
        }else{
            document.getElementById('r1').classList.remove('bg-vinod')
            document.getElementById('r2').classList.add('bg-vinod')
        }
      
        
    
        const Comp = opt[Math.floor(Math.random() * 3)];
        const User = e.target.value;
        setComp(Comp)
        setUser(User)
        
        if(Comp === User)
            setWin('Draw')
        else if ( Comp === 'Scissors' && User === 'Rock' ){
            setWin('You Won')
            setUserScore(userScore + 1)
        }else if ( Comp === 'Rock' && User === 'Paper' ){
            setWin('You Won')
            setUserScore(userScore + 1)
        }else if ( Comp === 'Paper' && User === 'Scissors' ){
            setWin('You Won')
            setUserScore(userScore + 1)
        }else{
            setWin('You Lose')
            setCompScore(compScore + 1)
        }
            
        
        
    }
    return(
        <div>
           <h1 className="mt-4">Rock Paper Scissors</h1>
           <p>{title}</p><br />
        {!start &&
            <div>
                <input className="form-control w-25 mx-auto mb-2" onChange={setName} type="text" name="" id="" autoFocus/>
                <button id="btn" className="btn btn-outline-primary text-white btn-info d-none" onClick={Subm}>Play</button>
            </div>
        }

           {win &&
            <div className="win">{win}</div>
           }

        {start &&
        <div>
           <div className="mt-3">
                <table cellPadding='6px'>
                    <tr>
     
                        <td>Computer choice</td>
                        <td>:</td>
                        <td><label className="" htmlFor="">{comp}</label></td>
                    </tr>
                    <tr>
                        <td>Your choice</td>
                        <td>:</td>
                        <td>{user}</td>
                    </tr>
                </table>
                <div className="leading mb-2 px-2">Leading <span>-</span></div>

                <table className="table bg-secondary text-white" cellPadding='6px'>
                   
                    <tr id='r1' className="v">
                        <td>Computer</td>
                        <td>:</td>
                        <th>{compScore}</th>
                    </tr>
                    <tr id='r2' className="v">
                        <td>{userName}</td>
                        <td>:</td>
                        <th>{userScore}</th>
                    </tr>
                </table>
           </div>
            <div className="btns">
                <button onClick={Game} value='Rock' className="btn btn-success m-2">Rock</button>
                <button onClick={Game} value='Paper' className="btn btn-success m-2">Paper</button>
                <button onClick={Game} value='Scissors' className="btn btn-success m-2">Scissors</button><br />
                <button onClick={Restart} className="btn btn-danger mt-4">Restart</button>
            </div>
        </div>
        }

        </div>
    )
}