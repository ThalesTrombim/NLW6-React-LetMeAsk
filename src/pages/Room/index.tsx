import { FormEvent, useState } from 'react';
import { useParams } from 'react-router';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import '../../styles/room.scss';

type RoomParams = {
    id: string;
}

export function Room(){
    const { user } = useAuth();
    const [newQuestion, setNewQuestion] = useState('');
    const params = useParams<RoomParams>();
    const roomID = params.id;
    
    async function handleSendQuestion(e: FormEvent){
        e.preventDefault()

        if(newQuestion.trim() === ''){
            return;
        }

        if(!user){
           throw new Error('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`rooms/${roomID}/questions`).push(question);

        setNewQuestion('');
    }

    return(
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <RoomCode code={roomID}/>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Nome da sala</h1>
                    <span>4 perguntas</span>
                </div>

                <form onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="O que você quer perguntar?"
                        onChange={e => setNewQuestion(e.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        { user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : <span>Para enviar uma pergunta, <button>faça login</button>.</span>} 
                        <Button disabled={!user} type="submit">
                            Enviar pergunta
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    )
}